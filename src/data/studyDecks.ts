import { kanjiCards } from '@/data/kanji';
import { vocabCards } from '@/data/vocab';

export type DeckKind = 'kanji' | 'vocab';

export type StudyDetail = {
  primary: string;
  secondary?: string;
  tertiary?: string;
};

export type StudyCard = {
  id: string;
  sourceId: number;
  prompt: string;
  answerTitle: string;
  meaning: string;
  myanmarMeaning: string;
  reading: string;
  category: string;
  group?: number;
  groupLabel?: string;
  details: StudyDetail[];
  example?: string;
  exampleMeaning?: string;
};

export type StudyDeck = {
  kind: DeckKind;
  label: string;
  title: string;
  eyebrow: string;
  introTitle: string;
  introCopy: string;
  allLabel: string;
  groupLabel: string;
  groupSelectLabel: string;
  countLabel: string;
  cards: StudyCard[];
};

const kanjiStudyCards: StudyCard[] = kanjiCards.map((card) => ({
  id: `kanji-${card.id}`,
  sourceId: card.id,
  prompt: card.character,
  answerTitle: card.meaning,
  meaning: card.meaning,
  myanmarMeaning: card.myanmarMeaning,
  reading: card.readings,
  category: card.lesson ? `${card.category} / ${card.lesson}` : card.category,
  group: card.week,
  groupLabel: card.week ? `Week ${card.week}` : undefined,
  details: card.words.slice(0, 3).map((word) => ({
    primary: word.word,
    secondary: word.reading,
    tertiary: word.meaning,
  })),
  example: card.example,
  exampleMeaning: card.exampleMeaning,
}));

const vocabStudyCards: StudyCard[] = vocabCards.map((card) => ({
  id: `vocab-${card.id}`,
  sourceId: card.id,
  prompt: card.expression,
  answerTitle: card.expression,
  meaning: card.lessonTitle,
  myanmarMeaning: card.myanmarMeaning,
  reading: card.reading,
  category: `Lesson ${card.lesson} / ${card.lessonTitle}`,
  group: card.lesson,
  groupLabel: `Lesson ${card.lesson}`,
  details: [
    {
      primary: `No. ${card.itemNo}`,
      secondary: card.reading,
      tertiary: card.lessonTitle,
    },
  ],
}));

export const studyDecks: Record<DeckKind, StudyDeck> = {
  kanji: {
    kind: 'kanji',
    label: 'Kanji',
    title: 'Kanji practice',
    eyebrow: 'JLPT N3 / そうまとめ',
    introTitle: 'A little every day',
    introCopy: '',
    allLabel: 'All kanji',
    groupLabel: 'By week',
    groupSelectLabel: 'Select Sou Matome week',
    countLabel: 'characters',
    cards: kanjiStudyCards,
  },
  vocab: {
    kind: 'vocab',
    label: 'Vocab',
    title: 'Vocab practice',
    eyebrow: 'JLPT N3 / 新完全マスター',
    introTitle: 'Build useful words.',
    introCopy: '',
    allLabel: 'All vocab',
    groupLabel: 'By lesson',
    groupSelectLabel: 'Select Shinkanzen lesson',
    countLabel: 'words',
    cards: vocabStudyCards,
  },
};

export const deckKinds: DeckKind[] = ['kanji', 'vocab'];
