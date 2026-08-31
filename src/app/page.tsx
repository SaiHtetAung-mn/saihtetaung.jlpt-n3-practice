'use client';

import { type FormEvent, useMemo, useRef, useState } from 'react';
import {
  BookOpen,
  Check,
  ChevronLeft,
  ChevronRight,
  LogOut,
  Menu,
  Phone,
  RotateCcw,
  Shuffle,
  Sparkles,
  Volume2,
  X,
} from 'lucide-react';
import { deckKinds, type DeckKind, studyDecks } from '@/data/studyDecks';
import { registeredPhones } from '@/data/registeredPhones';
import { isMyanmarPhone, maskPhone, normalizePhone } from '@/lib/phone';

type Rating = 'again' | 'hard' | 'good' | 'easy';
type StudyMode = 'all' | 'group';
type ReviewedState = Record<DeckKind, string[]>;

const registeredPhoneSet = new Set(registeredPhones.map(normalizePhone));

function readReviewedState(): ReviewedState {
  if (typeof window === 'undefined') return { kanji: [], vocab: [] };

  return {
    kanji: JSON.parse(window.localStorage.getItem('n3-reviewed-kanji') ?? '[]'),
    vocab: JSON.parse(window.localStorage.getItem('n3-reviewed-vocab') ?? '[]'),
  };
}

function shuffleCards(startIndex: number, eligibleIndices: number[]) {
  const remaining = eligibleIndices.filter((index) => index !== startIndex);

  for (let index = remaining.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [remaining[index], remaining[swapIndex]] = [remaining[swapIndex], remaining[index]];
  }

  return [startIndex, ...remaining];
}

export default function Home() {
  const navigationLocked = useRef(false);
  const deckOrder = useRef<number[] | null>(null);
  const deckPosition = useRef(0);
  const [phone, setPhone] = useState('');
  const [authError, setAuthError] = useState('');
  const [loggedInPhone, setLoggedInPhone] = useState(() => {
    if (typeof window === 'undefined') return '';

    const storedPhone = normalizePhone(window.localStorage.getItem('n3-auth-phone') ?? '');
    return registeredPhoneSet.has(storedPhone) ? storedPhone : '';
  });
  const [authenticated, setAuthenticated] = useState(() => {
    if (typeof window === 'undefined') return false;

    const storedPhone = window.localStorage.getItem('n3-auth-phone');
    return storedPhone ? registeredPhoneSet.has(normalizePhone(storedPhone)) : false;
  });
  const [activeDeckKind, setActiveDeckKind] = useState<DeckKind>('kanji');
  const [current, setCurrent] = useState(0);
  const [studyMode, setStudyMode] = useState<StudyMode>('all');
  const [selectedGroup, setSelectedGroup] = useState(1);
  const [revealed, setRevealed] = useState(false);
  const [reviewed, setReviewed] = useState<ReviewedState>(readReviewedState);
  const [streak, setStreak] = useState(4);
  const [menuOpen, setMenuOpen] = useState(false);

  const activeDeck = studyDecks[activeDeckKind];
  const groupOptions = useMemo(
    () =>
      Array.from(
        new Set(activeDeck.cards.map((card) => card.group).filter((group): group is number => Boolean(group))),
      ).sort((first, second) => first - second),
    [activeDeck],
  );
  const activeGroup = groupOptions.includes(selectedGroup) ? selectedGroup : (groupOptions[0] ?? 1);
  const activeIndices = useMemo(
    () =>
      activeDeck.cards
        .map((card, index) => ({ card, index }))
        .filter(({ card }) => studyMode === 'all' || card.group === activeGroup)
        .map(({ index }) => index),
    [activeDeck, activeGroup, studyMode],
  );
  const card = activeDeck.cards[current] ?? activeDeck.cards[0];
  const vocabLengthClass =
    activeDeckKind === 'vocab' && card.prompt.length > 42
      ? 'is-extra-long'
      : activeDeckKind === 'vocab' && card.prompt.length > 24
        ? 'is-long'
        : '';
  const activeCardIds = useMemo(
    () => new Set(activeIndices.map((index) => activeDeck.cards[index].id)),
    [activeDeck, activeIndices],
  );
  const activeReviewed = reviewed[activeDeckKind].filter((id) => activeCardIds.has(id)).length;
  const progress = activeIndices.length ? Math.round((activeReviewed / activeIndices.length) * 100) : 0;

  function login(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const normalizedPhone = normalizePhone(phone);

    if (!isMyanmarPhone(normalizedPhone)) {
      setAuthError('Enter a Myanmar phone number starting with 09.');
      return;
    }

    if (!registeredPhoneSet.has(normalizedPhone)) {
      setAuthError('This phone number is not registered.');
      return;
    }

    window.localStorage.setItem('n3-auth-phone', normalizedPhone);
    setAuthError('');
    setLoggedInPhone(normalizedPhone);
    setAuthenticated(true);
  }

  function logout() {
    window.localStorage.removeItem('n3-auth-phone');
    setPhone('');
    setAuthError('');
    setLoggedInPhone('');
    setAuthenticated(false);
  }

  function restartDeck(mode = studyMode, group = activeGroup, deckKind = activeDeckKind) {
    const deck = studyDecks[deckKind];
    const eligibleIndices = deck.cards
      .map((studyCard, index) => ({ studyCard, index }))
      .filter(({ studyCard }) => mode === 'all' || studyCard.group === group)
      .map(({ index }) => index);
    // eslint-disable-next-line react-hooks/purity -- Random deck starts are intentional user-triggered behavior.
    const nextStart = eligibleIndices[Math.floor(Math.random() * eligibleIndices.length)] ?? 0;

    deckOrder.current = shuffleCards(nextStart, eligibleIndices);
    deckPosition.current = 0;
    setCurrent(nextStart);
    setRevealed(false);
  }

  function changeDeck(deckKind: DeckKind) {
    const deck = studyDecks[deckKind];
    const firstGroup = deck.cards.find((studyCard) => studyCard.group)?.group ?? 1;

    setActiveDeckKind(deckKind);
    setStudyMode('all');
    setSelectedGroup(firstGroup);
    setMenuOpen(false);
    restartDeck('all', firstGroup, deckKind);
  }

  function changeMode(mode: StudyMode) {
    setStudyMode(mode);
    restartDeck(mode, activeGroup);
  }

  function changeGroup(group: number) {
    setStudyMode('group');
    setSelectedGroup(group);
    restartDeck('group', group);
  }

  function moveCard(direction: 1 | -1) {
    if (navigationLocked.current || !activeIndices.length) return;

    navigationLocked.current = true;
    setRevealed(false);
    setCurrent((value) => {
      if (!deckOrder.current) {
        deckOrder.current = shuffleCards(value, activeIndices);
        deckPosition.current = 0;
      }

      if (direction === 1 && deckPosition.current === deckOrder.current.length - 1) {
        deckOrder.current = shuffleCards(value, activeIndices);
        deckPosition.current = 0;
      }

      deckPosition.current =
        (deckPosition.current + direction + deckOrder.current.length) % deckOrder.current.length;

      return deckOrder.current[deckPosition.current];
    });
    window.setTimeout(() => {
      navigationLocked.current = false;
    }, 250);
  }

  function rate(rating: Rating) {
    if (navigationLocked.current) return;

    if (!reviewed[activeDeckKind].includes(card.id)) {
      const nextIds = [...reviewed[activeDeckKind], card.id];
      const next = { ...reviewed, [activeDeckKind]: nextIds };
      setReviewed(next);
      window.localStorage.setItem(`n3-reviewed-${activeDeckKind}`, JSON.stringify(nextIds));
    }

    setStreak((value) => (rating === 'again' ? 0 : value + 1));
    moveCard(1);
  }

  function reset() {
    restartDeck();
    setReviewed((value) => ({ ...value, [activeDeckKind]: [] }));
    setStreak(0);
    window.localStorage.removeItem(`n3-reviewed-${activeDeckKind}`);
  }

  if (!authenticated) {
    return (
      <main className="min-h-screen overflow-x-hidden bg-[#f6f4ef] text-[#242824]">
        <div className="paper-grid pointer-events-none fixed inset-0 opacity-60" />
        <div className="relative mx-auto flex min-h-screen max-w-[720px] flex-col justify-center px-5 py-8">
          <div className="auth-panel">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#d75b3f] text-white">
              <BookOpen size={19} />
            </div>
            <div>
              <p className="eyebrow">JLPT N3 / Registered access</p>
              <h1 className="mt-3 font-serif text-4xl leading-tight tracking-tight">JLPT N3 practice</h1>
            </div>
            <form onSubmit={login} className="mt-7 grid gap-4">
              <label className="grid gap-2 text-sm text-[#686c64]" htmlFor="phone">
                Phone number
                <span className="phone-input-wrap">
                  <Phone size={16} />
                  <input
                    id="phone"
                    value={phone}
                    onChange={(event) => {
                      setPhone(event.target.value);
                      setAuthError('');
                    }}
                    inputMode="tel"
                    autoComplete="tel"
                    placeholder="09*********"
                    aria-describedby={authError ? 'auth-error' : undefined}
                  />
                </span>
              </label>
              {authError ? (
                <p id="auth-error" className="auth-error">
                  {authError}
                </p>
              ) : null}
              <button type="submit" className="auth-button">
                Continue
              </button>
            </form>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f6f4ef] text-[#242824]">
      <div className="paper-grid pointer-events-none fixed inset-0 opacity-60" />
      <div className="app-shell relative mx-auto flex min-h-screen max-w-[1440px] flex-col px-5 py-5 sm:px-8 lg:px-14">
        <header className="app-header flex items-center justify-between border-b border-[#d9d7cf] pb-5">
          <div className="brand-lockup flex items-center gap-3">
            <button
              type="button"
              onClick={() => setMenuOpen((value) => !value)}
              aria-label="Open menu"
              aria-expanded={menuOpen}
              className="menu-button"
            >
              <Menu size={18} />
            </button>
            <div className="hidden h-10 w-10 items-center justify-center rounded-full bg-[#d75b3f] text-white shadow-sm sm:flex">
              <BookOpen size={18} />
            </div>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#777a72]">
                {activeDeck.eyebrow}
              </p>
              <h1 className="font-serif text-xl font-semibold tracking-tight">{activeDeck.title}</h1>
            </div>
          </div>
          <nav className="deck-tabs" aria-label="Practice menu">
            {deckKinds.map((deckKind) => (
              <button
                key={deckKind}
                type="button"
                onClick={() => changeDeck(deckKind)}
                className={activeDeckKind === deckKind ? 'is-active' : ''}
              >
                {studyDecks[deckKind].label}
              </button>
            ))}
          </nav>
        </header>

        <div className={`drawer-layer ${menuOpen ? 'is-open' : ''}`} aria-hidden={!menuOpen}>
          <button
            type="button"
            className="drawer-backdrop"
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
            tabIndex={menuOpen ? 0 : -1}
          />
          <aside className="app-drawer" aria-label="Main menu">
            <div className="drawer-header">
              <div>
                <p className="menu-section-title">Menu</p>
                <h2>JLPT N3 Practice</h2>
              </div>
              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
                className="icon-button"
                tabIndex={menuOpen ? 0 : -1}
              >
                <X size={16} />
              </button>
            </div>
            <section>
              <p className="menu-section-title">Practice</p>
              <div className="menu-deck-grid">
                {deckKinds.map((deckKind) => (
                  <button
                    key={deckKind}
                    type="button"
                    onClick={() => changeDeck(deckKind)}
                    className={activeDeckKind === deckKind ? 'is-active' : ''}
                    tabIndex={menuOpen ? 0 : -1}
                  >
                    {studyDecks[deckKind].label}
                  </button>
                ))}
              </div>
            </section>
            <section>
              <p className="menu-section-title">Account</p>
              <div className="menu-account">
                <span>
                  <Phone size={14} />
                  {maskPhone(loggedInPhone)}
                </span>
                <span>
                  Session <strong>{reviewed[activeDeckKind].length} / {activeDeck.cards.length}</strong>
                </span>
              </div>
              <div className="menu-actions">
                <button type="button" onClick={reset} tabIndex={menuOpen ? 0 : -1}>
                  <RotateCcw size={15} />
                  Reset progress
                </button>
                <button type="button" onClick={logout} tabIndex={menuOpen ? 0 : -1}>
                  <LogOut size={15} />
                  Sign out
                </button>
              </div>
            </section>
          </aside>
        </div>

        <section className="study-grid grid flex-1 items-center gap-10 py-10 lg:grid-cols-[minmax(260px,0.7fr)_minmax(500px,1.45fr)_minmax(190px,0.55fr)] lg:gap-16 lg:py-16">
          <div className="intro-panel order-3 lg:order-1">
            <p className="eyebrow">Today&apos;s study</p>
            <h2 className="mt-4 max-w-xs font-serif text-4xl leading-[1.02] tracking-tight sm:text-5xl">
              {activeDeck.introTitle}
            </h2>
            <p className="mt-5 max-w-xs text-[15px] leading-7 text-[#686c64]">
              {activeDeck.introCopy}
            </p>
            <div className="study-panel mt-8">
              <div className="mode-tabs" aria-label="Study mode">
                <button
                  type="button"
                  onClick={() => changeMode('all')}
                  className={studyMode === 'all' ? 'is-active' : ''}
                >
                  <Shuffle size={14} /> {activeDeck.allLabel}
                </button>
                <button
                  type="button"
                  onClick={() => changeMode('group')}
                  className={studyMode === 'group' ? 'is-active' : ''}
                >
                  <BookOpen size={14} /> {activeDeck.groupLabel}
                </button>
              </div>
              {studyMode === 'group' ? (
                <select
                  className="week-select"
                  value={activeGroup}
                  onChange={(event) => changeGroup(Number(event.target.value))}
                  aria-label={activeDeck.groupSelectLabel}
                >
                  {groupOptions.map((group) => (
                    <option key={group} value={group}>
                      {activeDeck.cards.find((studyCard) => studyCard.group === group)?.groupLabel ?? `Group ${group}`}
                    </option>
                  ))}
                </select>
              ) : null}
              <span className="study-count">{activeIndices.length} cards</span>
            </div>
            <div className="mt-10 flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-[#d75b3f]" />
              <span className="font-mono text-xs uppercase tracking-[0.18em] text-[#777a72]">
                {streak} day streak
              </span>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="card-meta mb-4 flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.16em] text-[#85877f]">
              <span>{activeDeck.label} {String(card.sourceId).padStart(3, '0')}</span>
              <span>{card.category}</span>
            </div>
            <button
              onClick={() => setRevealed(!revealed)}
              className={`flashcard group ${activeDeckKind === 'vocab' ? 'is-vocab' : ''} ${revealed ? 'is-revealed' : ''}`}
              aria-label={revealed ? 'Hide answer' : 'Reveal answer'}
            >
              <div className="absolute left-7 top-7 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-[#9a9b94]">
                <Sparkles size={13} /> {revealed ? 'Answer' : 'Recall'}
              </div>
              {!revealed ? (
                <>
                  <span className={activeDeckKind === 'kanji' ? 'kanji-character' : `vocab-character ${vocabLengthClass}`}>
                    {card.prompt}
                  </span>
                  <span className="absolute bottom-8 text-xs text-[#96988f]">Tap to reveal</span>
                </>
              ) : (
                <div className="revealed-content flex h-full w-full flex-col items-center justify-center px-7 py-12 text-center sm:px-10">
                  <span className={activeDeckKind === 'kanji' ? 'revealed-kanji mb-4 font-serif text-7xl text-[#d75b3f]' : `revealed-vocab ${vocabLengthClass} mb-4 font-serif text-5xl text-[#d75b3f]`}>
                    {card.answerTitle}
                  </span>
                  {activeDeckKind === 'kanji' ? (
                    <span className="answer-meaning max-w-full text-wrap font-mono text-sm leading-6 text-[#30362f]">{card.meaning}</span>
                  ) : null}
                  <span className="myanmar-text answer-line mt-2 text-sm leading-6 text-[#5f665d]">{card.myanmarMeaning}</span>
                  <span className="answer-line mt-3 text-sm text-[#7c8078]">{card.reading}</span>
                  <div className="mt-6 grid w-full max-w-xl gap-2 border-t border-[#dfddd5] pt-5 text-left">
                    {card.details.map((detail) => (
                      <div key={`${card.id}-${detail.primary}`} className="usage-row">
                        <span className="font-serif text-base text-[#343a33]">{detail.primary}</span>
                        <span className="text-xs text-[#7c8078]">{detail.secondary}</span>
                        <span className="text-xs text-[#686c64]">{detail.tertiary}</span>
                      </div>
                    ))}
                  </div>
                  {card.example ? <span className="mt-5 font-serif text-base text-[#444941]">{card.example}</span> : null}
                  {card.exampleMeaning ? <span className="mt-1 text-xs text-[#898c84]">{card.exampleMeaning}</span> : null}
                </div>
              )}
              <span className="absolute bottom-8 right-7">
                <Volume2 size={17} className="text-[#aaa9a1]" />
              </span>
            </button>
            <div className="card-nav mt-5 flex items-center justify-between">
              <button onClick={() => moveCard(-1)} className="text-button">
                <ChevronLeft size={16} /> Previous
              </button>
              <span className="font-mono text-xs text-[#999b93]">{progress}% complete</span>
              <button onClick={() => moveCard(1)} className="text-button">
                Skip <ChevronRight size={16} />
              </button>
            </div>
          </div>

          <aside className="review-panel order-2 border-t border-[#d9d7cf] pt-7 lg:order-3 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
            <p className="eyebrow">How did it feel?</p>
            <p className="mt-3 text-sm leading-6 text-[#777a72]">Reveal the card, then choose a pace.</p>
            <div className="rating-grid mt-6 grid grid-cols-2 gap-2 lg:grid-cols-1">
              <button onClick={() => rate('again')} className="rate-button">
                <X size={15} />
                <span>
                  <strong>Again</strong>
                  <small>Start over</small>
                </span>
              </button>
              <button onClick={() => rate('hard')} className="rate-button">
                <span className="rate-mark">~</span>
                <span>
                  <strong>Hard</strong>
                  <small>Keep close</small>
                </span>
              </button>
              <button onClick={() => rate('good')} className="rate-button">
                <Check size={15} />
                <span>
                  <strong>Good</strong>
                  <small>In a few days</small>
                </span>
              </button>
              <button onClick={() => rate('easy')} className="rate-button">
                <Sparkles size={15} />
                <span>
                  <strong>Easy</strong>
                  <small>Next week</small>
                </span>
              </button>
            </div>
          </aside>
        </section>

        <footer className="app-footer flex flex-col gap-4 border-t border-[#d9d7cf] py-5 text-xs text-[#85877f] sm:flex-row sm:items-center sm:justify-between">
          <span className="font-mono uppercase tracking-[0.15em]">
            N3 / {activeDeck.cards.length} {activeDeck.countLabel}
          </span>
          <div className="footer-actions flex items-center gap-5">
            <span>All rights reserved sha.jlpt-n3-practice</span>
            <span className="hidden h-1 w-1 rounded-full bg-[#b5b5ad] sm:block" />
            <span>
              Kanji data: <a href="https://www.edrdg.org/wiki/index.php/KANJIDIC_Project" target="_blank" rel="noreferrer">KANJIDIC2/EDRDG</a>
            </span>
            <span className="hidden h-1 w-1 rounded-full bg-[#b5b5ad] sm:block" />
            <span>Progress is saved locally</span>
            <span className="hidden h-1 w-1 rounded-full bg-[#b5b5ad] sm:block" />
            <span className="flex items-center gap-1">
              <span className="kbd">Space</span> reveal
            </span>
          </div>
        </footer>
      </div>
    </main>
  );
}
