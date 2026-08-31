/* eslint-disable @typescript-eslint/no-require-imports */

const fs = require('fs');

const groupSource = fs.readFileSync('scripts/add-soumatome-groups.js', 'utf8');
const dataSource = fs.readFileSync('src/data/kanji.ts', 'utf8');
const groups = [...groupSource.matchAll(/\{ week: (\d+), day: (\d+), lesson: '([^']+)', kanji: '([^']+)' \}/g)].map(
  (match) => ({
    week: Number(match[1]),
    day: Number(match[2]),
    lesson: match[3],
    kanji: Array.from(match[4]),
  }),
);
const cards = JSON.parse(dataSource.match(/export const kanjiCards: KanjiCard\[\] = ([\s\S]*);\s*$/)[1]);
const cardCharacters = new Set(cards.map((card) => card.character));
const sourceCharacters = new Set(groups.flatMap((group) => group.kanji));

const missingGroups = groups
  .map((group) => ({
    ...group,
    missing: group.kanji.filter((character) => !cardCharacters.has(character)),
  }))
  .filter((group) => group.missing.length > 0);

console.log(
  JSON.stringify(
    {
      groups: groups.length,
      sourceCharacters: sourceCharacters.size,
      cards: cards.length,
      groupedCards: cards.filter((card) => card.week && card.day).length,
      missingCharacters: missingGroups.reduce((count, group) => count + group.missing.length, 0),
    },
    null,
    2,
  ),
);

for (const group of missingGroups) {
  console.log(`W${group.week}D${group.day} ${group.lesson}: ${group.missing.join('')}`);
}
