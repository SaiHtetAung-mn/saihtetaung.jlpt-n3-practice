/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require('fs');
const path = require('path');
const { PDFParse } = require('pdf-parse');
const { zawgyiToUnicode } = require('./zawgyi-to-unicode');

const pdfPath = path.join(process.cwd(), 'N3 Shinkanzen Vocab by MYAT MIN (1).pdf');
const outputPath = path.join(process.cwd(), 'src/data/vocab.ts');

const puaPattern = /[\uF000-\uF8FF]/;
const lessonPattern = /^第\s*(\d+)\s*課[ー\s]*(.+)$/;
const rowStartPattern = /^(\d+)\s+(.+)/;
const skipPatterns = [
  /^中級レベル/,
  /^N3 Shinkanzen/,
  /^第 1 部/,
  /^第 2 部/,
  /^/,
  /^\(/,
  /^\d+$/,
];

function normalizeField(value) {
  return value
    .replace(/--\s*\d+\s+of\s+\d+\s*--/g, '')
    .replace(/\s+/g, ' ')
    .replace(/\s+([、。])/g, '$1')
    .trim();
}

function normalizeJapaneseField(value) {
  return normalizeField(value)
    .normalize('NFKC')
    .replace(/[☆●■]/g, '')
    .replace(/([\p{Script=Han}\p{Script=Hiragana}\p{Script=Katakana}])\s+(?=[\p{Script=Han}\p{Script=Hiragana}\p{Script=Katakana}])/gu, '$1')
    .replace(/\s*\/\s*/g, '/')
    .replace(/\s+/g, ' ')
    .trim();
}

function normalizeMyanmarSpacing(value) {
  return value.replace(/([\u1000-\u109f])\s+(?=[\u1000-\u109f])/g, '$1');
}

function decodePuaMyanmar(value) {
  const zawgyiText = [...value]
    .map((character) => {
      const codePoint = character.codePointAt(0);

      if (codePoint >= 0xf100 && codePoint <= 0xf2ff) {
        return String.fromCodePoint(codePoint - 0xe100);
      }

      return character;
    })
    .join('');

  return normalizeMyanmarSpacing(zawgyiToUnicode(zawgyiText));
}

function isHeadingOrSkip(line) {
  return skipPatterns.some((pattern) => pattern.test(line));
}

function splitVocabBlock(block) {
  const normalized = block.replace(/\n+/g, ' ').replace(/\s+/g, ' ').trim();
  const match = normalized.match(/^(\d+)\s+(.+)$/);
  if (!match) return null;

  const [, itemNoText, body] = match;
  const firstPuaIndex = body.search(puaPattern);
  if (firstPuaIndex < 0) return null;

  const japaneseAndReading = normalizeField(body.slice(0, firstPuaIndex));
  const myanmarMeaning = normalizeField(decodePuaMyanmar(body.slice(firstPuaIndex)));
  const pairMatch = japaneseAndReading.match(/^(.+?)\s+([ぁ-ゖァ-ヺーA-Za-z0-9０-９Ｔｔ .・、/（）()]+)$/u);

  if (!pairMatch) return null;

  return {
    itemNo: Number(itemNoText),
    expression: normalizeJapaneseField(pairMatch[1]),
    reading: normalizeJapaneseField(pairMatch[2]),
    myanmarMeaning,
  };
}

function applyKnownCorrections(card) {
  const corrected = { ...card };

  if (corrected.lesson === 9 && corrected.itemNo === 4) {
    corrected.expression = '服を試着する/着替える';
  }

  if (corrected.lesson === 9 && corrected.itemNo === 1 && corrected.expression.includes('きちんとした服')) {
    corrected.expression = 'きちんとした服 / 高級な服 / 上品な服 / シンプルな服';
    corrected.reading = 'きちんとしたふく / こうきゅうなふく / じょうひんなふく / シンプルなふく';
  }

  if (corrected.lesson === 9 && corrected.itemNo === 3 && corrected.expression.includes('かっこいい人')) {
    corrected.expression = 'かっこいい人 / かっこ悪い人 / 素敵な人';
    corrected.reading = 'かっこいいひと / かっこわるいひと / すてきなひと';
  }

  if (corrected.lesson === 10 && corrected.itemNo === 15 && corrected.expression.includes('チケット')) {
    corrected.expression = 'チケット/パスポートを見せる / シートベルトを締める';
    corrected.reading = 'チケット/パスポートをみせる / シートベルトをしめる';
  }

  if (corrected.lesson === 11 && corrected.itemNo === 11 && corrected.expression.includes('遠足')) {
    corrected.expression = '(遠足/修学旅行/運動会/体育祭/文化祭)の準備をする';
    corrected.reading = '(えんそく/しゅうがくりょこう/うんどうかい/たいいくさい/ぶんかさい)のじゅんびをする';
  }

  if (corrected.lesson === 11 && corrected.itemNo === 11 && corrected.expression.includes('授業に出る')) {
    corrected.expression = '(国語/理科/体育/数学/社会/音楽)の授業に出る';
    corrected.reading = '(こくご/りか/たいいく/すうがく/しゃかい/おんがく)のじゅぎょうにでる';
  }

  if (corrected.lesson === 12 && corrected.itemNo === 11 && corrected.expression.includes('買いに行く')) {
    corrected.expression = '(教科書/参考書/問題集)を買いに行く';
    corrected.reading = '(きょうかしょ/さんこうしょ/もんだいしゅう)をかいにいく';
    corrected.myanmarMeaning = 'ပြဌာန်းစာအုပ်/ကိုးကားစာအုပ်/မေးခွန်းပေါင်းချုပ်ကိုဝယ်ဖို့သွားသည်';
  }

  if (corrected.lesson === 12 && corrected.itemNo === 8 && corrected.expression.includes('試験の結果')) {
    corrected.expression = '試験の結果が発表される';
    corrected.reading = 'しけんのけっかがはっぴょうされる';
  }

  if (corrected.lesson === 12 && corrected.itemNo === 9 && corrected.expression.includes('試験に')) {
    corrected.expression = '試験に(通る/合格する/パスする)/落ちる';
    corrected.reading = 'しけんに(とおる/ごうかくする/パスする)/おちる';
  }

  if (corrected.lesson === 12 && corrected.itemNo === 9 && corrected.expression.includes('サークル')) {
    corrected.expression = 'サークルの(飲み会/合宿)に行く';
    corrected.reading = 'サークルの(のみかい/がっしゅく)にいく';
  }

  if (corrected.lesson === 12 && corrected.itemNo === 10 && corrected.expression.includes('東京大学')) {
    corrected.expression = '東京大学を不合格になる';
    corrected.reading = 'とうきょうだいがくをふごうかくになる';
  }

  if (corrected.lesson === 12 && corrected.itemNo === 2 && corrected.expression.includes('田中教授')) {
    corrected.expression = '田中教授の指導を受ける';
    corrected.reading = 'たなかきょうじゅのしどうをうける';
  }

  if (corrected.lesson === 13 && corrected.itemNo === 1 && corrected.expression.includes('募集する')) {
    corrected.expression = '(スタッフ/社員/アルバイト(バイト))を募集する';
    corrected.reading = '(スタッフ/しゃいん/アルバイト(バイト))をぼしゅうする';
  }

  if (corrected.lesson === 17 && corrected.itemNo === 3 && corrected.expression.includes('家族')) {
    corrected.expression = '家族と(クリスマス/年末年始)を過ごす';
    corrected.reading = 'かぞくと(クリスマス/ねんまつねんし)をすごす';
  }

  if (corrected.lesson === 17 && corrected.itemNo === 6 && corrected.expression.includes('シーズン')) {
    corrected.expression = '(卒業式/運動会)のシーズンになる';
    corrected.reading = '(そつぎょうしき/うんどうかい)のシーズンになる';
  }

  if (corrected.lesson === 17 && corrected.itemNo === 8 && corrected.expression.includes('運がいい')) {
    corrected.expression = '彼は(運がいい/幸運だ/ラッキーだ)';
    corrected.reading = 'かれは(うんがいい/こううんだ/ラッキーだ)';
  }

  if (corrected.lesson === 20 && corrected.itemNo === 1 && corrected.expression.includes('増やす')) {
    corrected.expression = '数/量を(増やす/増す)/減らす';
    corrected.reading = 'かず/りょうを(ふやす/ます)/へらす';
  }

  if (corrected.lesson === 20 && corrected.itemNo === 2 && corrected.expression.includes('増える')) {
    corrected.expression = '数/量が(増す/増える)/減る';
    corrected.reading = 'かず/りょうが(ます/ふえる)/へる';
  }

  if (corrected.lesson === 21 && corrected.itemNo === 1990 && corrected.expression.includes('うまれた')) {
    corrected.itemNo = 1;
    corrected.expression = '1990年(以前/以後)に生まれた';
    corrected.reading = '1990ねん(いぜん/いご)にうまれた';
  }

  return corrected;
}

function extractFirstPartText(fullText) {
  const start = fullText.indexOf('第 1 部 話題別に言葉を学ぼう');
  const end = fullText.indexOf('第 2 部 性質別に言葉を学ぼう', start + 1);

  return fullText.slice(start, end);
}

function parseCards(text) {
  const lines = text.split('\n').map((line) => line.trim()).filter(Boolean);
  const cards = [];
  let lesson = 0;
  let lessonTitle = '';
  let pending = '';

  function flushPending() {
    if (!pending || !lesson) {
      pending = '';
      return;
    }

    const parsed = splitVocabBlock(pending);
    if (parsed) {
      cards.push(applyKnownCorrections({
        id: cards.length + 1,
        lesson,
        lessonTitle,
        ...parsed,
      }));
    }

    pending = '';
  }

  for (const line of lines) {
    const lessonMatch = line.match(lessonPattern);

    if (lessonMatch) {
      flushPending();
      lesson = Number(lessonMatch[1]);
      lessonTitle = normalizeJapaneseField(lessonMatch[2]);
      if (lesson > 21) break;
      continue;
    }

    if (!lesson || lesson > 21 || isHeadingOrSkip(line)) continue;

    if (rowStartPattern.test(line)) {
      flushPending();
      pending = line;
      continue;
    }

    if (pending) pending += `\n${line}`;
  }

  flushPending();

  return cards;
}

async function main() {
  const parser = new PDFParse({ data: fs.readFileSync(pdfPath) });
  const result = await parser.getText();
  await parser.destroy();

  const cards = parseCards(extractFirstPartText(result.text));
  const lessonCounts = cards.reduce((counts, card) => {
    counts[card.lesson] = (counts[card.lesson] ?? 0) + 1;
    return counts;
  }, {});

  const source = `export type VocabCard = {
  id: number;
  lesson: number;
  lessonTitle: string;
  itemNo: number;
  expression: string;
  reading: string;
  myanmarMeaning: string;
};

export const vocabCards: VocabCard[] = ${JSON.stringify(cards, null, 2)};
`;

  fs.writeFileSync(outputPath, source);
  console.log(`Imported ${cards.length} vocab cards.`);
  console.log(lessonCounts);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
