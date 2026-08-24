/* eslint-disable @typescript-eslint/no-require-imports */

const fs = require('fs');

const filePath = 'src/data/kanji.ts';
const source = fs.readFileSync(filePath, 'utf8');
const cards = JSON.parse(source.match(/export const kanjiCards: KanjiCard\[\] = ([\s\S]*);\s*$/)[1]);

const groups = [
  { week: 1, day: 1, lesson: '駐車場', kanji: '駐無満向禁関係断' },
  { week: 1, day: 2, lesson: '横断歩道', kanji: '横押式信号確認飛' },
  { week: 1, day: 3, lesson: 'サイン', kanji: '非常階段箱危険捨' },
  { week: 1, day: 4, lesson: '駅のホーム', kanji: '線面普各次快速過鉄' },
  { week: 1, day: 5, lesson: '特急電車', kanji: '指定席由番窓側路' },
  { week: 1, day: 6, lesson: 'バス', kanji: '停整券現両替優座降' },
  { week: 2, day: 1, lesson: 'レストラン', kanji: '準備営閉案内予約' },
  { week: 2, day: 2, lesson: '禁煙', kanji: '煙当全客様解協願' },
  { week: 2, day: 3, lesson: '観光地図', kanji: '観園港遊美術神寺' },
  { week: 2, day: 4, lesson: '街の地図', kanji: '役郵局交差点橋公' },
  { week: 2, day: 5, lesson: '病院', kanji: '受付科鼻婦形骨折' },
  { week: 2, day: 6, lesson: '困ったときは', kanji: '困消防救警察故伝' },
  { week: 3, day: 1, lesson: '要冷蔵', kanji: '要冷蔵凍庫召保存必' },
  { week: 3, day: 2, lesson: '消費期限', kanji: '費期限製造賞法温' },
  { week: 3, day: 3, lesson: '自動販売機', kanji: '販機増減量氷返湯' },
  { week: 3, day: 4, lesson: 'レシピ', kanji: '材卵乳粉袋混焼表裏' },
  { week: 3, day: 5, lesson: 'コピー機・留守番電話', kanji: '留守濃薄部数件再' },
  { week: 3, day: 6, lesson: '携帯電話', kanji: '接続示戻完了登録' },
  { week: 4, day: 1, lesson: '日用品', kanji: '砂塩油緑紅冊個枚' },
  { week: 4, day: 2, lesson: '広告メール', kanji: '告利割倍値商支払' },
  { week: 4, day: 3, lesson: '通信販売', kanji: '米級残型税込価格' },
  { week: 4, day: 4, lesson: '申込書', kanji: '申記例齢歳性連絡' },
  { week: 4, day: 5, lesson: '注文', kanji: '届宅配希望荷換額' },
  { week: 4, day: 6, lesson: '不在通知', kanji: '在取預衣参達勤帯' },
  { week: 5, day: 1, lesson: 'メールを送る', kanji: '礼伺遅失汗念涙笑' },
  { week: 5, day: 2, lesson: 'アンケート', kanji: '調査移難簡単感想' },
  { week: 5, day: 3, lesson: '日本語クラス', kanji: '練最適選違直復' },
  { week: 6, day: 1, lesson: '天気予報', kanji: '報晴雲暖雪震波吹' },
  { week: 6, day: 2, lesson: '求人広告', kanji: '求募職容技務課般' },
  { week: 6, day: 3, lesson: 'スポーツ記事', kanji: '球決勝対流負投果' },
  { week: 6, day: 4, lesson: '経済', kanji: '戦経成貿易輸相済' },
  { week: 6, day: 5, lesson: '地球温暖化', kanji: '化比原因際議活変' },
  { week: 6, day: 6, lesson: '政治', kanji: '政府改否的実欠専' },
];

const byCharacter = new Map();
for (const group of groups) {
  for (const character of Array.from(group.kanji)) {
    byCharacter.set(character, group);
  }
}

for (const card of cards) {
  const group = byCharacter.get(card.character);

  if (group) {
    card.week = group.week;
    card.day = group.day;
    card.lesson = group.lesson;
    card.category = `Week ${group.week} / Day ${group.day}`;
  } else {
    delete card.week;
    delete card.day;
    delete card.lesson;
    card.category = 'JLPT N3';
  }
}

const output = `export type UsageWord = {
  word: string;
  reading: string;
  meaning: string;
};

export type KanjiCard = {
  id: number;
  character: string;
  meaning: string;
  myanmarMeaning: string;
  readings: string;
  example: string;
  exampleMeaning: string;
  words: UsageWord[];
  category: string;
  week?: number;
  day?: number;
  lesson?: string;
};

export const kanjiCards: KanjiCard[] = ${JSON.stringify(cards, null, 2)};
`;

fs.writeFileSync(filePath, output);

const groupedCount = cards.filter((card) => card.week).length;
console.log(`Tagged ${groupedCount} cards with Sou Matome groups`);
