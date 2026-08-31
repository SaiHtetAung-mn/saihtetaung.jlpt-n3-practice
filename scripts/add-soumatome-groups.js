/* eslint-disable @typescript-eslint/no-require-imports */

const fs = require('fs');
const path = require('path');
const kanjidic = JSON.parse(
  fs.readFileSync(path.join(__dirname, '..', 'node_modules', 'kanjidic2-json', 'KANJIS.json'), 'utf8'),
);

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
  { week: 5, day: 3, lesson: '日本語クラス', kanji: '練最適選違直復辞宿' },
  { week: 5, day: 4, lesson: '作文', kanji: '昨君結婚祝曲奥寝' },
  { week: 5, day: 5, lesson: '問診票一歯科で', kanji: '痛熱虫歯治汚並他' },
  { week: 5, day: 6, lesson: '問診票一健康診断', kanji: '身酒吸欲眠疲息呼' },
  { week: 6, day: 1, lesson: '天気予報', kanji: '報晴雲吹暖雪震波' },
  { week: 6, day: 2, lesson: '求人広告', kanji: '求募職容技般務課' },
  { week: 6, day: 3, lesson: 'スポーツ記事', kanji: '球決勝対流負投果' },
  { week: 6, day: 4, lesson: '経済', kanji: '戦経済成貿易輸相' },
  { week: 6, day: 5, lesson: '地球温暖化', kanji: '化比原因際議活変' },
  { week: 6, day: 6, lesson: '政治', kanji: '政府改否的実欠専' },
];

const missingCardWords = {
  駐: ['駐車', 'ちゅうしゃ', 'ကားရပ်နားခြင်း'],
  押: ['押す', 'おす', 'တွန်းသည်၊ နှိပ်သည်'],
  認: ['確認', 'かくにん', 'အတည်ပြုစစ်ဆေးခြင်း'],
  段: ['階段', 'かいだん', 'လှေကား'],
  危: ['危険', 'きけん', 'အန္တရာယ်'],
  捨: ['捨てる', 'すてる', 'စွန့်ပစ်သည်'],
  普: ['普通', 'ふつう', 'သာမန်၊ ပုံမှန်'],
  窓: ['窓', 'まど', 'ပြတင်းပေါက်'],
  整: ['整理', 'せいり', 'စီစဉ်ရှင်းလင်းခြင်း'],
  券: ['券', 'けん', 'လက်မှတ်'],
  替: ['両替', 'りょうがえ', 'ငွေလဲခြင်း'],
  優: ['優先席', 'ゆうせんせき', 'ဦးစားပေးထိုင်ခုံ'],
  座: ['座席', 'ざせき', 'ထိုင်ခုံနေရာ'],
  降: ['降りる', 'おりる', 'ဆင်းသည်'],
  閉: ['閉店', 'へいてん', 'ဆိုင်ပိတ်ခြင်း'],
  案: ['案内', 'あんない', 'လမ်းညွှန်ခြင်း'],
  煙: ['禁煙', 'きんえん', 'ဆေးလိပ်မသောက်ရ'],
  郵: ['郵便局', 'ゆうびんきょく', 'စာတိုက်'],
  公: ['公園', 'こうえん', 'ပန်းခြံ'],
  骨: ['骨折', 'こっせつ', 'အရိုးကျိုးခြင်း'],
  困: ['困る', 'こまる', 'ဒုက္ခရောက်သည်၊ အခက်အခဲဖြစ်သည်'],
  警: ['警察', 'けいさつ', 'ရဲ'],
  故: ['事故', 'じこ', 'မတော်တဆမှု'],
  蔵: ['冷蔵庫', 'れいぞうこ', 'ရေခဲသေတ္တာ'],
  凍: ['冷凍', 'れいとう', 'အေးခဲခြင်း'],
  召: ['召し上がる', 'めしあがる', 'စားသောက်သည်၏ ယဉ်ကျေးသောပြောပုံ'],
  保: ['保存', 'ほぞん', 'သိမ်းဆည်းထိန်းသိမ်းခြင်း'],
  存: ['保存', 'ほぞん', 'ရှိနေခြင်း၊ သိမ်းဆည်းခြင်း'],
  販: ['販売', 'はんばい', 'ရောင်းချခြင်း'],
  減: ['減る', 'へる', 'လျော့နည်းသည်'],
  卵: ['卵', 'たまご', 'ဥ'],
  乳: ['牛乳', 'ぎゅうにゅう', 'နို့'],
  粉: ['粉', 'こな', 'မှုန့်'],
  袋: ['袋', 'ふくろ', 'အိတ်'],
  裏: ['裏', 'うら', 'နောက်ဘက်၊ အတွင်းဘက်'],
  濃: ['濃い', 'こい', 'ပြင်းသော၊ ထူသော'],
  薄: ['薄い', 'うすい', 'ပါးသော၊ ပျော့သော'],
  戻: ['戻る', 'もどる', 'ပြန်သွားသည်'],
  了: ['完了', 'かんりょう', 'ပြီးဆုံးခြင်း'],
  砂: ['砂糖', 'さとう', 'သကြား'],
  紅: ['紅茶', 'こうちゃ', 'လက်ဖက်ရည်အနက်'],
  冊: ['一冊', 'いっさつ', 'စာအုပ်ရေတွက်ပုံ'],
  枚: ['一枚', 'いちまい', 'ပါးလွှာသောအရာရေတွက်ပုံ'],
  割: ['割引', 'わりびき', 'လျှော့ဈေး'],
  値: ['値段', 'ねだん', 'ဈေးနှုန်း'],
  払: ['支払う', 'しはらう', 'ငွေပေးချေသည်'],
  米: ['米', 'こめ', 'ဆန်'],
  込: ['申込', 'もうしこみ', 'လျှောက်ထားခြင်း'],
  価: ['価格', 'かかく', 'ဈေးနှုန်း'],
  齢: ['年齢', 'ねんれい', 'အသက်အရွယ်'],
  歳: ['歳', 'さい', 'အသက်နှစ်'],
  絡: ['連絡', 'れんらく', 'ဆက်သွယ်ခြင်း'],
  届: ['届く', 'とどく', 'ရောက်ရှိသည်'],
  宅: ['自宅', 'じたく', 'မိမိအိမ်'],
  換: ['交換', 'こうかん', 'လဲလှယ်ခြင်း'],
  預: ['預かる', 'あずかる', 'အပ်နှံထားသည်ကို လက်ခံထိန်းသိမ်းသည်'],
  衣: ['衣類', 'いるい', 'အဝတ်အစားများ'],
  勤: ['通勤', 'つうきん', 'အလုပ်သွားလာခြင်း'],
  伺: ['伺う', 'うかがう', 'မေးမြန်းသည်၊ သွားရောက်သည်၏ ယဉ်ကျေးသောပြောပုံ'],
  遅: ['遅れる', 'おくれる', 'နောက်ကျသည်'],
  汗: ['汗', 'あせ', 'ချွေး'],
  涙: ['涙', 'なみだ', 'မျက်ရည်'],
  難: ['難しい', 'むずかしい', 'ခက်ခဲသော'],
  簡: ['簡単', 'かんたん', 'လွယ်ကူသော'],
  違: ['違う', 'ちがう', 'ကွဲပြားသည်၊ မှားသည်'],
  辞: ['辞書', 'じしょ', 'အဘိဓာန်'],
  婚: ['結婚', 'けっこん', 'လက်ထပ်ခြင်း'],
  奥: ['奥さん', 'おくさん', 'ဇနီး၊ အတွင်းဘက်'],
  寝: ['寝る', 'ねる', 'အိပ်သည်'],
  痛: ['痛い', 'いたい', 'နာသော'],
  汚: ['汚い', 'きたない', 'ညစ်ပတ်သော'],
  並: ['並ぶ', 'ならぶ', 'တန်းစီသည်'],
  吸: ['吸う', 'すう', 'ရှူသည်၊ စုပ်သည်'],
  欲: ['欲しい', 'ほしい', 'လိုချင်သော'],
  眠: ['眠い', 'ねむい', 'အိပ်ချင်သော'],
  疲: ['疲れる', 'つかれる', 'ပင်ပန်းသည်'],
  呼: ['呼ぶ', 'よぶ', 'ခေါ်သည်'],
  晴: ['晴れ', 'はれ', 'ရာသီဥတုကြည်လင်ခြင်း'],
  吹: ['吹く', 'ふく', 'မှုတ်သည်၊ တိုက်သည်'],
  暖: ['暖かい', 'あたたかい', 'နွေးထွေးသော'],
  震: ['地震', 'じしん', 'ငလျင်'],
  求: ['求人', 'きゅうじん', 'အလုပ်ခေါ်ယူခြင်း'],
  募: ['募集', 'ぼしゅう', 'စုဆောင်းခေါ်ယူခြင်း'],
  般: ['一般', 'いっぱん', 'အထွေထွေ၊ သာမန်'],
  済: ['経済', 'けいざい', 'စီးပွားရေး'],
  原: ['原因', 'げんいん', 'အကြောင်းရင်း'],
  府: ['政府', 'せいふ', 'အစိုးရ'],
  否: ['否定', 'ひてい', 'ငြင်းဆိုခြင်း'],
  専: ['専門', 'せんもん', 'အထူးပြုဘာသာရပ်'],
};

const dictionaryByCharacter = new Map(kanjidic.map((entry) => [entry.literal, entry]));

const formatReadings = (entry) => {
  const on = entry?.readings?.ja_on ?? [];
  const kun = (entry?.readings?.ja_kun ?? []).map((reading) => reading.replace(/\./g, '・'));
  return [on.join('・'), kun.join('・')].filter(Boolean).join('／') || '';
};

const formatMeaning = (entry) => {
  const meanings = entry?.meanings?.en ?? [];
  return meanings.slice(0, 3).join('; ') || 'kanji character';
};

const missingCards = Object.entries(missingCardWords).map(([character, [word, reading, myanmarMeaning]]) => {
  const dictionaryEntry = dictionaryByCharacter.get(character);

  return {
    character,
    meaning: formatMeaning(dictionaryEntry),
    myanmarMeaning,
    readings: formatReadings(dictionaryEntry),
    example: `「${word}」はN3でよく使う言葉です。`,
    exampleMeaning: `"${word}" is a commonly used N3 word.`,
    words: [
      {
        word,
        reading,
        meaning: myanmarMeaning,
      },
    ],
  };
});

const existingCharacters = new Set(cards.map((card) => card.character));
let nextId = Math.max(...cards.map((card) => card.id)) + 1;

for (const missingCard of missingCards) {
  if (!existingCharacters.has(missingCard.character)) {
    cards.push({
      id: nextId,
      ...missingCard,
      category: 'JLPT N3',
    });
    nextId += 1;
  }
}

const uniqueCards = [];
const seenCharacters = new Set();

for (const card of cards) {
  if (!seenCharacters.has(card.character)) {
    uniqueCards.push(card);
    seenCharacters.add(card.character);
  }
}

cards.length = 0;
cards.push(...uniqueCards);

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
