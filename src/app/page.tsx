'use client';

import { useRef, useState } from 'react';
import {
  BookOpen,
  Check,
  ChevronLeft,
  ChevronRight,
  RotateCcw,
  Sparkles,
  Volume2,
  X,
} from 'lucide-react';
import { kanjiCards } from '@/data/kanji';

type Rating = 'again' | 'hard' | 'good' | 'easy';

function shuffleCards(startIndex: number) {
  const remaining = kanjiCards
    .map((_, index) => index)
    .filter((index) => index !== startIndex);

  for (let index = remaining.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [remaining[index], remaining[swapIndex]] = [remaining[swapIndex], remaining[index]];
  }

  return [startIndex, ...remaining];
}

export default function Home() {
  const navigationLocked = useRef(false);
  const deck = useRef<number[] | null>(null);
  const deckPosition = useRef(0);
  const [current, setCurrent] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const [reviewed, setReviewed] = useState<number[]>(() => {
    if (typeof window === 'undefined') return [];

    const stored = window.localStorage.getItem('n3-reviewed');
    return stored ? JSON.parse(stored) : [];
  });
  const [streak, setStreak] = useState(4);

  const card = kanjiCards[current];
  const progress = Math.round((reviewed.length / kanjiCards.length) * 100);

  function moveCard(direction: 1 | -1) {
    if (navigationLocked.current) return;

    navigationLocked.current = true;
    setRevealed(false);
    setCurrent((value) => {
      if (!deck.current) {
        deck.current = shuffleCards(value);
        deckPosition.current = 0;
      }

      if (direction === 1 && deckPosition.current === deck.current.length - 1) {
        deck.current = shuffleCards(value);
        deckPosition.current = 0;
      }

      deckPosition.current =
        (deckPosition.current + direction + deck.current.length) % deck.current.length;

      return deck.current[deckPosition.current];
    });
    window.setTimeout(() => {
      navigationLocked.current = false;
    }, 250);
  }

  function rate(rating: Rating) {
    if (navigationLocked.current) return;

    if (!reviewed.includes(card.id)) {
      const next = [...reviewed, card.id];
      setReviewed(next);
      window.localStorage.setItem('n3-reviewed', JSON.stringify(next));
    }

    setStreak((value) => (rating === 'again' ? 0 : value + 1));
    moveCard(1);
  }

  function reset() {
    const nextStart = Math.floor(Math.random() * kanjiCards.length);

    deck.current = shuffleCards(nextStart);
    deckPosition.current = 0;
    setCurrent(nextStart);
    setReviewed([]);
    setStreak(0);
    setRevealed(false);
    window.localStorage.removeItem('n3-reviewed');
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#f6f4ef] text-[#242824]">
      <div className="paper-grid pointer-events-none fixed inset-0 opacity-60" />
      <div className="relative mx-auto flex min-h-screen max-w-[1440px] flex-col px-5 py-5 sm:px-8 lg:px-14">
        <header className="flex items-center justify-between border-b border-[#d9d7cf] pb-5">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#d75b3f] text-white shadow-sm">
              <BookOpen size={18} />
            </div>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#777a72]">
                JLPT N3 / そうまとめ
              </p>
              <h1 className="font-serif text-xl font-semibold tracking-tight">Kanji practice</h1>
            </div>
          </div>
          <div className="flex items-center gap-4 text-sm">
            <span className="hidden text-[#777a72] sm:block">
              Session <strong className="text-[#242824]">{reviewed.length} / {kanjiCards.length}</strong>
            </span>
            <button onClick={reset} aria-label="Reset progress" title="Reset progress" className="icon-button">
              <RotateCcw size={16} />
            </button>
          </div>
        </header>

        <section className="grid flex-1 items-center gap-10 py-10 lg:grid-cols-[minmax(260px,0.7fr)_minmax(500px,1.45fr)_minmax(190px,0.55fr)] lg:gap-16 lg:py-16">
          <div className="order-2 lg:order-1">
            <p className="eyebrow">Today&apos;s study</p>
            <h2 className="mt-4 max-w-xs font-serif text-4xl leading-[1.02] tracking-tight sm:text-5xl">
              A little every day.
            </h2>
            <p className="mt-5 max-w-xs text-[15px] leading-7 text-[#686c64]">
              Practice real N3 kanji with readings, usage words, and example sentences.
            </p>
            <div className="mt-10 flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-[#d75b3f]" />
              <span className="font-mono text-xs uppercase tracking-[0.18em] text-[#777a72]">
                {streak} day streak
              </span>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="mb-4 flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.16em] text-[#85877f]">
              <span>Card {String(card.id).padStart(3, '0')}</span>
              <span>{card.category}</span>
            </div>
            <button
              onClick={() => setRevealed(!revealed)}
              className={`flashcard group ${revealed ? 'is-revealed' : ''}`}
              aria-label={revealed ? 'Hide answer' : 'Reveal answer'}
            >
              <div className="absolute left-7 top-7 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-[#9a9b94]">
                <Sparkles size={13} /> {revealed ? 'Answer' : 'Recall'}
              </div>
              {!revealed ? (
                <>
                  <span className="kanji-character">{card.character}</span>
                  <span className="absolute bottom-8 text-xs text-[#96988f]">Tap to reveal</span>
                </>
              ) : (
                <div className="flex h-full w-full flex-col items-center justify-center px-7 py-12 text-center sm:px-10">
                  <span className="mb-4 font-serif text-7xl text-[#d75b3f]">{card.character}</span>
                  <span className="max-w-full text-wrap font-mono text-lg text-[#30362f]">{card.meaning}</span>
                  <span className="mt-3 text-sm text-[#7c8078]">{card.readings}</span>
                  <div className="mt-6 grid w-full max-w-xl gap-2 border-t border-[#dfddd5] pt-5 text-left">
                    {card.words.slice(0, 3).map((word) => (
                      <div key={`${card.id}-${word.word}`} className="usage-row">
                        <span className="font-serif text-base text-[#343a33]">{word.word}</span>
                        <span className="text-xs text-[#7c8078]">{word.reading}</span>
                        <span className="text-xs text-[#686c64]">{word.meaning}</span>
                      </div>
                    ))}
                  </div>
                  <span className="mt-5 font-serif text-base text-[#444941]">{card.example}</span>
                  <span className="mt-1 text-xs text-[#898c84]">{card.exampleMeaning}</span>
                </div>
              )}
              <span className="absolute bottom-8 right-7">
                <Volume2 size={17} className="text-[#aaa9a1]" />
              </span>
            </button>
            <div className="mt-5 flex items-center justify-between">
              <button
                onClick={() => moveCard(-1)}
                className="text-button"
              >
                <ChevronLeft size={16} /> Previous
              </button>
              <span className="font-mono text-xs text-[#999b93]">{progress}% complete</span>
              <button
                onClick={() => moveCard(1)}
                className="text-button"
              >
                Skip <ChevronRight size={16} />
              </button>
            </div>
          </div>

          <aside className="order-3 border-t border-[#d9d7cf] pt-7 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
            <p className="eyebrow">How did it feel?</p>
            <p className="mt-3 text-sm leading-6 text-[#777a72]">Reveal the card, then choose a pace.</p>
            <div className="mt-6 grid grid-cols-2 gap-2 lg:grid-cols-1">
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

        <footer className="flex flex-col gap-4 border-t border-[#d9d7cf] py-5 text-xs text-[#85877f] sm:flex-row sm:items-center sm:justify-between">
          <span className="font-mono uppercase tracking-[0.15em]">N3 / {kanjiCards.length} characters</span>
          <div className="flex items-center gap-5">
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
