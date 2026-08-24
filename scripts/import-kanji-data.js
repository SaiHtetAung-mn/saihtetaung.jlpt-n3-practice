/* eslint-disable @typescript-eslint/no-require-imports */

const fs = require('fs');

const html = fs.readFileSync('/private/tmp/jlptscore-n3.html', 'utf8');

function stripHtml(value) {
  return value
    .replace(/<br\s*\/?>/gi, ' ')
    .replace(/<[^>]*>/g, '')
    .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(Number(n)))
    .replace(/&#x([0-9a-f]+);/gi, (_, n) => String.fromCodePoint(parseInt(n, 16)))
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#8217;/g, "'")
    .replace(/\s+/g, ' ')
    .trim();
}

function parseUsageWord(part) {
  const withReading = part.match(/^(.+?)（(.+?)）—\s*(.+)$/);
  if (withReading) {
    return {
      word: withReading[1].trim(),
      reading: withReading[2].trim(),
      meaning: withReading[3].trim(),
    };
  }

  const withoutReading = part.match(/^(.+?)—\s*(.+)$/);
  return withoutReading
    ? { word: withoutReading[1].trim(), reading: '', meaning: withoutReading[2].trim() }
    : { word: part.trim(), reading: '', meaning: '' };
}

const cards = [...html.matchAll(/<tr>(.*?)<\/tr>/gs)]
  .map((match) => match[1])
  .map((row) => [...row.matchAll(/<td[^>]*>(.*?)<\/td>/gs)].map((match) => stripHtml(match[1])))
  .filter((cells) => cells.length === 6 && /^\d+$/.test(cells[0]))
  .map(([id, character, readings, meaning, phrases, sentence]) => {
    const [example, exampleMeaning = ''] = sentence.split(/\s+—\s+/);

    return {
      id: Number(id),
      character,
      meaning,
      readings,
      example: example.trim(),
      exampleMeaning: exampleMeaning.trim(),
      words: phrases
        .split(/;\s*/)
        .map(parseUsageWord)
        .filter((word) => word.word),
      category: 'JLPT N3',
    };
  });

const output = `export type UsageWord = {
  word: string;
  reading: string;
  meaning: string;
};

export type KanjiCard = {
  id: number;
  character: string;
  meaning: string;
  readings: string;
  example: string;
  exampleMeaning: string;
  words: UsageWord[];
  category: string;
};

export const kanjiCards: KanjiCard[] = ${JSON.stringify(cards, null, 2)};
`;

fs.writeFileSync('src/data/kanji.ts', output);
console.log(`Imported ${cards.length} kanji cards`);
