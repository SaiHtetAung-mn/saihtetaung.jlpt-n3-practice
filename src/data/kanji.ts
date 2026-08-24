export type UsageWord = {
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

export const kanjiCards: KanjiCard[] = [
  {
    "id": 1,
    "character": "丸",
    "meaning": "circle; round; complete",
    "readings": "ガン／まる",
    "example": "紙を丸めて、ごみ箱に捨てました。",
    "exampleMeaning": "I rolled up the paper and threw it in the trash.",
    "words": [
      {
        "word": "丸い",
        "reading": "まるい",
        "meaning": "round"
      },
      {
        "word": "丸める",
        "reading": "まるめる",
        "meaning": "to roll up"
      },
      {
        "word": "日の丸",
        "reading": "ひのまる",
        "meaning": "Japanese flag"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 2,
    "character": "久",
    "meaning": "long time; lasting",
    "readings": "キュウ／ ひさしい",
    "example": "久しぶりに高校時代の友達に会いました。",
    "exampleMeaning": "I met a high school friend for the first time in a long while.",
    "words": [
      {
        "word": "久しぶり",
        "reading": "ひさしぶり",
        "meaning": "after a long time"
      },
      {
        "word": "永久",
        "reading": "えいきゅう",
        "meaning": "permanent"
      },
      {
        "word": "久しい",
        "reading": "ひさしい",
        "meaning": "long-standing"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 3,
    "character": "才",
    "meaning": "talent; ability; age",
    "readings": "サイ",
    "example": "彼女には音楽の才能があります。",
    "exampleMeaning": "She has a talent for music.",
    "words": [
      {
        "word": "才能",
        "reading": "さいのう",
        "meaning": "talent"
      },
      {
        "word": "天才",
        "reading": "てんさい",
        "meaning": "genius"
      },
      {
        "word": "十八歳",
        "reading": "じゅうはっさい",
        "meaning": "eighteen years old"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 4,
    "character": "支",
    "meaning": "support; sustain; branch",
    "readings": "シ／ささえる",
    "example": "家族がいつも私を支えてくれます。",
    "exampleMeaning": "My family always supports me.",
    "words": [
      {
        "word": "支える",
        "reading": "ささえる",
        "meaning": "to support"
      },
      {
        "word": "支店",
        "reading": "してん",
        "meaning": "branch office"
      },
      {
        "word": "支払う",
        "reading": "しはらう",
        "meaning": "to pay"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 5,
    "character": "戸",
    "meaning": "door; household",
    "readings": "コ／と",
    "example": "出かける前に戸を閉めてください。",
    "exampleMeaning": "Please close the door before leaving.",
    "words": [
      {
        "word": "戸",
        "reading": "と",
        "meaning": "door"
      },
      {
        "word": "戸口",
        "reading": "とぐち",
        "meaning": "doorway"
      },
      {
        "word": "一戸建て",
        "reading": "いっこだて",
        "meaning": "detached house"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 6,
    "character": "欠",
    "meaning": "lack; be missing; absence",
    "readings": "ケツ／かける",
    "example": "今日は熱があるので授業を欠席しました。",
    "exampleMeaning": "I was absent from class today because I had a fever.",
    "words": [
      {
        "word": "欠ける",
        "reading": "かける",
        "meaning": "to be missing"
      },
      {
        "word": "欠席",
        "reading": "けっせき",
        "meaning": "absence"
      },
      {
        "word": "欠点",
        "reading": "けってん",
        "meaning": "weak point"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 7,
    "character": "王",
    "meaning": "king; ruler",
    "readings": "オウ",
    "example": "昔、この国には賢い王がいました。",
    "exampleMeaning": "Long ago, this country had a wise king.",
    "words": [
      {
        "word": "王様",
        "reading": "おうさま",
        "meaning": "king"
      },
      {
        "word": "王国",
        "reading": "おうこく",
        "meaning": "kingdom"
      },
      {
        "word": "女王",
        "reading": "じょおう",
        "meaning": "queen"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 8,
    "character": "化",
    "meaning": "change; transform",
    "readings": "カ／ばける",
    "example": "この町は十年間で大きく変化しました。",
    "exampleMeaning": "This town changed greatly over ten years.",
    "words": [
      {
        "word": "変化",
        "reading": "へんか",
        "meaning": "change"
      },
      {
        "word": "化学",
        "reading": "かがく",
        "meaning": "chemistry"
      },
      {
        "word": "文化",
        "reading": "ぶんか",
        "meaning": "culture"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 9,
    "character": "内",
    "meaning": "inside; within",
    "readings": "ナイ／うち",
    "example": "箱の内側に名前を書いてください。",
    "exampleMeaning": "Please write your name inside the box.",
    "words": [
      {
        "word": "内側",
        "reading": "うちがわ",
        "meaning": "inside"
      },
      {
        "word": "内容",
        "reading": "ないよう",
        "meaning": "contents"
      },
      {
        "word": "国内",
        "reading": "こくない",
        "meaning": "domestic"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 10,
    "character": "反",
    "meaning": "oppose; reverse; anti-",
    "readings": "ハン",
    "example": "私はその新しい規則に反対です。",
    "exampleMeaning": "I am against that new rule.",
    "words": [
      {
        "word": "反対",
        "reading": "はんたい",
        "meaning": "opposition"
      },
      {
        "word": "反応",
        "reading": "はんのう",
        "meaning": "reaction"
      },
      {
        "word": "違反",
        "reading": "いはん",
        "meaning": "violation"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 11,
    "character": "比",
    "meaning": "compare; ratio",
    "readings": "ヒ／くらべる",
    "example": "二つのプランを比べてから決めましょう。",
    "exampleMeaning": "Let us compare the two plans before deciding.",
    "words": [
      {
        "word": "比べる",
        "reading": "くらべる",
        "meaning": "to compare"
      },
      {
        "word": "比較",
        "reading": "ひかく",
        "meaning": "comparison"
      },
      {
        "word": "比率",
        "reading": "ひりつ",
        "meaning": "ratio"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 12,
    "character": "夫",
    "meaning": "husband; man",
    "readings": "フウ／おっと",
    "example": "私の夫は料理が得意です。",
    "exampleMeaning": "My husband is good at cooking.",
    "words": [
      {
        "word": "夫",
        "reading": "おっと",
        "meaning": "husband"
      },
      {
        "word": "夫婦",
        "reading": "ふうふ",
        "meaning": "married couple"
      },
      {
        "word": "工夫",
        "reading": "くふう",
        "meaning": "ingenuity"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 13,
    "character": "仏",
    "meaning": "Buddha; Buddhism",
    "readings": "ブツ／ほとけ",
    "example": "奈良で大きな仏像を見ました。",
    "exampleMeaning": "I saw a large Buddhist statue in Nara.",
    "words": [
      {
        "word": "仏教",
        "reading": "ぶっきょう",
        "meaning": "Buddhism"
      },
      {
        "word": "仏像",
        "reading": "ぶつぞう",
        "meaning": "Buddhist statue"
      },
      {
        "word": "大仏",
        "reading": "だいぶつ",
        "meaning": "Great Buddha"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 14,
    "character": "毛",
    "meaning": "hair; fur",
    "readings": "モウ／け",
    "example": "この犬は白くて長い毛をしています。",
    "exampleMeaning": "This dog has long white fur.",
    "words": [
      {
        "word": "毛",
        "reading": "け",
        "meaning": "hair or fur"
      },
      {
        "word": "毛布",
        "reading": "もうふ",
        "meaning": "blanket"
      },
      {
        "word": "髪の毛",
        "reading": "かみのけ",
        "meaning": "head hair"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 15,
    "character": "予",
    "meaning": "beforehand; plan; forecast",
    "readings": "ヨ",
    "example": "来週のホテルをオンラインで予約しました。",
    "exampleMeaning": "I booked next week’s hotel online.",
    "words": [
      {
        "word": "予定",
        "reading": "よてい",
        "meaning": "schedule"
      },
      {
        "word": "予約",
        "reading": "よやく",
        "meaning": "reservation"
      },
      {
        "word": "予習",
        "reading": "よしゅう",
        "meaning": "preparation for a lesson"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 16,
    "character": "由",
    "meaning": "reason; origin; means",
    "readings": "ユ・ユウ",
    "example": "電車が遅れた理由を説明してください。",
    "exampleMeaning": "Please explain why the train was delayed.",
    "words": [
      {
        "word": "理由",
        "reading": "りゆう",
        "meaning": "reason"
      },
      {
        "word": "自由",
        "reading": "じゆう",
        "meaning": "freedom"
      },
      {
        "word": "経由",
        "reading": "けいゆ",
        "meaning": "via"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 17,
    "character": "未",
    "meaning": "not yet; future; incomplete",
    "readings": "ミ",
    "example": "会議の開始時間はまだ未定です。",
    "exampleMeaning": "The meeting’s starting time is still undecided.",
    "words": [
      {
        "word": "未来",
        "reading": "みらい",
        "meaning": "future"
      },
      {
        "word": "未定",
        "reading": "みてい",
        "meaning": "undecided"
      },
      {
        "word": "未完成",
        "reading": "みかんせい",
        "meaning": "incomplete"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 18,
    "character": "布",
    "meaning": "cloth; fabric; spread",
    "readings": "フ／ぬの",
    "example": "テーブルの上にきれいな布を敷きました。",
    "exampleMeaning": "I spread a clean cloth over the table.",
    "words": [
      {
        "word": "布",
        "reading": "ぬの",
        "meaning": "cloth"
      },
      {
        "word": "毛布",
        "reading": "もうふ",
        "meaning": "blanket"
      },
      {
        "word": "配布",
        "reading": "はいふ",
        "meaning": "distribution"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 19,
    "character": "包",
    "meaning": "wrap; package; contain",
    "readings": "ホウ／つつむ",
    "example": "プレゼントを青い紙で包みました。",
    "exampleMeaning": "I wrapped the present in blue paper.",
    "words": [
      {
        "word": "包む",
        "reading": "つつむ",
        "meaning": "to wrap"
      },
      {
        "word": "包装",
        "reading": "ほうそう",
        "meaning": "packaging"
      },
      {
        "word": "小包",
        "reading": "こづつみ",
        "meaning": "parcel"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 20,
    "character": "末",
    "meaning": "end; tip; future",
    "readings": "マツ／すえ",
    "example": "週末は家族と公園へ行く予定です。",
    "exampleMeaning": "I plan to go to the park with my family this weekend.",
    "words": [
      {
        "word": "週末",
        "reading": "しゅうまつ",
        "meaning": "weekend"
      },
      {
        "word": "年末",
        "reading": "ねんまつ",
        "meaning": "year-end"
      },
      {
        "word": "月末（げつまつ）",
        "reading": "",
        "meaning": ""
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 21,
    "character": "平",
    "meaning": "flat; peaceful; average",
    "readings": "ヘイ・ビョウ／たいら",
    "example": "この道は平らなので、自転車で走りやすいです。",
    "exampleMeaning": "This road is flat, so it is easy to cycle on.",
    "words": [
      {
        "word": "平ら",
        "reading": "たいら",
        "meaning": "flat"
      },
      {
        "word": "平和",
        "reading": "へいわ",
        "meaning": "peace"
      },
      {
        "word": "平均",
        "reading": "へいきん",
        "meaning": "average"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 22,
    "character": "辺",
    "meaning": "area; side; vicinity",
    "readings": "ヘン／あたり・べ",
    "example": "この辺に静かなカフェはありますか。",
    "exampleMeaning": "Is there a quiet café around here?",
    "words": [
      {
        "word": "この辺",
        "reading": "このへん",
        "meaning": "around here"
      },
      {
        "word": "周辺",
        "reading": "しゅうへん",
        "meaning": "surrounding area"
      },
      {
        "word": "海辺",
        "reading": "うみべ",
        "meaning": "seaside"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 23,
    "character": "氷",
    "meaning": "ice",
    "readings": "ヒョウ／ こおり",
    "example": "暑かったので、ジュースに氷を入れました。",
    "exampleMeaning": "It was hot, so I put ice in my juice.",
    "words": [
      {
        "word": "氷",
        "reading": "こおり",
        "meaning": "ice"
      },
      {
        "word": "氷山",
        "reading": "ひょうざん",
        "meaning": "iceberg"
      },
      {
        "word": "氷点",
        "reading": "ひょうてん",
        "meaning": "freezing point"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 24,
    "character": "付",
    "meaning": "attach; add; accompany",
    "readings": "フ／つける",
    "example": "申込書に写真を付けてください。",
    "exampleMeaning": "Please attach a photograph to the application form.",
    "words": [
      {
        "word": "付ける",
        "reading": "つける",
        "meaning": "to attach"
      },
      {
        "word": "受付",
        "reading": "うけつけ",
        "meaning": "reception"
      },
      {
        "word": "片付ける",
        "reading": "かたづける",
        "meaning": "tidy up"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 25,
    "character": "皮",
    "meaning": "skin; hide; peel",
    "readings": "ヒ／かわ",
    "example": "りんごの皮をむいて食べました。",
    "exampleMeaning": "I peeled the apple before eating it.",
    "words": [
      {
        "word": "皮",
        "reading": "かわ",
        "meaning": "skin or peel"
      },
      {
        "word": "皮膚",
        "reading": "ひふ",
        "meaning": "skin"
      },
      {
        "word": "毛皮",
        "reading": "けがわ",
        "meaning": "fur"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 26,
    "character": "犯",
    "meaning": "crime; offender; commit",
    "readings": "ハン／おかす",
    "example": "警察は逃げた犯人を探しています。",
    "exampleMeaning": "The police are looking for the offender who escaped.",
    "words": [
      {
        "word": "犯罪",
        "reading": "はんざい",
        "meaning": "crime"
      },
      {
        "word": "犯人",
        "reading": "はんにん",
        "meaning": "offender"
      },
      {
        "word": "犯す",
        "reading": "おかす",
        "meaning": "to commit"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 27,
    "character": "必",
    "meaning": "certain; necessary; without fail",
    "readings": "ヒツ／かならず",
    "example": "明日は必ず時間どおりに来てください。",
    "exampleMeaning": "Please come on time tomorrow without fail.",
    "words": [
      {
        "word": "必ず",
        "reading": "かならず",
        "meaning": "without fail"
      },
      {
        "word": "必要",
        "reading": "ひつよう",
        "meaning": "necessary"
      },
      {
        "word": "必死",
        "reading": "ひっし",
        "meaning": "desperate"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 28,
    "character": "石",
    "meaning": "stone; rock",
    "readings": "セキ・いし",
    "example": "道の真ん中に大きな石が落ちています。",
    "exampleMeaning": "A large stone is lying in the middle of the road.",
    "words": [
      {
        "word": "石",
        "reading": "いし",
        "meaning": "stone"
      },
      {
        "word": "宝石",
        "reading": "ほうせき",
        "meaning": "jewel"
      },
      {
        "word": "石油",
        "reading": "せきゆ",
        "meaning": "petroleum"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 29,
    "character": "他",
    "meaning": "other; another",
    "readings": "タ／ほか",
    "example": "他に聞きたいことはありますか。",
    "exampleMeaning": "Is there anything else you would like to ask?",
    "words": [
      {
        "word": "他",
        "reading": "ほか",
        "meaning": "other"
      },
      {
        "word": "他人",
        "reading": "たにん",
        "meaning": "another person"
      },
      {
        "word": "その他",
        "reading": "そのほか",
        "meaning": "besides that"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 30,
    "character": "打",
    "meaning": "hit; strike; type",
    "readings": "ダ／うつ",
    "example": "パソコンで日本語の文章を打ちました。",
    "exampleMeaning": "I typed a Japanese sentence on the computer.",
    "words": [
      {
        "word": "打つ",
        "reading": "うつ",
        "meaning": "to hit or type"
      },
      {
        "word": "打ち合わせ",
        "reading": "うちあわせ",
        "meaning": "meeting"
      },
      {
        "word": "打者",
        "reading": "だしゃ",
        "meaning": "batter"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 31,
    "character": "加",
    "meaning": "add; join; increase",
    "readings": "カ／ くわえる",
    "example": "多くの学生がそのイベントに参加しました。",
    "exampleMeaning": "Many students participated in the event.",
    "words": [
      {
        "word": "加える",
        "reading": "くわえる",
        "meaning": "to add"
      },
      {
        "word": "参加",
        "reading": "さんか",
        "meaning": "participation"
      },
      {
        "word": "加工",
        "reading": "かこう",
        "meaning": "processing"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 32,
    "character": "可",
    "meaning": "possible; permitted; acceptable",
    "readings": "カ",
    "example": "ここで撮影するには許可が必要です。",
    "exampleMeaning": "Permission is required to film here.",
    "words": [
      {
        "word": "可能",
        "reading": "かのう",
        "meaning": "possible"
      },
      {
        "word": "許可",
        "reading": "きょか",
        "meaning": "permission"
      },
      {
        "word": "可決",
        "reading": "かけつ",
        "meaning": "approval of a proposal"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 33,
    "character": "央",
    "meaning": "center; middle",
    "readings": "オウ",
    "example": "駅の中央口で午後三時に会いましょう。",
    "exampleMeaning": "Let us meet at the station’s central exit at 3 p.m.",
    "words": [
      {
        "word": "中央",
        "reading": "ちゅうおう",
        "meaning": "center"
      },
      {
        "word": "中央線",
        "reading": "ちゅ うおうせん",
        "meaning": "Chuo Line"
      },
      {
        "word": "中央口",
        "reading": "ちゅうおうぐち",
        "meaning": "central exit"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 34,
    "character": "刊",
    "meaning": "publish; publication",
    "readings": "カン",
    "example": "この小説は来月刊行される予定です。",
    "exampleMeaning": "This novel is scheduled to be published next month.",
    "words": [
      {
        "word": "週刊",
        "reading": "しゅうかん",
        "meaning": "weekly publication"
      },
      {
        "word": "月刊",
        "reading": "げっかん",
        "meaning": "monthly publication"
      },
      {
        "word": "刊行",
        "reading": "かんこう",
        "meaning": "publication"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 35,
    "character": "玉",
    "meaning": "ball; jewel; bead",
    "readings": "たま",
    "example": "箱の中に赤い玉が三つ入っています。",
    "exampleMeaning": "There are three red balls inside the box.",
    "words": [
      {
        "word": "玉",
        "reading": "たま",
        "meaning": "ball or bead"
      },
      {
        "word": "水玉",
        "reading": "みずたま",
        "meaning": "polka dots"
      },
      {
        "word": "目玉",
        "reading": "めだま",
        "meaning": "eyeball or main attraction"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 36,
    "character": "旧",
    "meaning": "old; former",
    "readings": "キュウ",
    "example": "昨日、大学時代の旧友に会いました。",
    "exampleMeaning": "Yesterday, I met an old friend from university.",
    "words": [
      {
        "word": "旧友",
        "reading": "きゅうゆう",
        "meaning": "old friend"
      },
      {
        "word": "旧式",
        "reading": "きゅうしき",
        "meaning": "old-fashioned"
      },
      {
        "word": "旧姓",
        "reading": "きゅうせい",
        "meaning": "former surname"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 37,
    "character": "号",
    "meaning": "number; issue; designation",
    "readings": "ゴウ",
    "example": "申込書に携帯電話の番号を書いてください。",
    "exampleMeaning": "Please write your mobile phone number on the application form.",
    "words": [
      {
        "word": "番号",
        "reading": "ばんごう",
        "meaning": "number"
      },
      {
        "word": "信号",
        "reading": "しんごう",
        "meaning": "traffic signal"
      },
      {
        "word": "一号",
        "reading": "いちごう",
        "meaning": "number one"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 38,
    "character": "皿",
    "meaning": "plate; dish",
    "readings": "さら",
    "example": "食事の後で、使った皿を洗いました。",
    "exampleMeaning": "I washed the dishes after the meal.",
    "words": [
      {
        "word": "皿",
        "reading": "さら",
        "meaning": "plate"
      },
      {
        "word": "小皿",
        "reading": "こざら",
        "meaning": "small plate"
      },
      {
        "word": "灰皿",
        "reading": "はいざら",
        "meaning": "ashtray"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 39,
    "character": "札",
    "meaning": "tag; notice; banknote",
    "readings": "サツ／ふだ",
    "example": "財布の中に千円札が二枚あります。",
    "exampleMeaning": "There are two 1,000-yen notes in my wallet.",
    "words": [
      {
        "word": "お札",
        "reading": "おさつ",
        "meaning": "banknote"
      },
      {
        "word": "名札",
        "reading": "なふだ",
        "meaning": "name tag"
      },
      {
        "word": "改札",
        "reading": "かいさつ",
        "meaning": "ticket gate"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 40,
    "character": "史",
    "meaning": "history; chronicle",
    "readings": "シ",
    "example": "私は大学で日本史を勉強しています。",
    "exampleMeaning": "I study Japanese history at university.",
    "words": [
      {
        "word": "歴史",
        "reading": "れきし",
        "meaning": "history"
      },
      {
        "word": "史上",
        "reading": "しじょう",
        "meaning": "in history"
      },
      {
        "word": "日本史",
        "reading": "にほんし",
        "meaning": "Japanese history"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 41,
    "character": "失",
    "meaning": "lose; fail; mistake",
    "readings": "シツ／ うしなう",
    "example": "大切な機会を失わないように、早く決めました。",
    "exampleMeaning": "I decided quickly so that I would not lose an important opportunity.",
    "words": [
      {
        "word": "失う",
        "reading": "うしなう",
        "meaning": "to lose"
      },
      {
        "word": "失敗",
        "reading": "しっぱい",
        "meaning": "failure"
      },
      {
        "word": "失礼",
        "reading": "しつれい",
        "meaning": "rudeness or excuse me"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 42,
    "character": "示",
    "meaning": "show; indicate",
    "readings": "ジ・シ／ しめす",
    "example": "地図は駅までの道を示しています。",
    "exampleMeaning": "The map shows the way to the station.",
    "words": [
      {
        "word": "示す",
        "reading": "しめす",
        "meaning": "to show"
      },
      {
        "word": "指示",
        "reading": "しじ",
        "meaning": "instruction"
      },
      {
        "word": "表示",
        "reading": "ひょうじ",
        "meaning": "display"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 43,
    "character": "申",
    "meaning": "say humbly; apply; report",
    "readings": "シン／ もうす",
    "example": "インターネットで試験に申し込みました。",
    "exampleMeaning": "I applied for the examination online.",
    "words": [
      {
        "word": "申す",
        "reading": "もうす",
        "meaning": "to say humbly"
      },
      {
        "word": "申し込む",
        "reading": "もうしこむ",
        "meaning": "to apply"
      },
      {
        "word": "申請",
        "reading": "しんせい",
        "meaning": "application"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 44,
    "character": "礼",
    "meaning": "thanks; bow; etiquette",
    "readings": "レイ・ライ",
    "example": "手伝ってくれた友達にお礼を言いました。",
    "exampleMeaning": "I thanked the friend who helped me.",
    "words": [
      {
        "word": "お礼",
        "reading": "おれい",
        "meaning": "thanks"
      },
      {
        "word": "礼儀",
        "reading": "れいぎ",
        "meaning": "manners"
      },
      {
        "word": "失礼",
        "reading": "しつれい",
        "meaning": "rudeness or excuse me"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 45,
    "character": "令",
    "meaning": "order; command; law",
    "readings": "レイ",
    "example": "会社は新しい法令に従う必要があります。",
    "exampleMeaning": "The company must comply with the new regulation.",
    "words": [
      {
        "word": "命令",
        "reading": "めいれい",
        "meaning": "command"
      },
      {
        "word": "法令",
        "reading": "ほうれい",
        "meaning": "law or regulation"
      },
      {
        "word": "令和",
        "reading": "れいわ",
        "meaning": "Reiwa era"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 46,
    "character": "列",
    "meaning": "row; line; sequence",
    "readings": "レツ",
    "example": "店の前に長い列ができています。",
    "exampleMeaning": "A long line has formed in front of the store.",
    "words": [
      {
        "word": "列",
        "reading": "れつ",
        "meaning": "line"
      },
      {
        "word": "行列",
        "reading": "ぎょうれつ",
        "meaning": "queue"
      },
      {
        "word": "列車",
        "reading": "れっしゃ",
        "meaning": "train"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 47,
    "character": "老",
    "meaning": "old age; grow old",
    "readings": "ロウ／おいる・ふける",
    "example": "祖父は老後を静かな町で過ごしています。",
    "exampleMeaning": "My grandfather is spending his later years in a quiet town.",
    "words": [
      {
        "word": "老いる",
        "reading": "おいる",
        "meaning": "to grow old"
      },
      {
        "word": "老人",
        "reading": "ろうじん",
        "meaning": "elderly person"
      },
      {
        "word": "老後",
        "reading": "ろうご",
        "meaning": "later life"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 48,
    "character": "式",
    "meaning": "ceremony; style; formula",
    "readings": "シキ",
    "example": "来週、弟の学校で入学式があります。",
    "exampleMeaning": "My younger brother’s school has an entrance ceremony next week.",
    "words": [
      {
        "word": "形式",
        "reading": "けいしき",
        "meaning": "format"
      },
      {
        "word": "結婚式",
        "reading": "けっこんしき",
        "meaning": "wedding ceremony"
      },
      {
        "word": "入学式",
        "reading": "にゅうがくしき",
        "meaning": "entrance ceremony"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 49,
    "character": "州",
    "meaning": "state; province",
    "readings": "シュウ",
    "example": "その会社はアメリカの五つの州に支店を持っています。",
    "exampleMeaning": "That company has branches in five American states.",
    "words": [
      {
        "word": "州",
        "reading": "しゅう",
        "meaning": "state"
      },
      {
        "word": "九州",
        "reading": "きゅうしゅう",
        "meaning": "Kyushu"
      },
      {
        "word": "本州",
        "reading": "ほんしゅう",
        "meaning": "Honshu"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 50,
    "character": "寺",
    "meaning": "temple",
    "readings": "ジ／てら",
    "example": "京都では古いお寺を訪ねました。",
    "exampleMeaning": "I visited an old temple in Kyoto.",
    "words": [
      {
        "word": "お寺",
        "reading": "おてら",
        "meaning": "temple"
      },
      {
        "word": "寺院",
        "reading": "じいん",
        "meaning": "Buddhist temple"
      },
      {
        "word": "寺町",
        "reading": "てらまち",
        "meaning": "temple district"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 51,
    "character": "次",
    "meaning": "next; sequence",
    "readings": "ジ・シ／ つぎ・つぐ",
    "example": "次の駅で降りてください。",
    "exampleMeaning": "Please get off at the next station.",
    "words": [
      {
        "word": "次",
        "reading": "つぎ",
        "meaning": "next"
      },
      {
        "word": "次回",
        "reading": "じかい",
        "meaning": "next time"
      },
      {
        "word": "目次",
        "reading": "もくじ",
        "meaning": "table of contents"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 52,
    "character": "守",
    "meaning": "protect; obey; guard",
    "readings": "シュ・ス／ まもる・もり",
    "example": "約束は必ず守ってください。",
    "exampleMeaning": "Please always keep your promises.",
    "words": [
      {
        "word": "守る",
        "reading": "まもる",
        "meaning": "to protect or obey"
      },
      {
        "word": "留守",
        "reading": "るす",
        "meaning": "absence"
      },
      {
        "word": "守備",
        "reading": "しゅび",
        "meaning": "defense"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 53,
    "character": "糸",
    "meaning": "thread; yarn",
    "readings": "シ／いと",
    "example": "針に糸を通すのは難しいです。",
    "exampleMeaning": "It is difficult to put thread through a needle.",
    "words": [
      {
        "word": "糸",
        "reading": "いと",
        "meaning": "thread"
      },
      {
        "word": "毛糸",
        "reading": "けいと",
        "meaning": "wool yarn"
      },
      {
        "word": "糸口",
        "reading": "いとぐち",
        "meaning": "clue"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 54,
    "character": "在",
    "meaning": "exist; be present",
    "readings": "ザイ／ある",
    "example": "その問題は今も存在しています。",
    "exampleMeaning": "That problem still exists.",
    "words": [
      {
        "word": "存在",
        "reading": "そんざい",
        "meaning": "existence"
      },
      {
        "word": "現在",
        "reading": "げんざい",
        "meaning": "present"
      },
      {
        "word": "在宅",
        "reading": "ざいたく",
        "meaning": "being at home"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 55,
    "character": "再",
    "meaning": "again; repeat",
    "readings": "サイ・サ／ ふたたび",
    "example": "卒業後、十年ぶりに先生と再会しました。",
    "exampleMeaning": "I met my teacher again ten years after graduation.",
    "words": [
      {
        "word": "再び",
        "reading": "ふたたび",
        "meaning": "again"
      },
      {
        "word": "再会",
        "reading": "さいかい",
        "meaning": "reunion"
      },
      {
        "word": "再利用",
        "reading": "さいりよう",
        "meaning": "reuse"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 56,
    "character": "向",
    "meaning": "direction; face; toward",
    "readings": "コウ／むく・むける・むかう・むこう",
    "example": "駅はこの道の向こうにあります。",
    "exampleMeaning": "The station is on the other side of this road.",
    "words": [
      {
        "word": "向く",
        "reading": "むく",
        "meaning": "to face"
      },
      {
        "word": "方向",
        "reading": "ほうこう",
        "meaning": "direction"
      },
      {
        "word": "向こう",
        "reading": "むこう",
        "meaning": "over there"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 57,
    "character": "交",
    "meaning": "mix; intersect; associate",
    "readings": "コウ",
    "example": "留学生と意見を交換しました。",
    "exampleMeaning": "I exchanged opinions with an international student.",
    "words": [
      {
        "word": "交通",
        "reading": "こうつう",
        "meaning": "traffic"
      },
      {
        "word": "交換",
        "reading": "こうかん",
        "meaning": "exchange"
      },
      {
        "word": "交流",
        "reading": "こうりゅう",
        "meaning": "interaction"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 58,
    "character": "血",
    "meaning": "blood",
    "readings": "ケツ／ち",
    "example": "健康診断で血圧を測りました。",
    "exampleMeaning": "I had my blood pressure measured during a health examination.",
    "words": [
      {
        "word": "血",
        "reading": "ち",
        "meaning": "blood"
      },
      {
        "word": "血液",
        "reading": "けつえき",
        "meaning": "blood"
      },
      {
        "word": "血圧",
        "reading": "けつあつ",
        "meaning": "blood pressure"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 59,
    "character": "件",
    "meaning": "matter; case; item",
    "readings": "ケン／くだん",
    "example": "この仕事には三つの条件があります。",
    "exampleMeaning": "This job has three conditions.",
    "words": [
      {
        "word": "件",
        "reading": "けん",
        "meaning": "matter"
      },
      {
        "word": "条件",
        "reading": "じょうけん",
        "meaning": "condition"
      },
      {
        "word": "事件",
        "reading": "じけん",
        "meaning": "incident"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 60,
    "character": "共",
    "meaning": "together; common",
    "readings": "キョウ／とも",
    "example": "私たちは共通の目標を持っています。",
    "exampleMeaning": "We have a common goal.",
    "words": [
      {
        "word": "共に",
        "reading": "ともに",
        "meaning": "together"
      },
      {
        "word": "共通",
        "reading": "きょうつう",
        "meaning": "common"
      },
      {
        "word": "共同",
        "reading": "きょうどう",
        "meaning": "cooperation"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 61,
    "character": "曲",
    "meaning": "bend; curve; tune",
    "readings": "キョク／ま",
    "example": "次の角を右に曲がってください。",
    "exampleMeaning": "Please turn right at the next corner.",
    "words": [
      {
        "word": "曲",
        "reading": "きょく",
        "meaning": "song"
      },
      {
        "word": "曲がる",
        "reading": "まがる",
        "meaning": "to turn"
      },
      {
        "word": "作曲",
        "reading": "さっきょく",
        "meaning": "composition"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 62,
    "character": "各",
    "meaning": "each; every",
    "readings": "カク",
    "example": "各自で必要な資料を準備してください。",
    "exampleMeaning": "Each person should prepare the necessary materials.",
    "words": [
      {
        "word": "各自",
        "reading": "かくじ",
        "meaning": "each person"
      },
      {
        "word": "各国",
        "reading": "かっこく",
        "meaning": "each country"
      },
      {
        "word": "各地",
        "reading": "かくち",
        "meaning": "various regions"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 63,
    "character": "印",
    "meaning": "mark; seal; sign",
    "readings": "イン／しるし",
    "example": "駅の前の時計を目印にしてください。",
    "exampleMeaning": "Use the clock in front of the station as a landmark.",
    "words": [
      {
        "word": "印",
        "reading": "しるし",
        "meaning": "mark"
      },
      {
        "word": "印象",
        "reading": "いんしょう",
        "meaning": "impression"
      },
      {
        "word": "目印",
        "reading": "めじるし",
        "meaning": "landmark"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 64,
    "character": "因",
    "meaning": "cause; reason",
    "readings": "イン／よる",
    "example": "事故の原因はまだ分かっていません。",
    "exampleMeaning": "The cause of the accident is still unknown.",
    "words": [
      {
        "word": "原因",
        "reading": "げんいん",
        "meaning": "cause"
      },
      {
        "word": "要因",
        "reading": "よういん",
        "meaning": "factor"
      },
      {
        "word": "因る",
        "reading": "よる",
        "meaning": "to result from"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 65,
    "character": "羽",
    "meaning": "feather; wing",
    "readings": "ウ／はね",
    "example": "庭に白い鳥が一羽います。",
    "exampleMeaning": "There is one white bird in the garden.",
    "words": [
      {
        "word": "羽",
        "reading": "はね",
        "meaning": "feather or wing"
      },
      {
        "word": "羽毛",
        "reading": "うもう",
        "meaning": "feathers"
      },
      {
        "word": "一羽",
        "reading": "いちわ",
        "meaning": "one bird"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 66,
    "character": "団",
    "meaning": "group; association",
    "readings": "ダン・トン",
    "example": "学生の団体が博物館を見学しました。",
    "exampleMeaning": "A group of students visited the museum.",
    "words": [
      {
        "word": "団体",
        "reading": "だんたい",
        "meaning": "organization"
      },
      {
        "word": "集団",
        "reading": "しゅうだん",
        "meaning": "group"
      },
      {
        "word": "団地",
        "reading": "だんち",
        "meaning": "housing complex"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 67,
    "character": "竹",
    "meaning": "bamboo",
    "readings": "チク／たけ",
    "example": "京都の竹林をゆっくり歩きました。",
    "exampleMeaning": "I walked slowly through a bamboo grove in Kyoto.",
    "words": [
      {
        "word": "竹",
        "reading": "たけ",
        "meaning": "bamboo"
      },
      {
        "word": "竹林",
        "reading": "ちくりん",
        "meaning": "bamboo grove"
      },
      {
        "word": "竹製",
        "reading": "たけせい",
        "meaning": "made of bamboo"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 68,
    "character": "仲",
    "meaning": "relationship; companion",
    "readings": "チュウ／なか",
    "example": "新しいクラスメートとすぐ仲良くなりました。",
    "exampleMeaning": "I quickly became friends with my new classmate.",
    "words": [
      {
        "word": "仲",
        "reading": "なか",
        "meaning": "relationship"
      },
      {
        "word": "仲間",
        "reading": "なかま",
        "meaning": "companion"
      },
      {
        "word": "仲良し",
        "reading": "なかよし",
        "meaning": "close friend"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 69,
    "character": "虫",
    "meaning": "insect; bug",
    "readings": "チュウ／むし",
    "example": "甘い物を食べすぎると虫歯になります。",
    "exampleMeaning": "Eating too many sweets can cause tooth decay.",
    "words": [
      {
        "word": "虫",
        "reading": "むし",
        "meaning": "insect"
      },
      {
        "word": "昆虫",
        "reading": "こんちゅう",
        "meaning": "insect"
      },
      {
        "word": "虫歯",
        "reading": "むしば",
        "meaning": "tooth decay"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 70,
    "character": "兆",
    "meaning": "sign; omen; trillion",
    "readings": "チョウ／きざし",
    "example": "景気が回復する兆しが見えています。",
    "exampleMeaning": "There are signs that the economy is recovering.",
    "words": [
      {
        "word": "兆し",
        "reading": "きざし",
        "meaning": "sign"
      },
      {
        "word": "兆候",
        "reading": "ちょうこう",
        "meaning": "indication"
      },
      {
        "word": "一兆",
        "reading": "いっちょう",
        "meaning": "one trillion"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 71,
    "character": "伝",
    "meaning": "transmit; convey; tradition",
    "readings": "デン／つた",
    "example": "日本の伝統文化を外国人に伝えたいです。",
    "exampleMeaning": "I want to introduce traditional Japanese culture to foreigners.",
    "words": [
      {
        "word": "伝える",
        "reading": "つたえる",
        "meaning": "to convey"
      },
      {
        "word": "伝統",
        "reading": "でんとう",
        "meaning": "tradition"
      },
      {
        "word": "宣伝",
        "reading": "せんでん",
        "meaning": "advertising"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 72,
    "character": "当",
    "meaning": "hit; correspond; appropriate",
    "readings": "トウ／あ",
    "example": "この仕事は田中さんが担当しています。",
    "exampleMeaning": "Tanaka is in charge of this work.",
    "words": [
      {
        "word": "当たる",
        "reading": "あたる",
        "meaning": "to hit"
      },
      {
        "word": "本当",
        "reading": "ほんとう",
        "meaning": "truth"
      },
      {
        "word": "担当",
        "reading": "たんとう",
        "meaning": "person in charge"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 73,
    "character": "成",
    "meaning": "become; achieve; form",
    "readings": "セイ・な",
    "example": "子どもは一年で大きく成長しました。",
    "exampleMeaning": "The child grew significantly in one year.",
    "words": [
      {
        "word": "成る",
        "reading": "なる",
        "meaning": "to become"
      },
      {
        "word": "成功",
        "reading": "せいこう",
        "meaning": "success"
      },
      {
        "word": "成長",
        "reading": "せいちょう",
        "meaning": "growth"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 74,
    "character": "全",
    "meaning": "whole; all; complete",
    "readings": "ゼン／まったく・すべて",
    "example": "質問には全部答えました。",
    "exampleMeaning": "I answered all the questions.",
    "words": [
      {
        "word": "全部",
        "reading": "ぜんぶ",
        "meaning": "everything"
      },
      {
        "word": "全国",
        "reading": "ぜんこく",
        "meaning": "nationwide"
      },
      {
        "word": "安全",
        "reading": "あんぜん",
        "meaning": "safety"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 75,
    "character": "争",
    "meaning": "compete; dispute",
    "readings": "ソウ／あらそう",
    "example": "二つの会社が市場で競争しています。",
    "exampleMeaning": "The two companies are competing in the market.",
    "words": [
      {
        "word": "争う",
        "reading": "あらそう",
        "meaning": "to compete"
      },
      {
        "word": "戦争",
        "reading": "せんそう",
        "meaning": "war"
      },
      {
        "word": "競争",
        "reading": "きょうそう",
        "meaning": "competition"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 76,
    "character": "任",
    "meaning": "entrust; duty; responsibility",
    "readings": "ニン／まか",
    "example": "この仕事は私に任せてください。",
    "exampleMeaning": "Please leave this work to me.",
    "words": [
      {
        "word": "任せる",
        "reading": "まかせる",
        "meaning": "to entrust"
      },
      {
        "word": "責任",
        "reading": "せきにん",
        "meaning": "responsibility"
      },
      {
        "word": "任務",
        "reading": "にんむ",
        "meaning": "duty"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 77,
    "character": "両",
    "meaning": "both",
    "readings": "リョウ",
    "example": "両親は来月日本へ旅行します。",
    "exampleMeaning": "My parents will travel to Japan next month.",
    "words": [
      {
        "word": "両方",
        "reading": "りょうほう",
        "meaning": "both"
      },
      {
        "word": "両親",
        "reading": "りょうしん",
        "meaning": "parents"
      },
      {
        "word": "両手",
        "reading": "りょうて",
        "meaning": "both hands"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 78,
    "character": "利",
    "meaning": "benefit; advantage; use",
    "readings": "リ／きく",
    "example": "図書館は誰でも無料で利用できます。",
    "exampleMeaning": "Anyone can use the library for free.",
    "words": [
      {
        "word": "利用",
        "reading": "りよう",
        "meaning": "use"
      },
      {
        "word": "利益",
        "reading": "りえき",
        "meaning": "profit"
      },
      {
        "word": "便利",
        "reading": "べんり",
        "meaning": "convenient"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 79,
    "character": "余",
    "meaning": "remain; surplus; extra",
    "readings": "ヨ／あ",
    "example": "時間に余裕を持って出発しましょう。",
    "exampleMeaning": "Let us leave with plenty of time.",
    "words": [
      {
        "word": "余る",
        "reading": "あまる",
        "meaning": "to remain"
      },
      {
        "word": "余裕",
        "reading": "よゆう",
        "meaning": "spare time or room"
      },
      {
        "word": "余分",
        "reading": "よぶん",
        "meaning": "extra"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 80,
    "character": "防",
    "meaning": "prevent; defend",
    "readings": "ボウ／ふせぐ",
    "example": "手洗いは病気を防ぐために大切です。",
    "exampleMeaning": "Washing your hands is important for preventing illness.",
    "words": [
      {
        "word": "防ぐ",
        "reading": "ふせぐ",
        "meaning": "to prevent"
      },
      {
        "word": "予防",
        "reading": "よぼう",
        "meaning": "prevention"
      },
      {
        "word": "防止",
        "reading": "ぼうし",
        "meaning": "prevention"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 81,
    "character": "役",
    "meaning": "role; duty; service",
    "readings": "ヤク・エキ",
    "example": "この辞書は日本語の勉強に役に立ちます。",
    "exampleMeaning": "This dictionary is useful for studying Japanese.",
    "words": [
      {
        "word": "役",
        "reading": "やく",
        "meaning": "role"
      },
      {
        "word": "役所",
        "reading": "やくしょ",
        "meaning": "government office"
      },
      {
        "word": "役に立つ",
        "reading": "やくにたつ",
        "meaning": "to be useful"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 82,
    "character": "返",
    "meaning": "return; reply",
    "readings": "ヘン／かえ",
    "example": "借りた本を明日返します。",
    "exampleMeaning": "I will return the borrowed book tomorrow.",
    "words": [
      {
        "word": "返す",
        "reading": "かえす",
        "meaning": "to return"
      },
      {
        "word": "返事",
        "reading": "へんじ",
        "meaning": "reply"
      },
      {
        "word": "繰り返す",
        "reading": "くりかえす",
        "meaning": "to repeat"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 83,
    "character": "判",
    "meaning": "judge; decision",
    "readings": "ハン・バン",
    "example": "情報を確認してから判断してください。",
    "exampleMeaning": "Please make a decision after checking the information.",
    "words": [
      {
        "word": "判断",
        "reading": "はんだん",
        "meaning": "judgment"
      },
      {
        "word": "判定",
        "reading": "はんてい",
        "meaning": "decision"
      },
      {
        "word": "裁判",
        "reading": "さいばん",
        "meaning": "trial"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 84,
    "character": "臣",
    "meaning": "retainer; minister",
    "readings": "シン・ジン",
    "example": "大臣は記者会見で新しい方針を説明しました。",
    "exampleMeaning": "The minister explained the new policy at a press conference.",
    "words": [
      {
        "word": "大臣",
        "reading": "だいじん",
        "meaning": "minister"
      },
      {
        "word": "臣下",
        "reading": "しんか",
        "meaning": "retainer"
      },
      {
        "word": "総理大臣",
        "reading": "そうりだいじん",
        "meaning": "prime minister"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 85,
    "character": "身",
    "meaning": "body; oneself",
    "readings": "シン／み",
    "example": "この問題をもっと身近に感じるようになりました。",
    "exampleMeaning": "I began to feel that this issue was more relevant to me.",
    "words": [
      {
        "word": "身",
        "reading": "み",
        "meaning": "body or oneself"
      },
      {
        "word": "身近",
        "reading": "みぢか",
        "meaning": "familiar"
      },
      {
        "word": "中身",
        "reading": "なかみ",
        "meaning": "contents"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 86,
    "character": "折",
    "meaning": "fold; break",
    "readings": "セツ／お",
    "example": "紙を半分に折ってください。",
    "exampleMeaning": "Please fold the paper in half.",
    "words": [
      {
        "word": "折る",
        "reading": "おる",
        "meaning": "to fold or break"
      },
      {
        "word": "折れる",
        "reading": "おれる",
        "meaning": "to break"
      },
      {
        "word": "骨折",
        "reading": "こっせつ",
        "meaning": "bone fracture"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 87,
    "character": "努",
    "meaning": "effort; endeavor",
    "readings": "ド／つとめる",
    "example": "毎日少しずつ努力を続けています。",
    "exampleMeaning": "I continue making a little effort every day.",
    "words": [
      {
        "word": "努める",
        "reading": "つとめる",
        "meaning": "to make an effort"
      },
      {
        "word": "努力",
        "reading": "どりょく",
        "meaning": "effort"
      },
      {
        "word": "努力家",
        "reading": "どりょくか",
        "meaning": "hard worker"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 88,
    "character": "投",
    "meaning": "throw; submit; invest",
    "readings": "トウ／なげる",
    "example": "選挙で新しい代表に投票しました。",
    "exampleMeaning": "I voted for a new representative in the election.",
    "words": [
      {
        "word": "投げる",
        "reading": "なげる",
        "meaning": "to throw"
      },
      {
        "word": "投票",
        "reading": "とうひょう",
        "meaning": "voting"
      },
      {
        "word": "投資",
        "reading": "とうし",
        "meaning": "investment"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 89,
    "character": "対",
    "meaning": "opposite; versus; toward",
    "readings": "タイ・ツイ",
    "example": "このサービスは学生を対象にしています。",
    "exampleMeaning": "This service is intended for students.",
    "words": [
      {
        "word": "反対",
        "reading": "はんたい",
        "meaning": "opposition"
      },
      {
        "word": "対する",
        "reading": "たいする",
        "meaning": "toward"
      },
      {
        "word": "対象",
        "reading": "たいしょう",
        "meaning": "target"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 90,
    "character": "束",
    "meaning": "bundle; bind",
    "readings": "ソク／たば",
    "example": "友達の誕生日に花束を贈りました。",
    "exampleMeaning": "I gave my friend a bouquet for their birthday.",
    "words": [
      {
        "word": "束",
        "reading": "たば",
        "meaning": "bundle"
      },
      {
        "word": "約束",
        "reading": "やくそく",
        "meaning": "promise"
      },
      {
        "word": "花束",
        "reading": "はなたば",
        "meaning": "bouquet"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 91,
    "character": "谷",
    "meaning": "valley",
    "readings": "コク／たに",
    "example": "山の間に深い谷があります。",
    "exampleMeaning": "There is a deep valley between the mountains.",
    "words": [
      {
        "word": "谷",
        "reading": "たに",
        "meaning": "valley"
      },
      {
        "word": "谷川",
        "reading": "たにがわ",
        "meaning": "mountain stream"
      },
      {
        "word": "渓谷",
        "reading": "けいこく",
        "meaning": "ravine"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 92,
    "character": "位",
    "meaning": "rank; position",
    "readings": "イ／くらい",
    "example": "彼は大会で一位になりました。",
    "exampleMeaning": "He came first in the competition.",
    "words": [
      {
        "word": "位置",
        "reading": "いち",
        "meaning": "position"
      },
      {
        "word": "地位",
        "reading": "ちい",
        "meaning": "status"
      },
      {
        "word": "一位",
        "reading": "いちい",
        "meaning": "first place"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 93,
    "character": "囲",
    "meaning": "surround; enclose",
    "readings": "イ／かこ",
    "example": "家族でテーブルを囲んで食事をしました。",
    "exampleMeaning": "My family sat around the table and ate together.",
    "words": [
      {
        "word": "囲む",
        "reading": "かこむ",
        "meaning": "to surround"
      },
      {
        "word": "周囲",
        "reading": "しゅうい",
        "meaning": "surroundings"
      },
      {
        "word": "範囲",
        "reading": "はんい",
        "meaning": "range"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 94,
    "character": "完",
    "meaning": "complete; finish",
    "readings": "カン",
    "example": "新しい駅は来年完成する予定です。",
    "exampleMeaning": "The new station is scheduled to be completed next year.",
    "words": [
      {
        "word": "完成",
        "reading": "かんせい",
        "meaning": "completion"
      },
      {
        "word": "完全",
        "reading": "かんぜん",
        "meaning": "complete"
      },
      {
        "word": "完了",
        "reading": "かんりょう",
        "meaning": "completion"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 95,
    "character": "角",
    "meaning": "corner; angle; horn",
    "readings": "カク／かど",
    "example": "次の角を左に曲がってください。",
    "exampleMeaning": "Please turn left at the next corner.",
    "words": [
      {
        "word": "角",
        "reading": "かど",
        "meaning": "corner"
      },
      {
        "word": "三角",
        "reading": "さんかく",
        "meaning": "triangle"
      },
      {
        "word": "角度",
        "reading": "かくど",
        "meaning": "angle"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 96,
    "character": "快",
    "meaning": "pleasant; comfortable",
    "readings": "カイ／ こころよい",
    "example": "このホテルの部屋は広くて快適です。",
    "exampleMeaning": "This hotel room is spacious and comfortable.",
    "words": [
      {
        "word": "快適",
        "reading": "かいてき",
        "meaning": "comfortable"
      },
      {
        "word": "愉快",
        "reading": "ゆかい",
        "meaning": "pleasant"
      },
      {
        "word": "快晴",
        "reading": "かいせい",
        "meaning": "clear weather"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 97,
    "character": "改",
    "meaning": "change; revise; improve",
    "readings": "カイ／あらた",
    "example": "サービスの内容を改善する必要があります。",
    "exampleMeaning": "We need to improve the content of the service.",
    "words": [
      {
        "word": "改める",
        "reading": "あらためる",
        "meaning": "to revise"
      },
      {
        "word": "改善",
        "reading": "かいぜん",
        "meaning": "improvement"
      },
      {
        "word": "改札",
        "reading": "かいさつ",
        "meaning": "ticket gate"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 98,
    "character": "技",
    "meaning": "skill; technique",
    "readings": "ギ／わざ",
    "example": "彼の特技はピアノを弾くことです。",
    "exampleMeaning": "His special skill is playing the piano.",
    "words": [
      {
        "word": "技",
        "reading": "わざ",
        "meaning": "skill"
      },
      {
        "word": "技術",
        "reading": "ぎじゅつ",
        "meaning": "technology or technique"
      },
      {
        "word": "特技",
        "reading": "とくぎ",
        "meaning": "special skill"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 99,
    "character": "局",
    "meaning": "office; bureau; station",
    "readings": "キョク",
    "example": "駅の近くの郵便局で荷物を送りました。",
    "exampleMeaning": "I sent a package from the post office near the station.",
    "words": [
      {
        "word": "局",
        "reading": "きょく",
        "meaning": "office or station"
      },
      {
        "word": "郵便局",
        "reading": "ゆうびんきょく",
        "meaning": "post office"
      },
      {
        "word": "薬局",
        "reading": "やっきょく",
        "meaning": "pharmacy"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 100,
    "character": "君",
    "meaning": "you; ruler",
    "readings": "クン／ きみ",
    "example": "君の意見を聞かせてください。",
    "exampleMeaning": "Please tell me your opinion.",
    "words": [
      {
        "word": "君",
        "reading": "きみ",
        "meaning": "you"
      },
      {
        "word": "君たち",
        "reading": "きみたち",
        "meaning": "you all"
      },
      {
        "word": "君主",
        "reading": "くんしゅ",
        "meaning": "ruler"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 101,
    "character": "均",
    "meaning": "equal; average",
    "readings": "キン",
    "example": "ケーキを四人で均等に分けました。",
    "exampleMeaning": "We divided the cake equally among four people.",
    "words": [
      {
        "word": "平均",
        "reading": "へいきん",
        "meaning": "average"
      },
      {
        "word": "均等",
        "reading": "きんとう",
        "meaning": "equal"
      },
      {
        "word": "均一",
        "reading": "きんいつ",
        "meaning": "uniform"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 102,
    "character": "形",
    "meaning": "shape; form",
    "readings": "ケイ／ かたち",
    "example": "この箱は丸い形をしています。",
    "exampleMeaning": "This box has a round shape.",
    "words": [
      {
        "word": "形",
        "reading": "かたち",
        "meaning": "shape"
      },
      {
        "word": "人形",
        "reading": "にんぎょう",
        "meaning": "doll"
      },
      {
        "word": "形式",
        "reading": "けいしき",
        "meaning": "format"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 103,
    "character": "決",
    "meaning": "decide; be decided",
    "readings": "ケツ／き",
    "example": "旅行の日程を今日決めました。",
    "exampleMeaning": "We decided the travel schedule today.",
    "words": [
      {
        "word": "決める",
        "reading": "きめる",
        "meaning": "to decide"
      },
      {
        "word": "決まる",
        "reading": "きまる",
        "meaning": "to be decided"
      },
      {
        "word": "決定",
        "reading": "けってい",
        "meaning": "decision"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 104,
    "character": "芸",
    "meaning": "art; performance",
    "readings": "ゲイ",
    "example": "彼女は日本の伝統芸能を学んでいます。",
    "exampleMeaning": "She is studying traditional Japanese performing arts.",
    "words": [
      {
        "word": "芸術",
        "reading": "げいじゅつ",
        "meaning": "art"
      },
      {
        "word": "芸能",
        "reading": "げいのう",
        "meaning": "performing arts"
      },
      {
        "word": "芸人",
        "reading": "げいにん",
        "meaning": "entertainer"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 105,
    "character": "希",
    "meaning": "hope; rare",
    "readings": "キ",
    "example": "希望する時間を選んでください。",
    "exampleMeaning": "Please select your preferred time.",
    "words": [
      {
        "word": "希望",
        "reading": "きぼう",
        "meaning": "hope"
      },
      {
        "word": "希少",
        "reading": "きしょう",
        "meaning": "rare"
      },
      {
        "word": "希望者",
        "reading": "きぼうしゃ",
        "meaning": "applicant"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 106,
    "character": "告",
    "meaning": "tell; announce",
    "readings": "コク／ つげる",
    "example": "結果を上司に報告しました。",
    "exampleMeaning": "I reported the results to my supervisor.",
    "words": [
      {
        "word": "告げる",
        "reading": "つげる",
        "meaning": "to announce"
      },
      {
        "word": "報告",
        "reading": "ほうこく",
        "meaning": "report"
      },
      {
        "word": "広告",
        "reading": "こうこく",
        "meaning": "advertisement"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 107,
    "character": "材",
    "meaning": "material; talent",
    "readings": "ザイ",
    "example": "料理に必要な材料を買いました。",
    "exampleMeaning": "I bought the ingredients needed for the dish.",
    "words": [
      {
        "word": "材料",
        "reading": "ざいりょう",
        "meaning": "material"
      },
      {
        "word": "教材",
        "reading": "きょうざい",
        "meaning": "teaching material"
      },
      {
        "word": "人材",
        "reading": "じんざい",
        "meaning": "personnel"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 108,
    "character": "坂",
    "meaning": "slope; hill",
    "readings": "ハン／ さか",
    "example": "この坂道はとても急です。",
    "exampleMeaning": "This slope is very steep.",
    "words": [
      {
        "word": "坂",
        "reading": "さか",
        "meaning": "slope"
      },
      {
        "word": "坂道",
        "reading": "さかみち",
        "meaning": "sloping road"
      },
      {
        "word": "上り坂",
        "reading": "のぼりざか",
        "meaning": "uphill slope"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 109,
    "character": "似",
    "meaning": "resemble; similar",
    "readings": "ジ／にる",
    "example": "この二つの写真はよく似ています。",
    "exampleMeaning": "These two photographs look very similar.",
    "words": [
      {
        "word": "似る",
        "reading": "にる",
        "meaning": "to resemble"
      },
      {
        "word": "似ている",
        "reading": "にている",
        "meaning": "to be similar"
      },
      {
        "word": "類似",
        "reading": "るいじ",
        "meaning": "similarity"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 110,
    "character": "児",
    "meaning": "child",
    "readings": "ジ",
    "example": "この図書館には児童向けの本が多いです。",
    "exampleMeaning": "This library has many books for children.",
    "words": [
      {
        "word": "児童",
        "reading": "じどう",
        "meaning": "child"
      },
      {
        "word": "育児",
        "reading": "いくじ",
        "meaning": "childcare"
      },
      {
        "word": "小児科",
        "reading": "しょうにか",
        "meaning": "pediatrics"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 111,
    "character": "状",
    "meaning": "condition; form",
    "readings": "ジョウ",
    "example": "現在の状況を説明してください。",
    "exampleMeaning": "Please explain the current situation.",
    "words": [
      {
        "word": "状況",
        "reading": "じょうきょう",
        "meaning": "situation"
      },
      {
        "word": "状態",
        "reading": "じょうたい",
        "meaning": "condition"
      },
      {
        "word": "招待状",
        "reading": "しょうたいじょう",
        "meaning": "invitation"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 112,
    "character": "初",
    "meaning": "first; beginning",
    "readings": "ショ／はじ",
    "example": "日本へ行くのは初めてです。",
    "exampleMeaning": "It is my first time going to Japan.",
    "words": [
      {
        "word": "初めて",
        "reading": "はじめて",
        "meaning": "for the first time"
      },
      {
        "word": "最初",
        "reading": "さいしょ",
        "meaning": "first"
      },
      {
        "word": "初日",
        "reading": "しょにち",
        "meaning": "first day"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 113,
    "character": "助",
    "meaning": "help; assist",
    "readings": "ジョ／ たす",
    "example": "道で困っている人を助けました。",
    "exampleMeaning": "I helped someone who was having trouble on the street.",
    "words": [
      {
        "word": "助ける",
        "reading": "たすける",
        "meaning": "to help"
      },
      {
        "word": "助かる",
        "reading": "たすかる",
        "meaning": "to be saved"
      },
      {
        "word": "助手",
        "reading": "じょしゅ",
        "meaning": "assistant"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 114,
    "character": "労",
    "meaning": "labor; hardship",
    "readings": "ロウ",
    "example": "長時間の労働で疲れました。",
    "exampleMeaning": "I became tired from working long hours.",
    "words": [
      {
        "word": "労働",
        "reading": "ろうどう",
        "meaning": "labor"
      },
      {
        "word": "苦労",
        "reading": "くろう",
        "meaning": "hardship"
      },
      {
        "word": "疲労",
        "reading": "ひろう",
        "meaning": "fatigue"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 115,
    "character": "冷",
    "meaning": "cold; cool",
    "readings": "つめ・ひ",
    "example": "暑かったので、冷たい水を飲みました。",
    "exampleMeaning": "It was hot, so I drank cold water.",
    "words": [
      {
        "word": "冷たい",
        "reading": "つめたい",
        "meaning": "cold"
      },
      {
        "word": "冷える",
        "reading": "ひえる",
        "meaning": "to become cold"
      },
      {
        "word": "冷蔵庫",
        "reading": "れいぞうこ",
        "meaning": "refrigerator"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 116,
    "character": "例",
    "meaning": "example",
    "readings": "レイ／ たと",
    "example": "先生は分かりやすい例を示しました。",
    "exampleMeaning": "The teacher gave an easy-to-understand example.",
    "words": [
      {
        "word": "例",
        "reading": "れい",
        "meaning": "example"
      },
      {
        "word": "例えば",
        "reading": "たとえば",
        "meaning": "for example"
      },
      {
        "word": "例外",
        "reading": "れいがい",
        "meaning": "exception"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 117,
    "character": "和",
    "meaning": "harmony; Japanese style",
    "readings": "ワ",
    "example": "旅行中に日本の和食を楽しみました。",
    "exampleMeaning": "I enjoyed Japanese food during my trip.",
    "words": [
      {
        "word": "和食",
        "reading": "わしょく",
        "meaning": "Japanese food"
      },
      {
        "word": "平和",
        "reading": "へいわ",
        "meaning": "peace"
      },
      {
        "word": "和室",
        "reading": "わしつ",
        "meaning": "Japanese-style room"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 118,
    "character": "述",
    "meaning": "state; describe",
    "readings": "ジュツ／のべる",
    "example": "会議で自分の意見を述べました。",
    "exampleMeaning": "I stated my opinion at the meeting.",
    "words": [
      {
        "word": "述べる",
        "reading": "のべる",
        "meaning": "to state"
      },
      {
        "word": "記述",
        "reading": "きじゅつ",
        "meaning": "description"
      },
      {
        "word": "口述",
        "reading": "こうじゅつ",
        "meaning": "dictation"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 119,
    "character": "承",
    "meaning": "accept; acknowledge",
    "readings": "ショウ",
    "example": "ご希望の内容を承知しました。",
    "exampleMeaning": "I understand your request.",
    "words": [
      {
        "word": "承知",
        "reading": "しょうち",
        "meaning": "understanding"
      },
      {
        "word": "承認",
        "reading": "しょうにん",
        "meaning": "approval"
      },
      {
        "word": "了承",
        "reading": "りょうしょう",
        "meaning": "acknowledgment"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 120,
    "character": "招",
    "meaning": "invite; cause",
    "readings": "ショウ／まね",
    "example": "友達を誕生日会に招きました。",
    "exampleMeaning": "I invited my friend to the birthday party.",
    "words": [
      {
        "word": "招く",
        "reading": "まねく",
        "meaning": "to invite"
      },
      {
        "word": "招待",
        "reading": "しょうたい",
        "meaning": "invitation"
      },
      {
        "word": "招待状",
        "reading": "しょうたいじょう",
        "meaning": "invitation card"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 121,
    "character": "実",
    "meaning": "truth; fruit; reality",
    "readings": "ジツ／み",
    "example": "その計画がついに実現しました。",
    "exampleMeaning": "That plan was finally realized.",
    "words": [
      {
        "word": "実際",
        "reading": "じっさい",
        "meaning": "actually"
      },
      {
        "word": "実現",
        "reading": "じつげん",
        "meaning": "realization"
      },
      {
        "word": "実る",
        "reading": "みのる",
        "meaning": "to bear fruit"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 122,
    "character": "取",
    "meaning": "take; obtain",
    "readings": "シュ／とる",
    "example": "駅で予約した切符を受け取りました。",
    "exampleMeaning": "I received the ticket I had reserved at the station.",
    "words": [
      {
        "word": "取る",
        "reading": "とる",
        "meaning": "to take"
      },
      {
        "word": "受け取る",
        "reading": "うけとる",
        "meaning": "to receive"
      },
      {
        "word": "取得",
        "reading": "しゅとく",
        "meaning": "acquisition"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 123,
    "character": "治",
    "meaning": "heal; cure; govern",
    "readings": "ジ・チ／なお",
    "example": "薬を飲んだら、風邪が治りました。",
    "exampleMeaning": "My cold got better after I took medicine.",
    "words": [
      {
        "word": "治る",
        "reading": "なおる",
        "meaning": "to recover"
      },
      {
        "word": "治す",
        "reading": "なおす",
        "meaning": "to cure"
      },
      {
        "word": "政治",
        "reading": "せいじ",
        "meaning": "politics"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 124,
    "character": "受",
    "meaning": "receive; take",
    "readings": "ジュ／うける",
    "example": "来月、日本語の試験を受けます。",
    "exampleMeaning": "I will take a Japanese examination next month.",
    "words": [
      {
        "word": "受ける",
        "reading": "うける",
        "meaning": "to receive"
      },
      {
        "word": "受付",
        "reading": "うけつけ",
        "meaning": "reception"
      },
      {
        "word": "受験",
        "reading": "じゅけん",
        "meaning": "taking an examination"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 125,
    "character": "周",
    "meaning": "surroundings; circumference",
    "readings": "シュウ／まわり",
    "example": "公園の周りを一周しました。",
    "exampleMeaning": "I walked one lap around the park.",
    "words": [
      {
        "word": "周り",
        "reading": "まわり",
        "meaning": "surroundings"
      },
      {
        "word": "周辺",
        "reading": "しゅうへん",
        "meaning": "surrounding area"
      },
      {
        "word": "一周",
        "reading": "いっしゅう",
        "meaning": "one lap"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 126,
    "character": "妻",
    "meaning": "wife",
    "readings": "サイ／ つま",
    "example": "妻と一緒に買い物へ行きました。",
    "exampleMeaning": "I went shopping with my wife.",
    "words": [
      {
        "word": "妻",
        "reading": "つま",
        "meaning": "wife"
      },
      {
        "word": "夫妻",
        "reading": "ふさい",
        "meaning": "married couple"
      },
      {
        "word": "妻子",
        "reading": "さいし",
        "meaning": "wife and children"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 127,
    "character": "参",
    "meaning": "participate; visit humbly",
    "readings": "サン／ まいる",
    "example": "来週の会議に参加する予定です。",
    "exampleMeaning": "I plan to participate in next week’s meeting.",
    "words": [
      {
        "word": "参加",
        "reading": "さんか",
        "meaning": "participation"
      },
      {
        "word": "参考",
        "reading": "さんこう",
        "meaning": "reference"
      },
      {
        "word": "参る",
        "reading": "まいる",
        "meaning": "to go humbly"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 128,
    "character": "枝",
    "meaning": "branch; twig",
    "readings": "シ／えだ",
    "example": "木の枝に鳥が止まっています。",
    "exampleMeaning": "A bird is sitting on a tree branch.",
    "words": [
      {
        "word": "枝",
        "reading": "えだ",
        "meaning": "branch"
      },
      {
        "word": "小枝",
        "reading": "こえだ",
        "meaning": "twig"
      },
      {
        "word": "枝豆",
        "reading": "えだまめ",
        "meaning": "edamame"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 129,
    "character": "刷",
    "meaning": "print",
    "readings": "サツ／ する",
    "example": "会議の資料を十部印刷しました。",
    "exampleMeaning": "I printed ten copies of the meeting materials.",
    "words": [
      {
        "word": "印刷",
        "reading": "いんさつ",
        "meaning": "printing"
      },
      {
        "word": "刷る",
        "reading": "する",
        "meaning": "to print"
      },
      {
        "word": "増刷",
        "reading": "ぞうさつ",
        "meaning": "additional printing"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 130,
    "character": "効",
    "meaning": "effect; work",
    "readings": "コウ／ きく",
    "example": "この薬は頭痛によく効きます。",
    "exampleMeaning": "This medicine works well for headaches.",
    "words": [
      {
        "word": "効く",
        "reading": "きく",
        "meaning": "to work"
      },
      {
        "word": "効果",
        "reading": "こうか",
        "meaning": "effect"
      },
      {
        "word": "有効",
        "reading": "ゆうこう",
        "meaning": "valid"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 131,
    "character": "幸",
    "meaning": "happiness; good fortune",
    "readings": "コウ／ しあわ",
    "example": "家族と過ごす時間に幸せを感じます。",
    "exampleMeaning": "I feel happy when spending time with my family.",
    "words": [
      {
        "word": "幸せ",
        "reading": "しあわせ",
        "meaning": "happiness"
      },
      {
        "word": "幸運",
        "reading": "こううん",
        "meaning": "good luck"
      },
      {
        "word": "不幸",
        "reading": "ふこう",
        "meaning": "misfortune"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 132,
    "character": "固",
    "meaning": "hard; solidify",
    "readings": "コ／かた",
    "example": "箱をテープでしっかり固定しました。",
    "exampleMeaning": "I secured the box firmly with tape.",
    "words": [
      {
        "word": "固い",
        "reading": "かたい",
        "meaning": "hard"
      },
      {
        "word": "固める",
        "reading": "かためる",
        "meaning": "to harden"
      },
      {
        "word": "固定",
        "reading": "こてい",
        "meaning": "fixation"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 133,
    "character": "季",
    "meaning": "season",
    "readings": "キ",
    "example": "春は私が一番好きな季節です。",
    "exampleMeaning": "Spring is my favorite season.",
    "words": [
      {
        "word": "季節",
        "reading": "きせつ",
        "meaning": "season"
      },
      {
        "word": "四季",
        "reading": "しき",
        "meaning": "four seasons"
      },
      {
        "word": "雨季",
        "reading": "うき",
        "meaning": "rainy season"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 134,
    "character": "岸",
    "meaning": "shore; coast",
    "readings": "ガン／きし",
    "example": "海岸を歩きながら夕日を見ました。",
    "exampleMeaning": "I watched the sunset while walking along the coast.",
    "words": [
      {
        "word": "岸",
        "reading": "きし",
        "meaning": "shore"
      },
      {
        "word": "海岸",
        "reading": "かいがん",
        "meaning": "coast"
      },
      {
        "word": "対岸",
        "reading": "たいがん",
        "meaning": "opposite shore"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 135,
    "character": "岩",
    "meaning": "rock; boulder",
    "readings": "ガン／いわ",
    "example": "山の道には大きな岩がありました。",
    "exampleMeaning": "There was a large rock on the mountain path.",
    "words": [
      {
        "word": "岩",
        "reading": "いわ",
        "meaning": "rock"
      },
      {
        "word": "岩場",
        "reading": "いわば",
        "meaning": "rocky area"
      },
      {
        "word": "溶岩",
        "reading": "ようがん",
        "meaning": "lava"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 136,
    "character": "泣",
    "meaning": "cry; weep",
    "readings": "キュウ／なく",
    "example": "子どもが転んで泣きました。",
    "exampleMeaning": "The child fell and cried.",
    "words": [
      {
        "word": "泣く",
        "reading": "なく",
        "meaning": "to cry"
      },
      {
        "word": "泣き声",
        "reading": "なきごえ",
        "meaning": "crying voice"
      },
      {
        "word": "号泣",
        "reading": "ごうきゅう",
        "meaning": "loud crying"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 137,
    "character": "協",
    "meaning": "cooperation",
    "readings": "キョウ",
    "example": "チーム全員で協力して仕事を終えました。",
    "exampleMeaning": "The entire team cooperated to finish the work.",
    "words": [
      {
        "word": "協力",
        "reading": "きょうりょく",
        "meaning": "cooperation"
      },
      {
        "word": "協会",
        "reading": "きょうかい",
        "meaning": "association"
      },
      {
        "word": "協議",
        "reading": "きょうぎ",
        "meaning": "consultation"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 138,
    "character": "居",
    "meaning": "be; reside",
    "readings": "キョ／いる",
    "example": "猫は居間のソファーにいます。",
    "exampleMeaning": "The cat is on the sofa in the living room.",
    "words": [
      {
        "word": "居る",
        "reading": "いる",
        "meaning": "to be"
      },
      {
        "word": "居間",
        "reading": "いま",
        "meaning": "living room"
      },
      {
        "word": "居住",
        "reading": "きょじゅう",
        "meaning": "residence"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 139,
    "character": "苦",
    "meaning": "suffering; bitter",
    "readings": "ク／くる にが",
    "example": "私は人前で話すのが苦手です。",
    "exampleMeaning": "I am not good at speaking in front of people.",
    "words": [
      {
        "word": "苦しい",
        "reading": "くるしい",
        "meaning": "painful"
      },
      {
        "word": "苦手",
        "reading": "にがて",
        "meaning": "not good at"
      },
      {
        "word": "苦労",
        "reading": "くろう",
        "meaning": "hardship"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 140,
    "character": "具",
    "meaning": "tool; equipment",
    "readings": "グ",
    "example": "作業に必要な道具を準備してください。",
    "exampleMeaning": "Please prepare the tools needed for the task.",
    "words": [
      {
        "word": "道具",
        "reading": "どうぐ",
        "meaning": "tool"
      },
      {
        "word": "家具",
        "reading": "かぐ",
        "meaning": "furniture"
      },
      {
        "word": "具体的",
        "reading": "ぐたいてき",
        "meaning": "specific"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 141,
    "character": "果",
    "meaning": "result; accomplish",
    "readings": "カ／は",
    "example": "試験の結果は来週発表されます。",
    "exampleMeaning": "The examination results will be announced next week.",
    "words": [
      {
        "word": "結果",
        "reading": "けっか",
        "meaning": "result"
      },
      {
        "word": "果物",
        "reading": "くだもの",
        "meaning": "fruit"
      },
      {
        "word": "果たす",
        "reading": "はたす",
        "meaning": "to accomplish"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 142,
    "character": "河",
    "meaning": "river",
    "readings": "カ／かわ",
    "example": "この町には大きな河川が流れています。",
    "exampleMeaning": "A large river flows through this town.",
    "words": [
      {
        "word": "河川",
        "reading": "かせん",
        "meaning": "river"
      },
      {
        "word": "運河",
        "reading": "うんが",
        "meaning": "canal"
      },
      {
        "word": "河口",
        "reading": "かこう",
        "meaning": "river mouth"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 143,
    "character": "官",
    "meaning": "government official",
    "readings": "カン",
    "example": "駅の前に警官が立っています。",
    "exampleMeaning": "A police officer is standing in front of the station.",
    "words": [
      {
        "word": "官庁",
        "reading": "かんちょう",
        "meaning": "government office"
      },
      {
        "word": "官僚",
        "reading": "かんりょう",
        "meaning": "bureaucrat"
      },
      {
        "word": "警官",
        "reading": "けいかん",
        "meaning": "police officer"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 144,
    "character": "委",
    "meaning": "entrust; committee",
    "readings": "イ／ゆだ",
    "example": "彼は委員会の代表に選ばれました。",
    "exampleMeaning": "He was selected as the committee representative.",
    "words": [
      {
        "word": "委員",
        "reading": "いいん",
        "meaning": "committee member"
      },
      {
        "word": "委員会",
        "reading": "いいんかい",
        "meaning": "committee"
      },
      {
        "word": "委ねる",
        "reading": "ゆだねる",
        "meaning": "to entrust"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 145,
    "character": "易",
    "meaning": "easy; exchange",
    "readings": "イ／やさ",
    "example": "この問題は思ったより易しかったです。",
    "exampleMeaning": "This problem was easier than I expected.",
    "words": [
      {
        "word": "易しい",
        "reading": "やさしい",
        "meaning": "easy"
      },
      {
        "word": "容易",
        "reading": "ようい",
        "meaning": "easy"
      },
      {
        "word": "貿易",
        "reading": "ぼうえき",
        "meaning": "trade"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 146,
    "character": "育",
    "meaning": "grow; raise",
    "readings": "イク／そだ",
    "example": "子どもたちは元気に育っています。",
    "exampleMeaning": "The children are growing up healthily.",
    "words": [
      {
        "word": "育つ",
        "reading": "そだつ",
        "meaning": "to grow"
      },
      {
        "word": "育てる",
        "reading": "そだてる",
        "meaning": "to raise"
      },
      {
        "word": "教育",
        "reading": "きょういく",
        "meaning": "education"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 147,
    "character": "泳",
    "meaning": "swim",
    "readings": "エイ／およぐ",
    "example": "夏は毎週プールで泳ぎます。",
    "exampleMeaning": "I swim in the pool every week during summer.",
    "words": [
      {
        "word": "泳ぐ",
        "reading": "およぐ",
        "meaning": "to swim"
      },
      {
        "word": "水泳",
        "reading": "すいえい",
        "meaning": "swimming"
      },
      {
        "word": "競泳",
        "reading": "きょうえい",
        "meaning": "competitive swimming"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 148,
    "character": "直",
    "meaning": "direct; repair",
    "readings": "チョク／なお",
    "example": "壊れた時計を直しました。",
    "exampleMeaning": "I repaired the broken clock.",
    "words": [
      {
        "word": "直す",
        "reading": "なおす",
        "meaning": "to repair"
      },
      {
        "word": "直る",
        "reading": "なおる",
        "meaning": "to be repaired"
      },
      {
        "word": "直接",
        "reading": "ちょくせつ",
        "meaning": "directly"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 149,
    "character": "定",
    "meaning": "decide; establish",
    "readings": "テイ／ さだ",
    "example": "会議の日程は明日決定します。",
    "exampleMeaning": "The meet",
    "words": [
      {
        "word": "予定",
        "reading": "よてい",
        "meaning": "schedule"
      },
      {
        "word": "決定",
        "reading": "けってい",
        "meaning": "decision"
      },
      {
        "word": "定める",
        "reading": "さだめる",
        "meaning": "to establish"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 150,
    "character": "底",
    "meaning": "bottom; base",
    "readings": "テイ／ そこ",
    "example": "箱の底に鍵がありました。",
    "exampleMeaning": "There was a key at the bottom of the box.",
    "words": [
      {
        "word": "底",
        "reading": "そこ",
        "meaning": "bottom"
      },
      {
        "word": "海底",
        "reading": "かいてい",
        "meaning": "seabed"
      },
      {
        "word": "徹底",
        "reading": "てってい",
        "meaning": "thoroughness"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 151,
    "character": "的",
    "meaning": "target; objective; -al",
    "readings": "テキ",
    "example": "旅行の目的は日本文化を学ぶことです。",
    "exampleMeaning": "The purpose of the trip is to learn about Japanese culture.",
    "words": [
      {
        "word": "目的",
        "reading": "もくてき",
        "meaning": "purpose"
      },
      {
        "word": "具体的",
        "reading": "ぐたいてき",
        "meaning": "specific"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 152,
    "character": "性",
    "meaning": "nature; quality; gender",
    "readings": "セイ",
    "example": "この計画が成功する可能性は高いです。",
    "exampleMeaning": "There is a strong possibility that this plan will succeed.",
    "words": [
      {
        "word": "性格",
        "reading": "せいかく",
        "meaning": "personality"
      },
      {
        "word": "可能性",
        "reading": "かのうせい",
        "meaning": "possibility"
      },
      {
        "word": "安全性",
        "reading": "あんぜんせい",
        "meaning": "safety"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 153,
    "character": "昔",
    "meaning": "old times; long ago",
    "readings": "むかし",
    "example": "昔、この場所には小さな村がありました。",
    "exampleMeaning": "Long ago, there was a small village here.",
    "words": [
      {
        "word": "昔",
        "reading": "むかし",
        "meaning": "long ago"
      },
      {
        "word": "昔話",
        "reading": "むかしばなし",
        "meaning": "old tale"
      },
      {
        "word": "今昔",
        "reading": "こんじゃく",
        "meaning": "past and present"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 154,
    "character": "制",
    "meaning": "system; control",
    "readings": "セイ",
    "example": "新しい教育制度が始まりました。",
    "exampleMeaning": "A new education system has started.",
    "words": [
      {
        "word": "制度",
        "reading": "せいど",
        "meaning": "system"
      },
      {
        "word": "制限",
        "reading": "せいげん",
        "meaning": "restriction"
      },
      {
        "word": "強制",
        "reading": "きょうせい",
        "meaning": "compulsion"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 155,
    "character": "卒",
    "meaning": "graduate; finish",
    "readings": "ソツ",
    "example": "妹は来年大学を卒業します。",
    "exampleMeaning": "My younger sister will graduate from university next year.",
    "words": [
      {
        "word": "卒業",
        "reading": "そつぎょう",
        "meaning": "graduation"
      },
      {
        "word": "卒業生",
        "reading": "そつぎょうせい",
        "meaning": "graduate"
      },
      {
        "word": "新卒",
        "reading": "しんそつ",
        "meaning": "recent graduate"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 156,
    "character": "非",
    "meaning": "non-; wrong; negative",
    "readings": "ヒ",
    "example": "この問題は非常に重要です。",
    "exampleMeaning": "This issue is extremely important.",
    "words": [
      {
        "word": "非常に",
        "reading": "ひじょうに",
        "meaning": "extremely"
      },
      {
        "word": "非常口",
        "reading": "ひじょうぐち",
        "meaning": "emergency exit"
      },
      {
        "word": "非公式",
        "reading": "ひこうしき",
        "meaning": "unofficial"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 157,
    "character": "利",
    "meaning": "benefit; advantage",
    "readings": "リ",
    "example": "この施設は無料で利用できます。",
    "exampleMeaning": "This facility can be used for free.",
    "words": [
      {
        "word": "利用",
        "reading": "りよう",
        "meaning": "use"
      },
      {
        "word": "利益",
        "reading": "りえき",
        "meaning": "profit"
      },
      {
        "word": "有利",
        "reading": "ゆうり",
        "meaning": "advantageous"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 158,
    "character": "波",
    "meaning": "wave",
    "readings": "ハ／なみ",
    "example": "今日は海の波が高いです。",
    "exampleMeaning": "The waves are high today.",
    "words": [
      {
        "word": "波",
        "reading": "なみ",
        "meaning": "wave"
      },
      {
        "word": "電波",
        "reading": "でんぱ",
        "meaning": "radio wave"
      },
      {
        "word": "津波",
        "reading": "つなみ",
        "meaning": "tsunami"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 159,
    "character": "板",
    "meaning": "board; plank",
    "readings": "ハン／ いた",
    "example": "先生は黒板に漢字を書きました。",
    "exampleMeaning": "The teacher wrote kanji on the blackboard.",
    "words": [
      {
        "word": "板",
        "reading": "いた",
        "meaning": "board"
      },
      {
        "word": "黒板",
        "reading": "こくばん",
        "meaning": "blackboard"
      },
      {
        "word": "看板",
        "reading": "かんばん",
        "meaning": "signboard"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 160,
    "character": "版",
    "meaning": "edition; printing",
    "readings": "ハン",
    "example": "この本の最新版を購入しました。",
    "exampleMeaning": "I bought the latest edition of this book.",
    "words": [
      {
        "word": "出版",
        "reading": "しゅっぱん",
        "meaning": "publication"
      },
      {
        "word": "初版",
        "reading": "しょはん",
        "meaning": "first edition"
      },
      {
        "word": "最新版",
        "reading": "さいしんばん",
        "meaning": "latest version"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 161,
    "character": "念",
    "meaning": "thought; concern",
    "readings": "ネン",
    "example": "念のため、予約内容を確認しました。",
    "exampleMeaning": "I checked the reservation details just in case.",
    "words": [
      {
        "word": "残念",
        "reading": "ざんねん",
        "meaning": "regrettable"
      },
      {
        "word": "記念",
        "reading": "きねん",
        "meaning": "commemoration"
      },
      {
        "word": "念のため",
        "reading": "ねんのため",
        "meaning": "just in case"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 162,
    "character": "武",
    "meaning": "military; martial arts",
    "readings": "ブ",
    "example": "彼は日本の武道を勉強しています。",
    "exampleMeaning": "He is studying Japanese martial arts.",
    "words": [
      {
        "word": "武道",
        "reading": "ぶどう",
        "meaning": "martial arts"
      },
      {
        "word": "武器",
        "reading": "ぶき",
        "meaning": "weapon"
      },
      {
        "word": "武士",
        "reading": "ぶし",
        "meaning": "samurai"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 163,
    "character": "表",
    "meaning": "surface; express; table",
    "readings": "ヒョウ／おもて",
    "example": "来週、研究結果を発表します。",
    "exampleMeaning": "I will present the research results next week.",
    "words": [
      {
        "word": "表",
        "reading": "おもて",
        "meaning": "front"
      },
      {
        "word": "表現",
        "reading": "ひょうげん",
        "meaning": "expression"
      },
      {
        "word": "発表",
        "reading": "はっぴょう",
        "meaning": "presentation"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 164,
    "character": "命",
    "meaning": "life; order",
    "readings": "メイ／ いのち",
    "example": "健康は命を守るために大切です。",
    "exampleMeaning": "Good health is important for protecting life.",
    "words": [
      {
        "word": "命",
        "reading": "いのち",
        "meaning": "life"
      },
      {
        "word": "命令",
        "reading": "めいれい",
        "meaning": "order"
      },
      {
        "word": "生命",
        "reading": "せいめい",
        "meaning": "life"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 165,
    "character": "放",
    "meaning": "release; let go",
    "readings": "ホウ／ はなす",
    "example": "この番組は毎週日曜日に放送されます。",
    "exampleMeaning": "This program is broadcast every Sunday.",
    "words": [
      {
        "word": "放す",
        "reading": "はなす",
        "meaning": "to release"
      },
      {
        "word": "放送",
        "reading": "ほうそう",
        "meaning": "broadcast"
      },
      {
        "word": "解放",
        "reading": "かいほう",
        "meaning": "liberation"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 166,
    "character": "法",
    "meaning": "law; method",
    "readings": "ホウ",
    "example": "効果的な勉強方法を探しています。",
    "exampleMeaning": "I am looking for an effective study method.",
    "words": [
      {
        "word": "方法",
        "reading": "ほうほう",
        "meaning": "method"
      },
      {
        "word": "法律",
        "reading": "ほうりつ",
        "meaning": "law"
      },
      {
        "word": "文法",
        "reading": "ぶんぽう",
        "meaning": "grammar"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 167,
    "character": "油",
    "meaning": "oil",
    "readings": "ユ／ あぶら",
    "example": "フライパンに少し油を入れてください。",
    "exampleMeaning": "Please put a little oil in the frying pan.",
    "words": [
      {
        "word": "油",
        "reading": "あぶら",
        "meaning": "oil"
      },
      {
        "word": "石油",
        "reading": "せきゆ",
        "meaning": "petroleum"
      },
      {
        "word": "油断",
        "reading": "ゆだん",
        "meaning": "carelessness"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 168,
    "character": "勇",
    "meaning": "courage; bravery",
    "readings": "ユウ／ いさむ",
    "example": "勇気を出して自分の意見を言いました。",
    "exampleMeaning": "I gathered my courage and expressed my opinion.",
    "words": [
      {
        "word": "勇気",
        "reading": "ゆうき",
        "meaning": "courage"
      },
      {
        "word": "勇敢",
        "reading": "ゆうかん",
        "meaning": "brave"
      },
      {
        "word": "勇者",
        "reading": "ゆうしゃ",
        "meaning": "hero"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 169,
    "character": "要",
    "meaning": "need; important",
    "readings": "ヨウ／ いる",
    "example": "申し込みには身分証明書が必要です。",
    "exampleMeaning": "Identification is required for the application.",
    "words": [
      {
        "word": "必要",
        "reading": "ひつよう",
        "meaning": "necessary"
      },
      {
        "word": "重要",
        "reading": "じゅうよう",
        "meaning": "important"
      },
      {
        "word": "要点",
        "reading": "ようてん",
        "meaning": "main point"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 170,
    "character": "負",
    "meaning": "lose; bear; negative",
    "readings": "フ／ まける",
    "example": "試合に負けましたが、よい経験になりました。",
    "exampleMeaning": "We lost the match, but it was a good experience.",
    "words": [
      {
        "word": "負ける",
        "reading": "まける",
        "meaning": "to lose"
      },
      {
        "word": "勝負",
        "reading": "しょうぶ",
        "meaning": "contest"
      },
      {
        "word": "負担",
        "reading": "ふたん",
        "meaning": "burden"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 171,
    "character": "迷",
    "meaning": "get lost; hesitate",
    "readings": "メイ／ まよう",
    "example": "どちらを買うか迷っています。",
    "exampleMeaning": "I cannot decide which one to buy.",
    "words": [
      {
        "word": "迷う",
        "reading": "まよう",
        "meaning": "to hesitate"
      },
      {
        "word": "迷子",
        "reading": "まいご",
        "meaning": "lost child"
      },
      {
        "word": "迷惑",
        "reading": "めいわく",
        "meaning": "trouble"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 172,
    "character": "約",
    "meaning": "promise; approximately",
    "readings": "ヤク",
    "example": "友達と駅で会う約束をしました。",
    "exampleMeaning": "I promised to meet my friend at the station.",
    "words": [
      {
        "word": "約束",
        "reading": "やくそく",
        "meaning": "promise"
      },
      {
        "word": "予約",
        "reading": "よやく",
        "meaning": "reservation"
      },
      {
        "word": "約十人",
        "reading": "やくじゅうにん",
        "meaning": "about ten people"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 173,
    "character": "面",
    "meaning": "face; surface; aspect",
    "readings": "メン／ おもて",
    "example": "来週、会社の面接を受けます。",
    "exampleMeaning": "I will have a company interview next week.",
    "words": [
      {
        "word": "画面",
        "reading": "がめん",
        "meaning": "screen"
      },
      {
        "word": "面接",
        "reading": "めんせつ",
        "meaning": "interview"
      },
      {
        "word": "正面",
        "reading": "しょうめん",
        "meaning": "front"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 174,
    "character": "変",
    "meaning": "change; unusual",
    "readings": "ヘン／ かわる",
    "example": "会議の時間が午後三時に変わりました。",
    "exampleMeaning": "The meeting time changed to 3 p.m.",
    "words": [
      {
        "word": "変わる",
        "reading": "かわる",
        "meaning": "to change"
      },
      {
        "word": "変更",
        "reading": "へんこう",
        "meaning": "change"
      },
      {
        "word": "大変",
        "reading": "たいへん",
        "meaning": "difficult"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 175,
    "character": "飛",
    "meaning": "fly; jump",
    "readings": "ヒ／とぶ",
    "example": "鳥が空を高く飛んでいます。",
    "exampleMeaning": "A bird is flying high in the sky.",
    "words": [
      {
        "word": "飛ぶ",
        "reading": "とぶ",
        "meaning": "to fly"
      },
      {
        "word": "飛行機",
        "reading": "ひこうき",
        "meaning": "airplane"
      },
      {
        "word": "飛び出す",
        "reading": "とびだす",
        "meaning": "to jump out"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 176,
    "character": "美",
    "meaning": "beauty; beautiful",
    "readings": "ビ／ うつく",
    "example": "山の上から美しい景色が見えました。",
    "exampleMeaning": "We saw beautiful scenery from the mountain.",
    "words": [
      {
        "word": "美しい",
        "reading": "うつくしい",
        "meaning": "beautiful"
      },
      {
        "word": "美術館",
        "reading": "びじゅつかん",
        "meaning": "art museum"
      },
      {
        "word": "美人",
        "reading": "びじん",
        "meaning": "beautiful person"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 177,
    "character": "独",
    "meaning": "alone; independent",
    "readings": "ドク",
    "example": "彼は独特な考え方を持っています。",
    "exampleMeaning": "He has a unique way of thinking.",
    "words": [
      {
        "word": "独立",
        "reading": "どくりつ",
        "meaning": "independence"
      },
      {
        "word": "独身",
        "reading": "どくしん",
        "meaning": "unmarried"
      },
      {
        "word": "独特",
        "reading": "どくとく",
        "meaning": "unique"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 178,
    "character": "則",
    "meaning": "rule; principle",
    "readings": "ソク",
    "example": "学校の規則を守ってください。",
    "exampleMeaning": "Please follow the school rules.",
    "words": [
      {
        "word": "規則",
        "reading": "きそく",
        "meaning": "rule"
      },
      {
        "word": "原則",
        "reading": "げんそく",
        "meaning": "principle"
      },
      {
        "word": "法則",
        "reading": "ほうそく",
        "meaning": "law"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 179,
    "character": "相",
    "meaning": "mutual; partner",
    "readings": "ソウ／ あい",
    "example": "困ったときは先生に相談してください。",
    "exampleMeaning": "Please consult your teacher when you have a problem.",
    "words": [
      {
        "word": "相手",
        "reading": "あいて",
        "meaning": "partner"
      },
      {
        "word": "相談",
        "reading": "そうだん",
        "meaning": "consultation"
      },
      {
        "word": "相互",
        "reading": "そうご",
        "meaning": "mutual"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 180,
    "character": "草",
    "meaning": "grass; plant",
    "readings": "ソウ／ くさ",
    "example": "庭の草が長く伸びています。",
    "exampleMeaning": "The grass in the garden has grown long.",
    "words": [
      {
        "word": "草",
        "reading": "くさ",
        "meaning": "grass"
      },
      {
        "word": "草原",
        "reading": "そうげん",
        "meaning": "grassland"
      },
      {
        "word": "雑草",
        "reading": "ざっそう",
        "meaning": "weed"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 181,
    "character": "祖",
    "meaning": "ancestor",
    "readings": "ソ",
    "example": "祖父は毎朝公園を散歩します。",
    "exampleMeaning": "My grandfather walks in the park every morning.",
    "words": [
      {
        "word": "祖父",
        "reading": "そふ",
        "meaning": "grandfather"
      },
      {
        "word": "祖母",
        "reading": "そぼ",
        "meaning": "grandmother"
      },
      {
        "word": "祖先",
        "reading": "そせん",
        "meaning": "ancestor"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 182,
    "character": "信",
    "meaning": "trust; belief; message",
    "readings": "シン",
    "example": "私は彼の言葉を信じています。",
    "exampleMeaning": "I believe his words.",
    "words": [
      {
        "word": "信じる",
        "reading": "しんじる",
        "meaning": "to believe"
      },
      {
        "word": "信用",
        "reading": "しんよう",
        "meaning": "trust"
      },
      {
        "word": "通信",
        "reading": "つうしん",
        "meaning": "communication"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 183,
    "character": "政",
    "meaning": "politics; government",
    "readings": "セイ",
    "example": "政府は新しい政策を発表しました。",
    "exampleMeaning": "The government announced a new policy.",
    "words": [
      {
        "word": "政治",
        "reading": "せいじ",
        "meaning": "politics"
      },
      {
        "word": "政府",
        "reading": "せいふ",
        "meaning": "government"
      },
      {
        "word": "政策",
        "reading": "せいさく",
        "meaning": "policy"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 184,
    "character": "星",
    "meaning": "star",
    "readings": "セイ／ ほし",
    "example": "今夜は空にたくさんの星が見えます。",
    "exampleMeaning": "Many stars can be seen in the sky tonight.",
    "words": [
      {
        "word": "星",
        "reading": "ほし",
        "meaning": "star"
      },
      {
        "word": "惑星",
        "reading": "わくせい",
        "meaning": "planet"
      },
      {
        "word": "火星",
        "reading": "かせい",
        "meaning": "Mars"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 185,
    "character": "点",
    "meaning": "point; mark",
    "readings": "テン",
    "example": "テストで九十点を取りました。",
    "exampleMeaning": "I scored 90 points on the test.",
    "words": [
      {
        "word": "点",
        "reading": "てん",
        "meaning": "point"
      },
      {
        "word": "点数",
        "reading": "てんすう",
        "meaning": "score"
      },
      {
        "word": "欠点",
        "reading": "けってん",
        "meaning": "weak point"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 186,
    "character": "追",
    "meaning": "chase; follow",
    "readings": "ツイ／ おう",
    "example": "注文に飲み物を追加しました。",
    "exampleMeaning": "I added a drink to the order.",
    "words": [
      {
        "word": "追う",
        "reading": "おう",
        "meaning": "to chase"
      },
      {
        "word": "追加",
        "reading": "ついか",
        "meaning": "addition"
      },
      {
        "word": "追いつく",
        "reading": "おいつく",
        "meaning": "to catch up"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 187,
    "character": "単",
    "meaning": "single; simple",
    "readings": "タン",
    "example": "この問題は思ったより簡単でした。",
    "exampleMeaning": "This problem was easier than expected.",
    "words": [
      {
        "word": "簡単",
        "reading": "かんたん",
        "meaning": "simple"
      },
      {
        "word": "単語",
        "reading": "たんご",
        "meaning": "word"
      },
      {
        "word": "単純",
        "reading": "たんじゅん",
        "meaning": "straightforward"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 188,
    "character": "炭",
    "meaning": "charcoal; coal",
    "readings": "タン／ すみ",
    "example": "肉を炭火で焼きました。",
    "exampleMeaning": "We grilled the meat over charcoal.",
    "words": [
      {
        "word": "炭",
        "reading": "すみ",
        "meaning": "charcoal"
      },
      {
        "word": "石炭",
        "reading": "せきたん",
        "meaning": "coal"
      },
      {
        "word": "炭火",
        "reading": "すみび",
        "meaning": "charcoal fire"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 189,
    "character": "退",
    "meaning": "retreat; leave",
    "readings": "タイ",
    "example": "父は昨日病院を退院しました。",
    "exampleMeaning": "My father left the hospital yesterday.",
    "words": [
      {
        "word": "退院",
        "reading": "たいいん",
        "meaning": "leave hospital"
      },
      {
        "word": "退職",
        "reading": "たいしょく",
        "meaning": "retirement"
      },
      {
        "word": "早退",
        "reading": "そうたい",
        "meaning": "leave early"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 190,
    "character": "栄",
    "meaning": "prosperity; glory",
    "readings": "エイ／ さかえる",
    "example": "この地域は貿易によって栄えました。",
    "exampleMeaning": "This region prospered through trade.",
    "words": [
      {
        "word": "栄える",
        "reading": "さかえる",
        "meaning": "to prosper"
      },
      {
        "word": "栄養",
        "reading": "えいよう",
        "meaning": "nutrition"
      },
      {
        "word": "光栄",
        "reading": "こうえい",
        "meaning": "honor"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 191,
    "character": "科",
    "meaning": "department; subject",
    "readings": "カ",
    "example": "私が一番好きな教科は科学です。",
    "exampleMeaning": "Science is my favorite school subject.",
    "words": [
      {
        "word": "科学",
        "reading": "かがく",
        "meaning": "science"
      },
      {
        "word": "教科",
        "reading": "きょうか",
        "meaning": "school subject"
      },
      {
        "word": "外科",
        "reading": "げか",
        "meaning": "surgery"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 192,
    "character": "活",
    "meaning": "active; life",
    "readings": "カツ",
    "example": "学校では多くの活動に参加しています。",
    "exampleMeaning": "I participate in many activities at school.",
    "words": [
      {
        "word": "生活",
        "reading": "せいかつ",
        "meaning": "daily life"
      },
      {
        "word": "活動",
        "reading": "かつどう",
        "meaning": "activity"
      },
      {
        "word": "活用",
        "reading": "かつよう",
        "meaning": "practical use"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 193,
    "character": "胃",
    "meaning": "stomach",
    "readings": "イ",
    "example": "食べすぎて胃が痛くなりました。",
    "exampleMeaning": "My stomach hurt because I ate too much.",
    "words": [
      {
        "word": "胃",
        "reading": "い",
        "meaning": "stomach"
      },
      {
        "word": "胃痛",
        "reading": "いつう",
        "meaning": "stomachache"
      },
      {
        "word": "胃薬",
        "reading": "いぐすり",
        "meaning": "stomach medicine"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 194,
    "character": "級",
    "meaning": "grade; level",
    "readings": "キュウ",
    "example": "この教科書は中級の学生向けです。",
    "exampleMeaning": "This textbook is intended for intermediate students.",
    "words": [
      {
        "word": "初級",
        "reading": "しょきゅう",
        "meaning": "beginner level"
      },
      {
        "word": "上級",
        "reading": "じょうきゅう",
        "meaning": "advanced level"
      },
      {
        "word": "同級生",
        "reading": "どうきゅうせい",
        "meaning": "classmate"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 195,
    "character": "軍",
    "meaning": "army; military",
    "readings": "グン",
    "example": "その博物館には昔の軍服が展示されています。",
    "exampleMeaning": "Old military uniforms are displayed in the museum.",
    "words": [
      {
        "word": "軍",
        "reading": "ぐん",
        "meaning": "army"
      },
      {
        "word": "軍隊",
        "reading": "ぐんたい",
        "meaning": "armed forces"
      },
      {
        "word": "将軍",
        "reading": "しょうぐん",
        "meaning": "shogun"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 196,
    "character": "係",
    "meaning": "relation; person in charge",
    "readings": "ケイ／ かかり",
    "example": "詳しくは受付の係員に聞いてください。",
    "exampleMeaning": "Please ask the receptionist for details.",
    "words": [
      {
        "word": "係",
        "reading": "かかり",
        "meaning": "person in charge"
      },
      {
        "word": "関係",
        "reading": "かんけい",
        "meaning": "relationship"
      },
      {
        "word": "係員",
        "reading": "かかりいん",
        "meaning": "attendant"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 197,
    "character": "型",
    "meaning": "type; model",
    "readings": "ケイ／ かた",
    "example": "新型のスマートフォンが発売されました。",
    "exampleMeaning": "A new smartphone model was released.",
    "words": [
      {
        "word": "型",
        "reading": "かた",
        "meaning": "model"
      },
      {
        "word": "大型",
        "reading": "おおがた",
        "meaning": "large-sized"
      },
      {
        "word": "新型",
        "reading": "しんがた",
        "meaning": "new model"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 198,
    "character": "客",
    "meaning": "guest; customer",
    "readings": "キャク",
    "example": "店には多くの客が来ていました。",
    "exampleMeaning": "Many customers came to the store.",
    "words": [
      {
        "word": "客",
        "reading": "きゃく",
        "meaning": "guest"
      },
      {
        "word": "観客",
        "reading": "かんきゃく",
        "meaning": "audience"
      },
      {
        "word": "乗客",
        "reading": "じょうきゃく",
        "meaning": "passenger"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 199,
    "character": "逆",
    "meaning": "reverse; opposite",
    "readings": "ギャク／ さか",
    "example": "電車が逆方向へ進んでいることに気づきました。",
    "exampleMeaning": "I realized the train was going in the opposite direction.",
    "words": [
      {
        "word": "逆",
        "reading": "ぎゃく",
        "meaning": "reverse"
      },
      {
        "word": "逆方向",
        "reading": "ぎゃくほうこう",
        "meaning": "opposite direction"
      },
      {
        "word": "逆らう",
        "reading": "さからう",
        "meaning": "to resist"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 200,
    "character": "限",
    "meaning": "limit; restrict",
    "readings": "ゲン／ かぎる",
    "example": "申し込みの期限は金曜日です。",
    "exampleMeaning": "The application deadline is Friday.",
    "words": [
      {
        "word": "限る",
        "reading": "かぎる",
        "meaning": "to limit"
      },
      {
        "word": "制限",
        "reading": "せいげん",
        "meaning": "restriction"
      },
      {
        "word": "期限",
        "reading": "きげん",
        "meaning": "deadline"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 201,
    "character": "厚",
    "meaning": "thick; kind",
    "readings": "コウ／ あつい",
    "example": "この辞書はとても厚いです。",
    "exampleMeaning": "This dictionary is very thick.",
    "words": [
      {
        "word": "厚い",
        "reading": "あつい",
        "meaning": "thick"
      },
      {
        "word": "厚さ",
        "reading": "あつさ",
        "meaning": "thickness"
      },
      {
        "word": "温厚",
        "reading": "おんこう",
        "meaning": "gentle"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 202,
    "character": "指",
    "meaning": "finger; point; indicate",
    "readings": "シ／ ゆび",
    "example": "先生の指示に従ってください。",
    "exampleMeaning": "Please follow the teacher’s instructions.",
    "words": [
      {
        "word": "指",
        "reading": "ゆび",
        "meaning": "finger"
      },
      {
        "word": "指示",
        "reading": "しじ",
        "meaning": "instruction"
      },
      {
        "word": "指定",
        "reading": "してい",
        "meaning": "designation"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 203,
    "character": "昨",
    "meaning": "previous; yesterday",
    "readings": "サク",
    "example": "昨年、日本へ旅行しました。",
    "exampleMeaning": "I traveled to Japan last year.",
    "words": [
      {
        "word": "昨日",
        "reading": "きのう",
        "meaning": "yesterday"
      },
      {
        "word": "昨夜",
        "reading": "さくや",
        "meaning": "last night"
      },
      {
        "word": "昨年",
        "reading": "さくねん",
        "meaning": "last year"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 204,
    "character": "祝",
    "meaning": "celebrate; congratulate",
    "readings": "シュク／ いわう",
    "example": "家族で母の誕生日を祝いました。",
    "exampleMeaning": "Our family celebrated my mother’s birthday.",
    "words": [
      {
        "word": "祝う",
        "reading": "いわう",
        "meaning": "to celebrate"
      },
      {
        "word": "祝日",
        "reading": "しゅくじつ",
        "meaning": "public holiday"
      },
      {
        "word": "お祝い",
        "reading": "おいわい",
        "meaning": "celebration"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 205,
    "character": "神",
    "meaning": "god; spirit",
    "readings": "シン／かみ",
    "example": "京都で有名な神社を訪れました。",
    "exampleMeaning": "I visited a famous shrine in Kyoto.",
    "words": [
      {
        "word": "神",
        "reading": "かみ",
        "meaning": "god"
      },
      {
        "word": "神社",
        "reading": "じんじゃ",
        "meaning": "Shinto shrine"
      },
      {
        "word": "神様",
        "reading": "かみさま",
        "meaning": "deity"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 206,
    "character": "査",
    "meaning": "investigate; inspect",
    "readings": "サ",
    "example": "会社は利用者への調査を行いました。",
    "exampleMeaning": "The company conducted a survey of its users.",
    "words": [
      {
        "word": "調査",
        "reading": "ちょうさ",
        "meaning": "investigation"
      },
      {
        "word": "検査",
        "reading": "けんさ",
        "meaning": "examination"
      },
      {
        "word": "審査",
        "reading": "しんさ",
        "meaning": "evaluation"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 207,
    "character": "省",
    "meaning": "ministry; omit; reflect",
    "readings": "セイ／ はぶく",
    "example": "時間がないので、詳しい説明を省きます。",
    "exampleMeaning": "Since there is little time, I will omit the detailed explanation.",
    "words": [
      {
        "word": "省く",
        "reading": "はぶく",
        "meaning": "to omit"
      },
      {
        "word": "省略",
        "reading": "しょうりゃく",
        "meaning": "abbreviation"
      },
      {
        "word": "反省",
        "reading": "はんせい",
        "meaning": "reflection"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 208,
    "character": "酒",
    "meaning": "alcohol; sake",
    "readings": "シュ／ さけ",
    "example": "この料理には日本酒が使われています。",
    "exampleMeaning": "Japanese sake is used in this dish.",
    "words": [
      {
        "word": "酒",
        "reading": "さけ",
        "meaning": "alcohol"
      },
      {
        "word": "日本酒",
        "reading": "にほんしゅ",
        "meaning": "Japanese sake"
      },
      {
        "word": "居酒屋",
        "reading": "いざかや",
        "meaning": "Japanese pub"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 209,
    "character": "笑",
    "meaning": "laugh; smile",
    "readings": "ショウ／ わらう",
    "example": "彼女はいつも笑顔で話します。",
    "exampleMeaning": "She always speaks with a smile.",
    "words": [
      {
        "word": "笑う",
        "reading": "わらう",
        "meaning": "to laugh"
      },
      {
        "word": "笑顔",
        "reading": "えがお",
        "meaning": "smile"
      },
      {
        "word": "微笑む",
        "reading": "ほほえむ",
        "meaning": "to smile"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 210,
    "character": "消",
    "meaning": "disappear; extinguish",
    "readings": "ショウ／ きえる",
    "example": "部屋を出る前に電気を消してください。",
    "exampleMeaning": "Please turn off the light before leaving the room.",
    "words": [
      {
        "word": "消える",
        "reading": "きえる",
        "meaning": "to disappear"
      },
      {
        "word": "消す",
        "reading": "けす",
        "meaning": "to turn off"
      },
      {
        "word": "消防車",
        "reading": "しょうぼうしゃ",
        "meaning": "fire engine"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 211,
    "character": "師",
    "meaning": "teacher; expert",
    "readings": "シ",
    "example": "将来、日本語教師になりたいです。",
    "exampleMeaning": "I want to become a Japanese teacher in the future.",
    "words": [
      {
        "word": "教師",
        "reading": "きょうし",
        "meaning": "teacher"
      },
      {
        "word": "医師",
        "reading": "いし",
        "meaning": "doctor"
      },
      {
        "word": "美容師",
        "reading": "びようし",
        "meaning": "hairdresser"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 212,
    "character": "財",
    "meaning": "wealth; property",
    "readings": "ザイ",
    "example": "電車の中で財布を落としてしまいました。",
    "exampleMeaning": "I accidentally dropped my wallet on the train.",
    "words": [
      {
        "word": "財布",
        "reading": "さいふ",
        "meaning": "wallet"
      },
      {
        "word": "財産",
        "reading": "ざいさん",
        "meaning": "property"
      },
      {
        "word": "財政",
        "reading": "ざいせい",
        "meaning": "finances"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 213,
    "character": "殺",
    "meaning": "kill; reduce",
    "readings": "サツ／ ころす",
    "example": "この機械は細菌を殺すために使われます。",
    "exampleMeaning": "This machine is used to kill bacteria.",
    "words": [
      {
        "word": "殺す",
        "reading": "ころす",
        "meaning": "to kill"
      },
      {
        "word": "殺人",
        "reading": "さつじん",
        "meaning": "murder"
      },
      {
        "word": "殺菌",
        "reading": "さっきん",
        "meaning": "sterilization"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 214,
    "character": "差",
    "meaning": "difference; gap",
    "readings": "サ／さ",
    "example": "東京とロンドンには大きな時差があります。",
    "exampleMeaning": "There is a large time difference between Tokyo and London.",
    "words": [
      {
        "word": "差",
        "reading": "さ",
        "meaning": "difference"
      },
      {
        "word": "時差",
        "reading": "じさ",
        "meaning": "time difference"
      },
      {
        "word": "差別",
        "reading": "さべつ",
        "meaning": "discrimination"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 215,
    "character": "残",
    "meaning": "remain; leave behind",
    "readings": "ザン／ のこる",
    "example": "冷蔵庫にケーキが一つ残っています。",
    "exampleMeaning": "One piece of cake rema",
    "words": [
      {
        "word": "残る",
        "reading": "のこる",
        "meaning": "to remain"
      },
      {
        "word": "残す",
        "reading": "のこす",
        "meaning": "to leave"
      },
      {
        "word": "残業",
        "reading": "ざんぎょう",
        "meaning": "overtime"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 216,
    "character": "航",
    "meaning": "navigation; aviation",
    "readings": "コウ",
    "example": "オンラインで航空券を予約しました。",
    "exampleMeaning": "I booked a plane ticket online.",
    "words": [
      {
        "word": "航空",
        "reading": "こうくう",
        "meaning": "aviation"
      },
      {
        "word": "航空券",
        "reading": "こうくうけん",
        "meaning": "plane ticket"
      },
      {
        "word": "航海",
        "reading": "こうかい",
        "meaning": "voyage"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 217,
    "character": "根",
    "meaning": "root; basis",
    "readings": "コン／ね",
    "example": "木の根が道の上まで伸びています。",
    "exampleMeaning": "The tree roots extend onto the path.",
    "words": [
      {
        "word": "根",
        "reading": "ね",
        "meaning": "root"
      },
      {
        "word": "根本",
        "reading": "こんぽん",
        "meaning": "foundation"
      },
      {
        "word": "屋根",
        "reading": "やね",
        "meaning": "roof"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 218,
    "character": "個",
    "meaning": "individual; counter",
    "readings": "コ",
    "example": "りんごを三個買いました。",
    "exampleMeaning": "I bought three apples.",
    "words": [
      {
        "word": "個人",
        "reading": "こじん",
        "meaning": "individual"
      },
      {
        "word": "個性",
        "reading": "こせい",
        "meaning": "individuality"
      },
      {
        "word": "一個",
        "reading": "いっこ",
        "meaning": "one item"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 219,
    "character": "候",
    "meaning": "climate; sign; candidate",
    "readings": "コウ",
    "example": "この地域は一年中温暖な気候です。",
    "exampleMeaning": "This region has a warm climate throughout the year.",
    "words": [
      {
        "word": "気候",
        "reading": "きこう",
        "meaning": "climate"
      },
      {
        "word": "候補",
        "reading": "こうほ",
        "meaning": "candidate"
      },
      {
        "word": "天候",
        "reading": "てんこう",
        "meaning": "weather"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 220,
    "character": "庫",
    "meaning": "storage; warehouse",
    "readings": "コ／くら",
    "example": "牛乳は冷蔵庫に入れてください。",
    "exampleMeaning": "Please put the milk in the refrigerator.",
    "words": [
      {
        "word": "倉庫",
        "reading": "そうこ",
        "meaning": "warehouse"
      },
      {
        "word": "車庫",
        "reading": "しゃこ",
        "meaning": "garage"
      },
      {
        "word": "冷蔵庫",
        "reading": "れいぞうこ",
        "meaning": "refrigerator"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 221,
    "character": "記",
    "meaning": "record; write down",
    "readings": "キ",
    "example": "毎晩、短い日記を書いています。",
    "exampleMeaning": "I write a short diary entry every night.",
    "words": [
      {
        "word": "記録",
        "reading": "きろく",
        "meaning": "record"
      },
      {
        "word": "記事",
        "reading": "きじ",
        "meaning": "article"
      },
      {
        "word": "日記",
        "reading": "にっき",
        "meaning": "diary"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 222,
    "character": "訓",
    "meaning": "instruction; Japanese reading",
    "readings": "クン",
    "example": "避難訓練が来週行われます。",
    "exampleMeaning": "An evacuation drill will be held next week.",
    "words": [
      {
        "word": "訓練",
        "reading": "くんれん",
        "meaning": "training"
      },
      {
        "word": "教訓",
        "reading": "きょうくん",
        "meaning": "lesson"
      },
      {
        "word": "訓読み",
        "reading": "くんよみ",
        "meaning": "kun-reading"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 223,
    "character": "害",
    "meaning": "harm; damage",
    "readings": "ガイ",
    "example": "台風による被害が広がっています。",
    "exampleMeaning": "Damage caused by the typhoon is spreading.",
    "words": [
      {
        "word": "被害",
        "reading": "ひがい",
        "meaning": "damage"
      },
      {
        "word": "害",
        "reading": "がい",
        "meaning": "harm"
      },
      {
        "word": "公害",
        "reading": "こうがい",
        "meaning": "pollution"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 224,
    "character": "格",
    "meaning": "status; standard; character",
    "readings": "カク",
    "example": "日本語の試験に合格しました。",
    "exampleMeaning": "I passed the Japanese examination.",
    "words": [
      {
        "word": "資格",
        "reading": "しかく",
        "meaning": "qualification"
      },
      {
        "word": "性格",
        "reading": "せいかく",
        "meaning": "personality"
      },
      {
        "word": "合格",
        "reading": "ごうかく",
        "meaning": "passing"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 225,
    "character": "荷",
    "meaning": "luggage; load",
    "readings": "カ／に",
    "example": "大きな荷物をホテルに送りました。",
    "exampleMeaning": "I sent the large luggage to the hotel.",
    "words": [
      {
        "word": "荷物",
        "reading": "にもつ",
        "meaning": "luggage"
      },
      {
        "word": "入荷",
        "reading": "にゅうか",
        "meaning": "arrival of goods"
      },
      {
        "word": "出荷",
        "reading": "しゅっか",
        "meaning": "shipment"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 226,
    "character": "帯",
    "meaning": "belt; zone; carry",
    "readings": "タイ",
    "example": "携帯電話を家に忘れました。",
    "exampleMeaning": "I left my mobile phone at home.",
    "words": [
      {
        "word": "地帯",
        "reading": "ちたい",
        "meaning": "zone"
      },
      {
        "word": "携帯電話",
        "reading": "けいたいでんわ",
        "meaning": "mobile phone"
      },
      {
        "word": "温帯",
        "reading": "おんたい",
        "meaning": "temperate zone"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 227,
    "character": "島",
    "meaning": "island",
    "readings": "トウ／しま",
    "example": "夏休みに小さな島を訪れました。",
    "exampleMeaning": "I visited a small island during summer vacation.",
    "words": [
      {
        "word": "島",
        "reading": "しま",
        "meaning": "island"
      },
      {
        "word": "半島",
        "reading": "はんとう",
        "meaning": "peninsula"
      },
      {
        "word": "無人島",
        "reading": "むじんとう",
        "meaning": "uninhabited island"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 228,
    "character": "庭",
    "meaning": "garden; yard",
    "readings": "テイ／にわ",
    "example": "庭にきれいな花が咲いています。",
    "exampleMeaning": "Beautiful flowers are blooming in the garden.",
    "words": [
      {
        "word": "庭",
        "reading": "にわ",
        "meaning": "garden"
      },
      {
        "word": "家庭",
        "reading": "かてい",
        "meaning": "household"
      },
      {
        "word": "中庭",
        "reading": "なかにわ",
        "meaning": "courtyard"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 229,
    "character": "徒",
    "meaning": "follower; on foot",
    "readings": "ト",
    "example": "駅から学校まで徒歩で十分です。",
    "exampleMeaning": "It takes ten minutes to walk from the station to the school.",
    "words": [
      {
        "word": "生徒",
        "reading": "せいと",
        "meaning": "student"
      },
      {
        "word": "徒歩",
        "reading": "とほ",
        "meaning": "on foot"
      },
      {
        "word": "徒競走",
        "reading": "ときょうそう",
        "meaning": "foot race"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 230,
    "character": "席",
    "meaning": "seat; place",
    "readings": "セキ",
    "example": "窓の近くの席に座りました。",
    "exampleMeaning": "I sat in a seat near the window.",
    "words": [
      {
        "word": "席",
        "reading": "せき",
        "meaning": "seat"
      },
      {
        "word": "出席",
        "reading": "しゅっせき",
        "meaning": "attendance"
      },
      {
        "word": "欠席",
        "reading": "けっせき",
        "meaning": "absence"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 231,
    "character": "息",
    "meaning": "breath; son",
    "readings": "ソク／いき",
    "example": "階段を上って息が切れました。",
    "exampleMeaning": "I became out of breath after climbing the stairs.",
    "words": [
      {
        "word": "息",
        "reading": "いき",
        "meaning": "breath"
      },
      {
        "word": "息子",
        "reading": "むすこ",
        "meaning": "son"
      },
      {
        "word": "休息",
        "reading": "きゅうそく",
        "meaning": "rest"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 232,
    "character": "造",
    "meaning": "make; construct",
    "readings": "ゾウ／つく",
    "example": "この工場では自動車を製造しています。",
    "exampleMeaning": "This factory manufactures cars.",
    "words": [
      {
        "word": "造る",
        "reading": "つくる",
        "meaning": "to make"
      },
      {
        "word": "製造",
        "reading": "せいぞう",
        "meaning": "manufacturing"
      },
      {
        "word": "木造",
        "reading": "もくぞう",
        "meaning": "wooden"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 233,
    "character": "孫",
    "meaning": "grandchild",
    "readings": "ソン／まご",
    "example": "祖母は孫と遊ぶのを楽しみにしています。",
    "exampleMeaning": "My grandmother looks forward to playing with her grandchild.",
    "words": [
      {
        "word": "孫",
        "reading": "まご",
        "meaning": "grandchild"
      },
      {
        "word": "子孫",
        "reading": "しそん",
        "meaning": "descendants"
      },
      {
        "word": "孫娘",
        "reading": "まごむすめ",
        "meaning": "granddaughter"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 234,
    "character": "速",
    "meaning": "fast; speed",
    "readings": "ソク／はや",
    "example": "この電車は普通電車より速いです。",
    "exampleMeaning": "This train is faster than the local train.",
    "words": [
      {
        "word": "速い",
        "reading": "はやい",
        "meaning": "fast"
      },
      {
        "word": "速度",
        "reading": "そくど",
        "meaning": "speed"
      },
      {
        "word": "高速道路",
        "reading": "こうそくどうろ",
        "meaning": "expressway"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 235,
    "character": "能",
    "meaning": "ability; function",
    "readings": "ノウ",
    "example": "このアプリには便利な機能があります。",
    "exampleMeaning": "This application has useful functions.",
    "words": [
      {
        "word": "能力",
        "reading": "のうりょく",
        "meaning": "ability"
      },
      {
        "word": "可能",
        "reading": "かのう",
        "meaning": "possible"
      },
      {
        "word": "機能",
        "reading": "きのう",
        "meaning": "function"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 236,
    "character": "配",
    "meaning": "distribute; arrange",
    "readings": "ハイ／くば",
    "example": "先生が学生に資料を配りました。",
    "exampleMeaning": "The teacher distributed the materials to the students.",
    "words": [
      {
        "word": "配る",
        "reading": "くばる",
        "meaning": "to distribute"
      },
      {
        "word": "心配",
        "reading": "しんぱい",
        "meaning": "worry"
      },
      {
        "word": "配達",
        "reading": "はいたつ",
        "meaning": "delivery"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 237,
    "character": "倍",
    "meaning": "double; multiple",
    "readings": "バイ",
    "example": "去年より売上が二倍になりました。",
    "exampleMeaning": "Sales doubled compared with last year.",
    "words": [
      {
        "word": "二倍",
        "reading": "にばい",
        "meaning": "twice"
      },
      {
        "word": "倍率",
        "reading": "ばいりつ",
        "meaning": "ratio"
      },
      {
        "word": "倍増",
        "reading": "ばいぞう",
        "meaning": "doubling"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 238,
    "character": "破",
    "meaning": "tear; break",
    "readings": "ハ／やぶる",
    "example": "古い紙が簡単に破れてしまいました。",
    "exampleMeaning": "The old paper tore easily.",
    "words": [
      {
        "word": "破る",
        "reading": "やぶる",
        "meaning": "to tear"
      },
      {
        "word": "破れる",
        "reading": "やぶれる",
        "meaning": "to be torn"
      },
      {
        "word": "突破",
        "reading": "とっぱ",
        "meaning": "breakthrough"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 239,
    "character": "馬",
    "meaning": "horse",
    "readings": "バ／うま",
    "example": "牧場で初めて馬に乗りました。",
    "exampleMeaning": "I rode a horse for the first time at the farm.",
    "words": [
      {
        "word": "馬",
        "reading": "うま",
        "meaning": "horse"
      },
      {
        "word": "競馬",
        "reading": "けいば",
        "meaning": "horse racing"
      },
      {
        "word": "馬車",
        "reading": "ばしゃ",
        "meaning": "horse-drawn carriage"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 240,
    "character": "浴",
    "meaning": "bathe; shower",
    "readings": "ヨク／あび",
    "example": "運動の後でシャワーを浴びました。",
    "exampleMeaning": "I took a shower after exercising.",
    "words": [
      {
        "word": "浴びる",
        "reading": "あびる",
        "meaning": "to bathe"
      },
      {
        "word": "浴室",
        "reading": "よくしつ",
        "meaning": "bathroom"
      },
      {
        "word": "海水浴",
        "reading": "かいすいよく",
        "meaning": "sea bathing"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 241,
    "character": "容",
    "meaning": "contain; appearance",
    "readings": "ヨウ",
    "example": "メールの内容を確認してください。",
    "exampleMeaning": "Please check the contents of the email.",
    "words": [
      {
        "word": "内容",
        "reading": "ないよう",
        "meaning": "contents"
      },
      {
        "word": "容易",
        "reading": "ようい",
        "meaning": "easy"
      },
      {
        "word": "容器",
        "reading": "ようき",
        "meaning": "container"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 242,
    "character": "流",
    "meaning": "flow; style",
    "readings": "リュウ／ なが",
    "example": "川の水がゆっくり流れています。",
    "exampleMeaning": "The river water is flowing slowly.",
    "words": [
      {
        "word": "流れる",
        "reading": "ながれる",
        "meaning": "to flow"
      },
      {
        "word": "流行",
        "reading": "りゅうこう",
        "meaning": "trend"
      },
      {
        "word": "一流",
        "reading": "いちりゅう",
        "meaning": "first-class"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 243,
    "character": "留",
    "meaning": "stay; keep",
    "readings": "リュウ／とめ",
    "example": "来年、日本へ留学する予定です。",
    "exampleMeaning": "I plan to study in Japan next year.",
    "words": [
      {
        "word": "留学",
        "reading": "りゅうがく",
        "meaning": "studying abroad"
      },
      {
        "word": "留守",
        "reading": "るす",
        "meaning": "absence"
      },
      {
        "word": "保留",
        "reading": "ほりゅう",
        "meaning": "hold"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 244,
    "character": "連",
    "meaning": "connect; accompany",
    "readings": "レン／ つれ",
    "example": "到着したら家族に連絡してください。",
    "exampleMeaning": "Please contact your family when you arrive.",
    "words": [
      {
        "word": "連絡",
        "reading": "れんらく",
        "meaning": "contact"
      },
      {
        "word": "連続",
        "reading": "れんぞく",
        "meaning": "continuation"
      },
      {
        "word": "連れて行く",
        "reading": "つれていく",
        "meaning": "to take along"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 245,
    "character": "陸",
    "meaning": "land",
    "readings": "リク",
    "example": "船はゆっくり陸に近づきました。",
    "exampleMeaning": "The ship slowly approached the land.",
    "words": [
      {
        "word": "陸",
        "reading": "りく",
        "meaning": "land"
      },
      {
        "word": "大陸",
        "reading": "たいりく",
        "meaning": "continent"
      },
      {
        "word": "陸上",
        "reading": "りくじょう",
        "meaning": "athletics"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 246,
    "character": "率",
    "meaning": "rate; proportion",
    "readings": "リツ",
    "example": "作業の効率を上げる必要があります。",
    "exampleMeaning": "We need to improve work efficiency.",
    "words": [
      {
        "word": "確率",
        "reading": "かくりつ",
        "meaning": "probability"
      },
      {
        "word": "効率",
        "reading": "こうりつ",
        "meaning": "efficiency"
      },
      {
        "word": "率",
        "reading": "りつ",
        "meaning": "rate"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 247,
    "character": "略",
    "meaning": "abbreviation; omit",
    "readings": "リャク",
    "example": "長い会社名を三文字に省略しました。",
    "exampleMeaning": "We abbreviated the long company name to three characters.",
    "words": [
      {
        "word": "省略",
        "reading": "しょうりゃく",
        "meaning": "omission"
      },
      {
        "word": "略す",
        "reading": "りゃくす",
        "meaning": "to abbreviate"
      },
      {
        "word": "戦略",
        "reading": "せんりゃく",
        "meaning": "strategy"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 248,
    "character": "望",
    "meaning": "hope; desire; view",
    "readings": "ボウ／ のぞ",
    "example": "多くの学生が海外留学を望んでいます。",
    "exampleMeaning": "Many students hope to study abroad.",
    "words": [
      {
        "word": "希望",
        "reading": "きぼう",
        "meaning": "hope"
      },
      {
        "word": "望む",
        "reading": "のぞむ",
        "meaning": "to desire"
      },
      {
        "word": "展望",
        "reading": "てんぼう",
        "meaning": "outlook"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 249,
    "character": "務",
    "meaning": "duty; work",
    "readings": "ム／ つと",
    "example": "兄は東京の会社に勤務しています。",
    "exampleMeaning": "My older brother works for a company in Tokyo.",
    "words": [
      {
        "word": "事務",
        "reading": "じむ",
        "meaning": "office work"
      },
      {
        "word": "勤務",
        "reading": "きんむ",
        "meaning": "work"
      },
      {
        "word": "義務",
        "reading": "ぎむ",
        "meaning": "duty"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 250,
    "character": "敗",
    "meaning": "defeat; failure",
    "readings": "ハイ／やぶ",
    "example": "失敗しても、もう一度挑戦することが大切です。",
    "exampleMeaning": "Even if you fail, it is important to try again.",
    "words": [
      {
        "word": "失敗",
        "reading": "しっぱい",
        "meaning": "failure"
      },
      {
        "word": "敗北",
        "reading": "はいぼく",
        "meaning": "defeat"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 251,
    "character": "部",
    "meaning": "section; department; part",
    "readings": "ブ",
    "example": "この部分をもう一度説明してください。",
    "exampleMeaning": "Please explain this part again.",
    "words": [
      {
        "word": "部分",
        "reading": "ぶぶん",
        "meaning": "part"
      },
      {
        "word": "部屋",
        "reading": "へや",
        "meaning": "room"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 252,
    "character": "副",
    "meaning": "assistant; secondary; vice-",
    "readings": "フク",
    "example": "この薬には眠くなる副作用があります。",
    "exampleMeaning": "This medicine has a side effect that causes drowsiness.",
    "words": [
      {
        "word": "副社長",
        "reading": "ふくしゃちょう",
        "meaning": "vice president"
      },
      {
        "word": "副作用",
        "reading": "ふくさよう",
        "meaning": "side effect"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 253,
    "character": "婦",
    "meaning": "woman; wife",
    "readings": "フ",
    "example": "あの夫婦は結婚して二十年になります。",
    "exampleMeaning": "That couple has been married for twenty years.",
    "words": [
      {
        "word": "主婦",
        "reading": "しゅふ",
        "meaning": "homemaker"
      },
      {
        "word": "夫婦",
        "reading": "ふうふ",
        "meaning": "married couple"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 254,
    "character": "側",
    "meaning": "side; nearby",
    "readings": "がわ・そば",
    "example": "駅は道路の反対側にあります。",
    "exampleMeaning": "The station is on the opposite side of the road.",
    "words": [
      {
        "word": "内側",
        "reading": "うちがわ",
        "meaning": "inside"
      },
      {
        "word": "反対側",
        "reading": "はんたいがわ",
        "meaning": "opposite side"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 255,
    "character": "組",
    "meaning": "group; team; assemble",
    "readings": "ソ／くみ",
    "example": "毎週このテレビ番組を見ています。",
    "exampleMeaning": "I watch this television program every week.",
    "words": [
      {
        "word": "番組",
        "reading": "ばんぐみ",
        "meaning": "program"
      },
      {
        "word": "組み合わせ",
        "reading": "くみあわせ",
        "meaning": "combination"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 256,
    "character": "責",
    "meaning": "responsibility; blame",
    "readings": "セキ／せめる",
    "example": "自分の仕事には責任を持ってください。",
    "exampleMeaning": "Please take responsibility for your work.",
    "words": [
      {
        "word": "責任",
        "reading": "せきにん",
        "meaning": "responsibility"
      },
      {
        "word": "責める",
        "reading": "せめる",
        "meaning": "to blame"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 257,
    "character": "接",
    "meaning": "contact; connect",
    "readings": "セツ／つぐ",
    "example": "明日、新しい会社の面接を受けます。",
    "exampleMeaning": "I will have an interview with a new company tomorrow.",
    "words": [
      {
        "word": "面接",
        "reading": "めんせつ",
        "meaning": "interview"
      },
      {
        "word": "接続",
        "reading": "せつぞく",
        "meaning": "connection"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 258,
    "character": "船",
    "meaning": "ship; boat",
    "readings": "セン／ふね",
    "example": "島まで船で二時間かかります。",
    "exampleMeaning": "It takes two hours to reach the island by boat.",
    "words": [
      {
        "word": "船",
        "reading": "ふね",
        "meaning": "ship"
      },
      {
        "word": "船員",
        "reading": "せんいん",
        "meaning": "crew member"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 259,
    "character": "商",
    "meaning": "commerce; business",
    "readings": "ショウ",
    "example": "この店では日本の商品を販売しています。",
    "exampleMeaning": "This store sells Japanese products.",
    "words": [
      {
        "word": "商品",
        "reading": "しょうひん",
        "meaning": "product"
      },
      {
        "word": "商売",
        "reading": "しょうばい",
        "meaning": "business"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 260,
    "character": "設",
    "meaning": "establish; install",
    "readings": "セツ／ もうける",
    "example": "アプリの言語設定を変更しました。",
    "exampleMeaning": "I changed the application’s language setting.",
    "words": [
      {
        "word": "設定",
        "reading": "せってい",
        "meaning": "setting"
      },
      {
        "word": "設備",
        "reading": "せつび",
        "meaning": "equipment"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 261,
    "character": "雪",
    "meaning": "snow",
    "readings": "セツ／ゆき",
    "example": "昨夜から雪が降り続いています。",
    "exampleMeaning": "It has continued snowing since last night.",
    "words": [
      {
        "word": "雪",
        "reading": "ゆき",
        "meaning": "snow"
      },
      {
        "word": "大雪",
        "reading": "おおゆき",
        "meaning": "heavy snow"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 262,
    "character": "清",
    "meaning": "clean; pure",
    "readings": "セイ／きよい",
    "example": "部屋をいつも清潔に保っています。",
    "exampleMeaning": "I always keep the room clean.",
    "words": [
      {
        "word": "清潔",
        "reading": "せいけつ",
        "meaning": "clean"
      },
      {
        "word": "清掃",
        "reading": "せいそう",
        "meaning": "cleaning"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 263,
    "character": "深",
    "meaning": "deep; profound",
    "readings": "シン／ふかい",
    "example": "この湖はとても深いそうです。",
    "exampleMeaning": "This lake is said to be very deep.",
    "words": [
      {
        "word": "深い",
        "reading": "ふかい",
        "meaning": "deep"
      },
      {
        "word": "深刻",
        "reading": "しんこく",
        "meaning": "serious"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 264,
    "character": "得",
    "meaning": "obtain; gain; benefit",
    "readings": "トク／える",
    "example": "私は料理が得意ではありません。",
    "exampleMeaning": "I am not good at cooking.",
    "words": [
      {
        "word": "得意",
        "reading": "とくい",
        "meaning": "good at"
      },
      {
        "word": "納得",
        "reading": "なっとく",
        "meaning": "understanding"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 265,
    "character": "第",
    "meaning": "order; number",
    "readings": "ダイ",
    "example": "安全を第一に考えてください。",
    "exampleMeaning": "Please consider safety first.",
    "words": [
      {
        "word": "第一",
        "reading": "だいいち",
        "meaning": "first"
      },
      {
        "word": "次第",
        "reading": "しだい",
        "meaning": "depending on"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 266,
    "character": "停",
    "meaning": "stop; halt",
    "readings": "テイ／と",
    "example": "電車が事故のため停止しています。",
    "exampleMeaning": "The train has stopped because of an accident.",
    "words": [
      {
        "word": "停止",
        "reading": "ていし",
        "meaning": "stop"
      },
      {
        "word": "停車",
        "reading": "ていしゃ",
        "meaning": "stopping a vehicle"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 267,
    "character": "断",
    "meaning": "cut off; refuse; decide",
    "readings": "ダン／ことわ",
    "example": "忙しかったので、彼のお願いを断りました。",
    "exampleMeaning": "I was busy, so I declined his request.",
    "words": [
      {
        "word": "断る",
        "reading": "ことわる",
        "meaning": "to refuse"
      },
      {
        "word": "判断",
        "reading": "はんだん",
        "meaning": "judgment"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 268,
    "character": "貨",
    "meaning": "goods; currency",
    "readings": "カ",
    "example": "この列車は貨物を運んでいます。",
    "exampleMeaning": "This train transports freight.",
    "words": [
      {
        "word": "貨物",
        "reading": "かもつ",
        "meaning": "freight"
      },
      {
        "word": "通貨",
        "reading": "つうか",
        "meaning": "currency"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 269,
    "character": "液",
    "meaning": "liquid; fluid",
    "readings": "エキ",
    "example": "この容器には透明な液体が入っています。",
    "exampleMeaning": "This container holds a clear liquid.",
    "words": [
      {
        "word": "液体",
        "reading": "えきたい",
        "meaning": "liquid"
      },
      {
        "word": "血液",
        "reading": "けつえき",
        "meaning": "blood"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 270,
    "character": "移",
    "meaning": "move; transfer",
    "readings": "イ／うつ",
    "example": "会議を別の部屋に移しました。",
    "exampleMeaning": "We moved the meeting to another room.",
    "words": [
      {
        "word": "移動",
        "reading": "いどう",
        "meaning": "movement"
      },
      {
        "word": "移す",
        "reading": "うつす",
        "meaning": "to move"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 271,
    "character": "経",
    "meaning": "pass through; manage",
    "readings": "ケイ／ へる・たつ",
    "example": "海外で働いた経験があります。",
    "exampleMeaning": "I have experience working abroad.",
    "words": [
      {
        "word": "経験",
        "reading": "けいけん",
        "meaning": "experience"
      },
      {
        "word": "経済",
        "reading": "けいざい",
        "meaning": "economy"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 272,
    "character": "規",
    "meaning": "rule; standard",
    "readings": "キ",
    "example": "学校の規則を守らなければなりません。",
    "exampleMeaning": "You must follow the school rules.",
    "words": [
      {
        "word": "規則",
        "reading": "きそく",
        "meaning": "rule"
      },
      {
        "word": "規模",
        "reading": "きぼ",
        "meaning": "scale"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 273,
    "character": "寄",
    "meaning": "approach; stop by; contribute",
    "readings": "キ／よ",
    "example": "仕事の帰りにスーパーへ寄りました。",
    "exampleMeaning": "I stopped by the supermarket on my way home from work.",
    "words": [
      {
        "word": "寄る",
        "reading": "よる",
        "meaning": "to stop by"
      },
      {
        "word": "寄付",
        "reading": "きふ",
        "meaning": "donation"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 274,
    "character": "許",
    "meaning": "permit; forgive",
    "readings": "キョ／ゆる",
    "example": "ここで写真を撮るには許可が必要です。",
    "exampleMeaning": "Permission is required to take photographs here.",
    "words": [
      {
        "word": "許可",
        "reading": "きょか",
        "meaning": "permission"
      },
      {
        "word": "許す",
        "reading": "ゆるす",
        "meaning": "to forgive"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 275,
    "character": "球",
    "meaning": "ball; sphere",
    "readings": "キュウ／たま",
    "example": "弟は毎週日曜日に野球をしています。",
    "exampleMeaning": "My younger brother plays baseball every Sunday.",
    "words": [
      {
        "word": "野球",
        "reading": "やきゅう",
        "meaning": "baseball"
      },
      {
        "word": "地球",
        "reading": "ちきゅう",
        "meaning": "Earth"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 276,
    "character": "救",
    "meaning": "save; rescue",
    "readings": "キュウ／ すく",
    "example": "救急車がすぐに到着しました。",
    "exampleMeaning": "The ambulance arrived immediately.",
    "words": [
      {
        "word": "救う",
        "reading": "すくう",
        "meaning": "to save"
      },
      {
        "word": "救急車",
        "reading": "きゅうきゅうしゃ",
        "meaning": "ambulance"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 277,
    "character": "険",
    "meaning": "dangerous; steep",
    "readings": "ケン／ けわしい",
    "example": "この道は夜になると危険です。",
    "exampleMeaning": "This road is dangerous at night.",
    "words": [
      {
        "word": "危険",
        "reading": "きけん",
        "meaning": "danger"
      },
      {
        "word": "保険",
        "reading": "ほけん",
        "meaning": "insurance"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 278,
    "character": "現",
    "meaning": "present; appear",
    "readings": "ゲン／あらわ",
    "example": "現在、このサービスは利用できません。",
    "exampleMeaning": "This service is currently unavailable.",
    "words": [
      {
        "word": "現在",
        "reading": "げんざい",
        "meaning": "present"
      },
      {
        "word": "現れる",
        "reading": "あらわれる",
        "meaning": "to appear"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 279,
    "character": "混",
    "meaning": "mix; become crowded",
    "readings": "コン／ま",
    "example": "朝の電車は非常に混雑しています。",
    "exampleMeaning": "The morning train is extremely crowded.",
    "words": [
      {
        "word": "混雑",
        "reading": "こんざつ",
        "meaning": "congestion"
      },
      {
        "word": "混ぜる",
        "reading": "まぜる",
        "meaning": "to mix"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 280,
    "character": "祭",
    "meaning": "festival; worship",
    "readings": "サイ／まつり",
    "example": "夏祭りで花火を見ました。",
    "exampleMeaning": "I watched fireworks at the summer festival.",
    "words": [
      {
        "word": "祭り",
        "reading": "まつり",
        "meaning": "festival"
      },
      {
        "word": "文化祭",
        "reading": "ぶんかさい",
        "meaning": "school festival"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 281,
    "character": "細",
    "meaning": "thin; detailed; small",
    "readings": "サイ／ほそ こまかい",
    "example": "細かい説明まで読んでください。",
    "exampleMeaning": "Please read even the detailed explanation.",
    "words": [
      {
        "word": "細かい",
        "reading": "こまかい",
        "meaning": "detailed"
      },
      {
        "word": "細い",
        "reading": "ほそい",
        "meaning": "thin"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 282,
    "character": "術",
    "meaning": "technique; art; method",
    "readings": "ジュツ",
    "example": "新しい技術が開発されました。",
    "exampleMeaning": "New technology was developed.",
    "words": [
      {
        "word": "技術",
        "reading": "ぎじゅつ",
        "meaning": "technology"
      },
      {
        "word": "手術",
        "reading": "しゅじゅつ",
        "meaning": "surgery"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 283,
    "character": "宿",
    "meaning": "lodging; inn",
    "readings": "シュク／ やど",
    "example": "京都のホテルに二泊しました。",
    "exampleMeaning": "I stayed at a hotel in Kyoto for two nights.",
    "words": [
      {
        "word": "宿泊",
        "reading": "しゅくはく",
        "meaning": "lodging"
      },
      {
        "word": "宿題",
        "reading": "しゅくだい",
        "meaning": "homework"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 284,
    "character": "章",
    "meaning": "chapter; section",
    "readings": "ショウ",
    "example": "この文章を読んで質問に答えてください。",
    "exampleMeaning": "Read this passage and answer the questions.",
    "words": [
      {
        "word": "文章",
        "reading": "ぶんしょう",
        "meaning": "text"
      },
      {
        "word": "第一章",
        "reading": "だいいっしょう",
        "meaning": "Chapter One"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 285,
    "character": "常",
    "meaning": "usual; normal; constant",
    "readings": "ジョウ／ つね",
    "example": "通常、この店は午後九時に閉まります。",
    "exampleMeaning": "This store normally closes at 9 p.m.",
    "words": [
      {
        "word": "通常",
        "reading": "つうじょう",
        "meaning": "normally"
      },
      {
        "word": "日常",
        "reading": "にちじょう",
        "meaning": "daily life"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 286,
    "character": "情",
    "meaning": "feeling; information",
    "readings": "ジョウ／ なさけ",
    "example": "詳しい情報はウェブサイトで確認できます。",
    "exampleMeaning": "Detailed information is available on the website.",
    "words": [
      {
        "word": "情報",
        "reading": "じょうほう",
        "meaning": "information"
      },
      {
        "word": "感情",
        "reading": "かんじょう",
        "meaning": "emotion"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 287,
    "character": "植",
    "meaning": "plant; grow",
    "readings": "ショク／ うえる",
    "example": "庭に新しい木を植えました。",
    "exampleMeaning": "I planted a new tree in the garden.",
    "words": [
      {
        "word": "植物",
        "reading": "しょくぶつ",
        "meaning": "plant"
      },
      {
        "word": "植える",
        "reading": "うえる",
        "meaning": "to plant"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 288,
    "character": "順",
    "meaning": "order; sequence",
    "readings": "ジュン",
    "example": "名前を順番に呼びます。",
    "exampleMeaning": "I will call the names in order.",
    "words": [
      {
        "word": "順番",
        "reading": "じゅんばん",
        "meaning": "order"
      },
      {
        "word": "順調",
        "reading": "じゅんちょう",
        "meaning": "going smoothly"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 289,
    "character": "象",
    "meaning": "elephant; image; phenomenon",
    "readings": "ショウ・ ゾウ",
    "example": "彼はとても良い印象を与えました。",
    "exampleMeaning": "He made a very good impression.",
    "words": [
      {
        "word": "印象",
        "reading": "いんしょう",
        "meaning": "impression"
      },
      {
        "word": "対象",
        "reading": "たいしょう",
        "meaning": "target"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 290,
    "character": "焼",
    "meaning": "burn; bake; grill",
    "readings": "ショウ／や",
    "example": "オーブンでパンを焼きました。",
    "exampleMeaning": "I baked bread in the oven.",
    "words": [
      {
        "word": "焼く",
        "reading": "やく",
        "meaning": "to grill"
      },
      {
        "word": "焼肉",
        "reading": "やきにく",
        "meaning": "grilled meat"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 291,
    "character": "勝",
    "meaning": "win; victory",
    "readings": "ショウ／かつ",
    "example": "私たちのチームが試合に勝ちました。",
    "exampleMeaning": "Our team won the match.",
    "words": [
      {
        "word": "勝つ",
        "reading": "かつ",
        "meaning": "to win"
      },
      {
        "word": "勝利",
        "reading": "しょうり",
        "meaning": "victory"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 292,
    "character": "歯",
    "meaning": "tooth",
    "readings": "シ／は",
    "example": "毎食後に歯を磨いています。",
    "exampleMeaning": "I brush my teeth after every meal.",
    "words": [
      {
        "word": "歯医者",
        "reading": "はいしゃ",
        "meaning": "dentist"
      },
      {
        "word": "歯ブラシ",
        "reading": "はブラシ",
        "meaning": "toothbrush"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 293,
    "character": "最",
    "meaning": "most; greatest",
    "readings": "サイ／ もっとも",
    "example": "最近、日本語のニュースを読み始めました。",
    "exampleMeaning": "I recently started reading Japanese news.",
    "words": [
      {
        "word": "最近",
        "reading": "さいきん",
        "meaning": "recently"
      },
      {
        "word": "最後",
        "reading": "さいご",
        "meaning": "last"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 294,
    "character": "散",
    "meaning": "scatter; disperse",
    "readings": "サン／ちる・ちらす",
    "example": "夕食の後で公園を散歩しました。",
    "exampleMeaning": "I took a walk in the park after dinner.",
    "words": [
      {
        "word": "散歩",
        "reading": "さんぽ",
        "meaning": "walk"
      },
      {
        "word": "解散",
        "reading": "かいさん",
        "meaning": "dissolution"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 295,
    "character": "港",
    "meaning": "port; harbor",
    "readings": "コウ／みなと",
    "example": "空港には出発の二時間前に着きました。",
    "exampleMeaning": "I arrived at the airport two hours before departure.",
    "words": [
      {
        "word": "港",
        "reading": "みなと",
        "meaning": "harbor"
      },
      {
        "word": "空港",
        "reading": "くうこう",
        "meaning": "airport"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 296,
    "character": "検",
    "meaning": "inspect; examine",
    "readings": "ケン",
    "example": "病院で詳しい検査を受けました。",
    "exampleMeaning": "I underwent a detailed examination at the hospital.",
    "words": [
      {
        "word": "検査",
        "reading": "けんさ",
        "meaning": "examination"
      },
      {
        "word": "点検",
        "reading": "てんけん",
        "meaning": "inspection"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 297,
    "character": "湖",
    "meaning": "lake",
    "readings": "コ／みずうみ",
    "example": "湖の近くでキャンプをしました。",
    "exampleMeaning": "We camped near the lake.",
    "words": [
      {
        "word": "湖",
        "reading": "みずうみ",
        "meaning": "lake"
      },
      {
        "word": "湖畔",
        "reading": "こはん",
        "meaning": "lakeside"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 298,
    "character": "期",
    "meaning": "period; term; expectation",
    "readings": "キ",
    "example": "申し込みの期限は今月末です。",
    "exampleMeaning": "The application deadline is the end of this month.",
    "words": [
      {
        "word": "期間",
        "reading": "きかん",
        "meaning": "period"
      },
      {
        "word": "期限",
        "reading": "きげん",
        "meaning": "deadline"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 299,
    "character": "喜",
    "meaning": "rejoice; be pleased",
    "readings": "キ／よろこぶ",
    "example": "母はプレゼントをとても喜びました。",
    "exampleMeaning": "My mother was very pleased with the present.",
    "words": [
      {
        "word": "喜ぶ",
        "reading": "よろこぶ",
        "meaning": "to be pleased"
      },
      {
        "word": "喜び",
        "reading": "よろこび",
        "meaning": "joy"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 300,
    "character": "結",
    "meaning": "tie; connect; conclude",
    "readings": "ケツ／むすぶ",
    "example": "試験の結果は来週発表されます。",
    "exampleMeaning": "The examination results will be announced next week.",
    "words": [
      {
        "word": "結婚",
        "reading": "けっこん",
        "meaning": "marriage"
      },
      {
        "word": "結果",
        "reading": "けっか",
        "meaning": "result"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 301,
    "character": "景",
    "meaning": "scenery; scene",
    "readings": "ケイ",
    "example": "山の上から美しい景色が見えます。",
    "exampleMeaning": "Beautiful scenery can be seen from the mountain.",
    "words": [
      {
        "word": "景色",
        "reading": "けしき",
        "meaning": "scenery"
      },
      {
        "word": "背景",
        "reading": "はいけい",
        "meaning": "background"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 302,
    "character": "給",
    "meaning": "supply; provide; salary",
    "readings": "キュウ",
    "example": "給料は毎月二十五日に支払われます。",
    "exampleMeaning": "Salaries are paid on the twenty-fifth of every month.",
    "words": [
      {
        "word": "給料",
        "reading": "きゅうりょう",
        "meaning": "salary"
      },
      {
        "word": "支給",
        "reading": "しきゅう",
        "meaning": "provision"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 303,
    "character": "雲",
    "meaning": "cloud",
    "readings": "ウン／くも",
    "example": "空に黒い雲が広がっています。",
    "exampleMeaning": "Dark clouds are spreading across the sky.",
    "words": [
      {
        "word": "雲",
        "reading": "くも",
        "meaning": "cloud"
      },
      {
        "word": "雲海",
        "reading": "うんかい",
        "meaning": "sea of clouds"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 304,
    "character": "営",
    "meaning": "operate; manage; business",
    "readings": "エイ／いとなむ",
    "example": "この店は午前十時から営業しています。",
    "exampleMeaning": "This store is open for business from 10 a.m.",
    "words": [
      {
        "word": "営業",
        "reading": "えいぎょう",
        "meaning": "business operations"
      },
      {
        "word": "営む",
        "reading": "いとなむ",
        "meaning": "to operate"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 305,
    "character": "温",
    "meaning": "warm; temperature",
    "readings": "オン／あたたかい",
    "example": "冬休みに温泉へ行きました。",
    "exampleMeaning": "I went to a hot spring during winter vacation.",
    "words": [
      {
        "word": "温度",
        "reading": "おんど",
        "meaning": "temperature"
      },
      {
        "word": "温泉",
        "reading": "おんせん",
        "meaning": "hot spring"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 306,
    "character": "過",
    "meaning": "pass; exceed; spend time",
    "readings": "カ／すぎる・すごす",
    "example": "京都で楽しい休日を過ごしました。",
    "exampleMeaning": "I spent an enjoyable holiday in Kyoto.",
    "words": [
      {
        "word": "過去",
        "reading": "かこ",
        "meaning": "past"
      },
      {
        "word": "過ぎる",
        "reading": "すぎる",
        "meaning": "to pass"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 307,
    "character": "絵",
    "meaning": "picture; painting",
    "readings": "カイ・エ",
    "example": "子どもに絵本を読んであげました。",
    "exampleMeaning": "I read a picture book to the child.",
    "words": [
      {
        "word": "絵",
        "reading": "え",
        "meaning": "picture"
      },
      {
        "word": "絵本",
        "reading": "えほん",
        "meaning": "picture book"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 308,
    "character": "階",
    "meaning": "floor; level; stairs",
    "readings": "カイ",
    "example": "会議室は建物の三階にあります。",
    "exampleMeaning": "The meeting room is on the third floor.",
    "words": [
      {
        "word": "階段",
        "reading": "かいだん",
        "meaning": "stairs"
      },
      {
        "word": "二階",
        "reading": "にかい",
        "meaning": "second floor"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 309,
    "character": "達",
    "meaning": "reach; plural suffix",
    "readings": "タツ／たち",
    "example": "週末に友達と映画を見ました。",
    "exampleMeaning": "I watched a movie with my friend over the weekend.",
    "words": [
      {
        "word": "友達",
        "reading": "ともだち",
        "meaning": "friend"
      },
      {
        "word": "到達",
        "reading": "とうたつ",
        "meaning": "arrival"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 310,
    "character": "覚",
    "meaning": "remember; awaken",
    "readings": "カク／おぼ",
    "example": "毎日、新しい単語を十個覚えています。",
    "exampleMeaning": "I learn ten new words every day.",
    "words": [
      {
        "word": "覚える",
        "reading": "おぼえる",
        "meaning": "to remember"
      },
      {
        "word": "感覚",
        "reading": "かんかく",
        "meaning": "sense"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 311,
    "character": "貯",
    "meaning": "save; store",
    "readings": "チョ／ためる",
    "example": "旅行のために毎月お金を貯めています。",
    "exampleMeaning": "I save money every month for travel.",
    "words": [
      {
        "word": "貯金",
        "reading": "ちょきん",
        "meaning": "savings"
      },
      {
        "word": "貯める",
        "reading": "ためる",
        "meaning": "to save"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 312,
    "character": "測",
    "meaning": "measure; estimate",
    "readings": "ソク／はかる",
    "example": "毎朝、体温を測っています。",
    "exampleMeaning": "I measure my temperature every morning.",
    "words": [
      {
        "word": "測る",
        "reading": "はかる",
        "meaning": "to measure"
      },
      {
        "word": "予測",
        "reading": "よそく",
        "meaning": "prediction"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 313,
    "character": "童",
    "meaning": "child; juvenile",
    "readings": "ドウ／わらべ",
    "example": "この本には有名な童話が入っています。",
    "exampleMeaning": "This book contains famous children’s stories.",
    "words": [
      {
        "word": "児童",
        "reading": "じどう",
        "meaning": "child"
      },
      {
        "word": "童話",
        "reading": "どうわ",
        "meaning": "children’s story"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 314,
    "character": "等",
    "meaning": "equal; class; and so on",
    "readings": "トウ／ ひとしい",
    "example": "二つの商品は品質がほぼ同等です。",
    "exampleMeaning": "The two products are almost equal in quality.",
    "words": [
      {
        "word": "同等",
        "reading": "どうとう",
        "meaning": "equal"
      },
      {
        "word": "等しい",
        "reading": "ひとしい",
        "meaning": "equivalent"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 315,
    "character": "湯",
    "meaning": "hot water",
    "readings": "トウ／ゆ",
    "example": "カップにお湯を入れてください。",
    "exampleMeaning": "Please pour hot water into the cup.",
    "words": [
      {
        "word": "お湯",
        "reading": "おゆ",
        "meaning": "hot water"
      },
      {
        "word": "湯気",
        "reading": "ゆげ",
        "meaning": "steam"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 316,
    "character": "登",
    "meaning": "climb; register",
    "readings": "トウ／のぼる",
    "example": "ウェブサイトで会員登録をしました。",
    "exampleMeaning": "I registered as a member on the website.",
    "words": [
      {
        "word": "登山",
        "reading": "とざん",
        "meaning": "mountain climbing"
      },
      {
        "word": "登録",
        "reading": "とうろく",
        "meaning": "registration"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 317,
    "character": "程",
    "meaning": "degree; extent",
    "readings": "テイ／ほど",
    "example": "旅行の日程を確認してください。",
    "exampleMeaning": "Please check the travel schedule.",
    "words": [
      {
        "word": "程度",
        "reading": "ていど",
        "meaning": "degree"
      },
      {
        "word": "日程",
        "reading": "にってい",
        "meaning": "schedule"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 318,
    "character": "絶",
    "meaning": "cut off; absolute",
    "readings": "ゼツ／たえる・たつ",
    "example": "明日の約束を絶対に忘れないでください。",
    "exampleMeaning": "Do not forget tomorrow’s appointment under any circumstances.",
    "words": [
      {
        "word": "絶対",
        "reading": "ぜったい",
        "meaning": "absolutely"
      },
      {
        "word": "絶望",
        "reading": "ぜつぼう",
        "meaning": "despair"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 319,
    "character": "然",
    "meaning": "natural; so",
    "readings": "ゼン",
    "example": "この地域には美しい自然が残っています。",
    "exampleMeaning": "Beautiful nature remains in this area.",
    "words": [
      {
        "word": "自然",
        "reading": "しぜん",
        "meaning": "nature"
      },
      {
        "word": "当然",
        "reading": "とうぜん",
        "meaning": "naturally"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 320,
    "character": "富",
    "meaning": "wealth; abundance",
    "readings": "フ／とむ・とみ",
    "example": "この店は商品の種類が豊富です。",
    "exampleMeaning": "This store has a wide variety of products.",
    "words": [
      {
        "word": "豊富",
        "reading": "ほうふ",
        "meaning": "abundant"
      },
      {
        "word": "富",
        "reading": "とみ",
        "meaning": "wealth"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 321,
    "character": "復",
    "meaning": "return; restore; repeat",
    "readings": "フク",
    "example": "授業の内容を家で復習しました。",
    "exampleMeaning": "I reviewed the lesson content at home.",
    "words": [
      {
        "word": "復習",
        "reading": "ふくしゅう",
        "meaning": "review"
      },
      {
        "word": "回復",
        "reading": "かいふく",
        "meaning": "recovery"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 322,
    "character": "費",
    "meaning": "expense; spend",
    "readings": "ヒ／ついやす",
    "example": "旅行にはどのくらいの費用がかかりますか。",
    "exampleMeaning": "How much will the trip cost?",
    "words": [
      {
        "word": "費用",
        "reading": "ひよう",
        "meaning": "cost"
      },
      {
        "word": "消費",
        "reading": "しょうひ",
        "meaning": "consumption"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 323,
    "character": "番",
    "meaning": "number; turn; watch",
    "readings": "バン",
    "example": "受付で番号を呼ばれるまで待ってください。",
    "exampleMeaning": "Please wait until your number is called at reception.",
    "words": [
      {
        "word": "番号",
        "reading": "ばんごう",
        "meaning": "number"
      },
      {
        "word": "当番",
        "reading": "とうばん",
        "meaning": "person on duty"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 324,
    "character": "悲",
    "meaning": "sad; sorrow",
    "readings": "ヒ／かなしい",
    "example": "悲しい知らせを聞きました。",
    "exampleMeaning": "I heard some sad news.",
    "words": [
      {
        "word": "悲しい",
        "reading": "かなしい",
        "meaning": "sad"
      },
      {
        "word": "悲劇",
        "reading": "ひげき",
        "meaning": "tragedy"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 325,
    "character": "筆",
    "meaning": "writing brush; writing",
    "readings": "ヒツ／ふで",
    "example": "答えを鉛筆で書いてください。",
    "exampleMeaning": "Please write your answer in pencil.",
    "words": [
      {
        "word": "鉛筆",
        "reading": "えんぴつ",
        "meaning": "pencil"
      },
      {
        "word": "筆記",
        "reading": "ひっき",
        "meaning": "writing"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 326,
    "character": "備",
    "meaning": "prepare; equip",
    "readings": "ビ／そなえる",
    "example": "明日の会議の資料を準備しました。",
    "exampleMeaning": "I prepared the materials for tomorrow’s meeting.",
    "words": [
      {
        "word": "準備",
        "reading": "じゅんび",
        "meaning": "preparation"
      },
      {
        "word": "設備",
        "reading": "せつび",
        "meaning": "equipment"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 327,
    "character": "貿",
    "meaning": "trade; commerce",
    "readings": "ボウ",
    "example": "父は貿易会社で働いています。",
    "exampleMeaning": "My father works for a trading company.",
    "words": [
      {
        "word": "貿易",
        "reading": "ぼうえき",
        "meaning": "international trade"
      },
      {
        "word": "貿易会社",
        "reading": "ぼうえきがいしゃ",
        "meaning": "trading company"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 328,
    "character": "無",
    "meaning": "nothing; without",
    "readings": "ム・ブ／ない",
    "example": "この博物館は高校生まで無料です。",
    "exampleMeaning": "This museum is free for students through high school.",
    "words": [
      {
        "word": "無料",
        "reading": "むりょう",
        "meaning": "free"
      },
      {
        "word": "無理",
        "reading": "むり",
        "meaning": "unreasonable"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 329,
    "character": "報",
    "meaning": "report; inform; reward",
    "readings": "ホウ／むくいる",
    "example": "調査の結果を上司に報告しました。",
    "exampleMeaning": "I reported the survey results to my supervisor.",
    "words": [
      {
        "word": "報告",
        "reading": "ほうこく",
        "meaning": "report"
      },
      {
        "word": "情報",
        "reading": "じょうほう",
        "meaning": "information"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 330,
    "character": "満",
    "meaning": "full; satisfy",
    "readings": "マン／みちる・みたす",
    "example": "電車は乗客で満員でした。",
    "exampleMeaning": "The train was full of passengers.",
    "words": [
      {
        "word": "満足",
        "reading": "まんぞく",
        "meaning": "satisfaction"
      },
      {
        "word": "満員",
        "reading": "まんいん",
        "meaning": "full capacity"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 331,
    "character": "量",
    "meaning": "quantity; amount",
    "readings": "リョウ／はかる",
    "example": "必要な水の量を測ってください。",
    "exampleMeaning": "Please measure the required amount of water.",
    "words": [
      {
        "word": "数量",
        "reading": "すうりょう",
        "meaning": "quantity"
      },
      {
        "word": "重量",
        "reading": "じゅうりょう",
        "meaning": "weight"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 332,
    "character": "遊",
    "meaning": "play; visit for pleasure",
    "readings": "ユウ／あそぶ",
    "example": "休日に家族と遊園地へ行きました。",
    "exampleMeaning": "I went to an amusement park with my family on my day off.",
    "words": [
      {
        "word": "遊ぶ",
        "reading": "あそぶ",
        "meaning": "to play"
      },
      {
        "word": "遊園地",
        "reading": "ゆうえんち",
        "meaning": "amusement park"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 333,
    "character": "落",
    "meaning": "fall; drop; fail",
    "readings": "ラク／おちる・おとす",
    "example": "木から葉が落ちています。",
    "exampleMeaning": "Leaves are falling from the tree.",
    "words": [
      {
        "word": "落ちる",
        "reading": "おちる",
        "meaning": "to fall"
      },
      {
        "word": "落第",
        "reading": "らくだい",
        "meaning": "failure in a course"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 334,
    "character": "独",
    "meaning": "alone; independent",
    "readings": "ドク／ひとり",
    "example": "彼は大学卒業後に独立しました。",
    "exampleMeaning": "He became independent after graduating from university.",
    "words": [
      {
        "word": "独立",
        "reading": "どくりつ",
        "meaning": "independence"
      },
      {
        "word": "独身",
        "reading": "どくしん",
        "meaning": "unmarried"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 335,
    "character": "陽",
    "meaning": "sun; positive",
    "readings": "ヨウ／ひ",
    "example": "太陽が雲の間から見えてきました。",
    "exampleMeaning": "The sun appeared between the clouds.",
    "words": [
      {
        "word": "太陽",
        "reading": "たいよう",
        "meaning": "sun"
      },
      {
        "word": "陽気",
        "reading": "ようき",
        "meaning": "cheerful"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 336,
    "character": "葉",
    "meaning": "leaf",
    "readings": "ヨウ／は",
    "example": "秋になると木の葉が赤くなります。",
    "exampleMeaning": "Tree leaves turn red in autumn.",
    "words": [
      {
        "word": "葉",
        "reading": "は",
        "meaning": "leaf"
      },
      {
        "word": "言葉",
        "reading": "ことば",
        "meaning": "word"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 337,
    "character": "税",
    "meaning": "tax",
    "readings": "ゼイ",
    "example": "商品の価格には消費税が含まれています。",
    "exampleMeaning": "Consumption tax is included in the product price.",
    "words": [
      {
        "word": "税金",
        "reading": "ぜいきん",
        "meaning": "tax"
      },
      {
        "word": "消費税",
        "reading": "しょうひぜい",
        "meaning": "consumption tax"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 338,
    "character": "路",
    "meaning": "road; route",
    "readings": "ロ／みち",
    "example": "この道路は工事のため通れません。",
    "exampleMeaning": "This road is closed because of construction.",
    "words": [
      {
        "word": "道路",
        "reading": "どうろ",
        "meaning": "road"
      },
      {
        "word": "路線",
        "reading": "ろせん",
        "meaning": "route"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 339,
    "character": "豊",
    "meaning": "rich; abundant",
    "readings": "ホウ／ゆたか",
    "example": "この地域は自然が豊かです。",
    "exampleMeaning": "This area is rich in nature.",
    "words": [
      {
        "word": "豊か",
        "reading": "ゆたか",
        "meaning": "rich"
      },
      {
        "word": "豊富",
        "reading": "ほうふ",
        "meaning": "abundant"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 340,
    "character": "夢",
    "meaning": "dream",
    "readings": "ム／ゆめ",
    "example": "私の夢は日本で働くことです。",
    "exampleMeaning": "My dream is to work in Japan.",
    "words": [
      {
        "word": "夢",
        "reading": "ゆめ",
        "meaning": "dream"
      },
      {
        "word": "夢中",
        "reading": "むちゅう",
        "meaning": "absorbed"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 341,
    "character": "農",
    "meaning": "agriculture; farming",
    "readings": "ノウ",
    "example": "この地域では農業が盛んです。",
    "exampleMeaning": "Agriculture is thriving in this region.",
    "words": [
      {
        "word": "農業",
        "reading": "のうぎょう",
        "meaning": "agriculture"
      },
      {
        "word": "農家",
        "reading": "のうか",
        "meaning": "farmer"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 342,
    "character": "続",
    "meaning": "continue; follow",
    "readings": "ゾク／つづく・つづける",
    "example": "雨が三日間続いています。",
    "exampleMeaning": "It has been raining for three consecutive days.",
    "words": [
      {
        "word": "続く",
        "reading": "つづく",
        "meaning": "to continue"
      },
      {
        "word": "連続",
        "reading": "れんぞく",
        "meaning": "consecutive"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 343,
    "character": "損",
    "meaning": "loss; damage",
    "readings": "ソン／そこなう",
    "example": "会社は事故で大きな損失を受けました。",
    "exampleMeaning": "The company suffered a major loss because of the accident.",
    "words": [
      {
        "word": "損失",
        "reading": "そんしつ",
        "meaning": "loss"
      },
      {
        "word": "損害",
        "reading": "そんがい",
        "meaning": "damage"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 344,
    "character": "想",
    "meaning": "thought; idea; imagine",
    "readings": "ソウ／おもう",
    "example": "映画を見た感想を聞かせてください。",
    "exampleMeaning": "Please tell me your thoughts about the movie.",
    "words": [
      {
        "word": "想像",
        "reading": "そうぞう",
        "meaning": "imagination"
      },
      {
        "word": "感想",
        "reading": "かんそう",
        "meaning": "impression"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 345,
    "character": "戦",
    "meaning": "war; battle; compete",
    "readings": "セン／たたかう",
    "example": "新しいことに挑戦したいです。",
    "exampleMeaning": "I want to take on a new challenge.",
    "words": [
      {
        "word": "戦争",
        "reading": "せんそう",
        "meaning": "war"
      },
      {
        "word": "挑戦",
        "reading": "ちょうせん",
        "meaning": "challenge"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 346,
    "character": "勢",
    "meaning": "force; momentum",
    "readings": "セイ／いきおい",
    "example": "チームは試合の後半で勢いを取り戻しました。",
    "exampleMeaning": "The team regained momentum in the second half of the match.",
    "words": [
      {
        "word": "勢い",
        "reading": "いきおい",
        "meaning": "momentum"
      },
      {
        "word": "姿勢",
        "reading": "しせい",
        "meaning": "posture"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 347,
    "character": "数",
    "meaning": "number; count",
    "readings": "スウ／かず・かぞえる",
    "example": "参加する人数を確認してください。",
    "exampleMeaning": "Please confirm the number of participants.",
    "words": [
      {
        "word": "数字",
        "reading": "すうじ",
        "meaning": "numeral"
      },
      {
        "word": "人数",
        "reading": "にんずう",
        "meaning": "number of people"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 348,
    "character": "置",
    "meaning": "place; put",
    "readings": "チ／おく",
    "example": "荷物をこちらに置いてください。",
    "exampleMeaning": "Please place your luggage here.",
    "words": [
      {
        "word": "置く",
        "reading": "おく",
        "meaning": "to place"
      },
      {
        "word": "位置",
        "reading": "いち",
        "meaning": "position"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 349,
    "character": "鉄",
    "meaning": "iron; railway",
    "readings": "テツ",
    "example": "東京では地下鉄をよく利用します。",
    "exampleMeaning": "I often use the subway in Tokyo.",
    "words": [
      {
        "word": "鉄道",
        "reading": "てつどう",
        "meaning": "railway"
      },
      {
        "word": "地下鉄",
        "reading": "ちかてつ",
        "meaning": "subway"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 350,
    "character": "感",
    "meaning": "feeling; sense",
    "readings": "カン",
    "example": "彼の話に深く感動しました。",
    "exampleMeaning": "I was deeply moved by his story.",
    "words": [
      {
        "word": "感じる",
        "reading": "かんじる",
        "meaning": "to feel"
      },
      {
        "word": "感動",
        "reading": "かんどう",
        "meaning": "deep emotion"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 351,
    "character": "解",
    "meaning": "solve; understand",
    "readings": "カイ／とく",
    "example": "この問題の解き方が分かりません。",
    "exampleMeaning": "I do not know how to solve this problem.",
    "words": [
      {
        "word": "理解",
        "reading": "りかい",
        "meaning": "understanding"
      },
      {
        "word": "解決",
        "reading": "かいけつ",
        "meaning": "solution"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 352,
    "character": "園",
    "meaning": "garden; park",
    "readings": "エン／その",
    "example": "休日に家族と動物園へ行きました。",
    "exampleMeaning": "I went to the zoo with my family on my day off.",
    "words": [
      {
        "word": "公園",
        "reading": "こうえん",
        "meaning": "park"
      },
      {
        "word": "動物園",
        "reading": "どうぶつえん",
        "meaning": "zoo"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 353,
    "character": "愛",
    "meaning": "love; affection",
    "readings": "アイ／あい",
    "example": "親の愛は子どもにとって大切です。",
    "exampleMeaning": "Parental love is important for children.",
    "words": [
      {
        "word": "愛情",
        "reading": "あいじょう",
        "meaning": "affection"
      },
      {
        "word": "恋愛",
        "reading": "れんあい",
        "meaning": "romantic love"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 354,
    "character": "塩",
    "meaning": "salt",
    "readings": "エン／しお",
    "example": "スープに塩を少し入れてください。",
    "exampleMeaning": "Please add a little salt to the soup.",
    "words": [
      {
        "word": "塩",
        "reading": "しお",
        "meaning": "salt"
      },
      {
        "word": "食塩",
        "reading": "しょくえん",
        "meaning": "table salt"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 355,
    "character": "極",
    "meaning": "extreme; pole",
    "readings": "キョク／きわめる",
    "example": "北極では冬の気温が非常に低いです。",
    "exampleMeaning": "Winter temperatures are extremely low at the North Pole.",
    "words": [
      {
        "word": "北極",
        "reading": "ほっきょく",
        "meaning": "North Pole"
      },
      {
        "word": "積極的",
        "reading": "せっきょくてき",
        "meaning": "proactive"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 356,
    "character": "逆",
    "meaning": "reverse; opposite",
    "readings": "ギャク／さからう",
    "example": "逆方向の電車に乗ってしまいました。",
    "exampleMeaning": "I accidentally boarded a train going in the opposite direction.",
    "words": [
      {
        "word": "逆方向",
        "reading": "ぎゃくほうこう",
        "meaning": "opposite direction"
      },
      {
        "word": "逆らう",
        "reading": "さからう",
        "meaning": "to resist"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 357,
    "character": "禁",
    "meaning": "prohibit; forbid",
    "readings": "キン",
    "example": "この建物では喫煙が禁止されています。",
    "exampleMeaning": "Smoking is prohibited in this building.",
    "words": [
      {
        "word": "禁止",
        "reading": "きんし",
        "meaning": "prohibition"
      },
      {
        "word": "禁煙",
        "reading": "きんえん",
        "meaning": "no smoking"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 358,
    "character": "罪",
    "meaning": "crime; guilt",
    "readings": "ザイ／つみ",
    "example": "犯罪を防ぐために防犯カメラが設置されています。",
    "exampleMeaning": "Security cameras are installed to prevent crime.",
    "words": [
      {
        "word": "犯罪",
        "reading": "はんざい",
        "meaning": "crime"
      },
      {
        "word": "罪",
        "reading": "つみ",
        "meaning": "guilt or offense"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 359,
    "character": "資",
    "meaning": "resources; capital",
    "readings": "シ",
    "example": "会議の資料をメールで送りました。",
    "exampleMeaning": "I sent the meeting materials by email.",
    "words": [
      {
        "word": "資料",
        "reading": "しりょう",
        "meaning": "materials"
      },
      {
        "word": "資格",
        "reading": "しかく",
        "meaning": "qualification"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 360,
    "character": "準",
    "meaning": "standard; preparation",
    "readings": "ジュン",
    "example": "旅行の準備はもう終わりました。",
    "exampleMeaning": "I have already finished preparing for the trip.",
    "words": [
      {
        "word": "準備",
        "reading": "じゅんび",
        "meaning": "preparation"
      },
      {
        "word": "基準",
        "reading": "きじゅん",
        "meaning": "standard"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 361,
    "character": "種",
    "meaning": "kind; seed",
    "readings": "シュ／たね",
    "example": "この店では多くの種類のパンを売っています。",
    "exampleMeaning": "This store sells many kinds of bread.",
    "words": [
      {
        "word": "種類",
        "reading": "しゅるい",
        "meaning": "type"
      },
      {
        "word": "種",
        "reading": "たね",
        "meaning": "seed"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 362,
    "character": "雑",
    "meaning": "miscellaneous; mixed",
    "readings": "ザツ",
    "example": "この説明は少し複雑です。",
    "exampleMeaning": "This explanation is a little complicated.",
    "words": [
      {
        "word": "雑誌",
        "reading": "ざっし",
        "meaning": "magazine"
      },
      {
        "word": "複雑",
        "reading": "ふくざつ",
        "meaning": "complicated"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 363,
    "character": "際",
    "meaning": "occasion; boundary",
    "readings": "サイ／きわ",
    "example": "海外旅行の際はパスポートが必要です。",
    "exampleMeaning": "A passport is required when traveling abroad.",
    "words": [
      {
        "word": "国際",
        "reading": "こくさい",
        "meaning": "international"
      },
      {
        "word": "実際",
        "reading": "じっさい",
        "meaning": "actual"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 364,
    "character": "算",
    "meaning": "calculate",
    "readings": "サン",
    "example": "旅行に必要な予算を計算しました。",
    "exampleMeaning": "I calculated the budget needed for the trip.",
    "words": [
      {
        "word": "計算",
        "reading": "けいさん",
        "meaning": "calculation"
      },
      {
        "word": "予算",
        "reading": "よさん",
        "meaning": "budget"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 365,
    "character": "察",
    "meaning": "observe; judge",
    "readings": "サツ",
    "example": "子どもの様子をよく観察してください。",
    "exampleMeaning": "Please carefully observe the child’s condition.",
    "words": [
      {
        "word": "観察",
        "reading": "かんさつ",
        "meaning": "observation"
      },
      {
        "word": "警察",
        "reading": "けいさつ",
        "meaning": "police"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 366,
    "character": "構",
    "meaning": "structure; construct",
    "readings": "コウ／かまう",
    "example": "この建物は安全な構造になっています。",
    "exampleMeaning": "This building has a safe structure.",
    "words": [
      {
        "word": "構造",
        "reading": "こうぞう",
        "meaning": "structure"
      },
      {
        "word": "構成",
        "reading": "こうせい",
        "meaning": "composition"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 367,
    "character": "関",
    "meaning": "relation; connection",
    "readings": "カン／かかわる",
    "example": "その問題は私の仕事と関係があります。",
    "exampleMeaning": "That issue is related to my work.",
    "words": [
      {
        "word": "関係",
        "reading": "かんけい",
        "meaning": "relationship"
      },
      {
        "word": "関心",
        "reading": "かんしん",
        "meaning": "interest"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 368,
    "character": "境",
    "meaning": "boundary; environment",
    "readings": "キョウ／さかい",
    "example": "環境を守るためにごみを減らしましょう。",
    "exampleMeaning": "Let us reduce waste to protect the environment.",
    "words": [
      {
        "word": "環境",
        "reading": "かんきょう",
        "meaning": "environment"
      },
      {
        "word": "国境",
        "reading": "こっきょう",
        "meaning": "national border"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 369,
    "character": "漁",
    "meaning": "fishing",
    "readings": "ギョ",
    "example": "この町では漁業が盛んです。",
    "exampleMeaning": "The fishing industry is active in this town.",
    "words": [
      {
        "word": "漁業",
        "reading": "ぎょぎょう",
        "meaning": "fishing industry"
      },
      {
        "word": "漁師",
        "reading": "りょうし",
        "meaning": "fisherman"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 370,
    "character": "演",
    "meaning": "perform; present",
    "readings": "エン",
    "example": "大学で有名な先生の講演を聞きました。",
    "exampleMeaning": "I attended a lecture by a famous professor at the university.",
    "words": [
      {
        "word": "演奏",
        "reading": "えんそう",
        "meaning": "musical performance"
      },
      {
        "word": "講演",
        "reading": "こうえん",
        "meaning": "lecture"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 371,
    "character": "慣",
    "meaning": "become accustomed",
    "readings": "カン／なれる",
    "example": "新しい生活に少しずつ慣れてきました。",
    "exampleMeaning": "I am gradually getting used to my new life.",
    "words": [
      {
        "word": "慣れる",
        "reading": "なれる",
        "meaning": "to get used to"
      },
      {
        "word": "習慣",
        "reading": "しゅうかん",
        "meaning": "habit"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 372,
    "character": "管",
    "meaning": "manage; pipe",
    "readings": "カン／くだ",
    "example": "個人情報は安全に管理されています。",
    "exampleMeaning": "Personal information is managed securely.",
    "words": [
      {
        "word": "管理",
        "reading": "かんり",
        "meaning": "management"
      },
      {
        "word": "保管",
        "reading": "ほかん",
        "meaning": "storage"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 373,
    "character": "銅",
    "meaning": "copper",
    "readings": "ドウ",
    "example": "公園の中央に大きな銅像があります。",
    "exampleMeaning": "There is a large bronze statue in the center of the park.",
    "words": [
      {
        "word": "銅",
        "reading": "どう",
        "meaning": "copper"
      },
      {
        "word": "銅像",
        "reading": "どうぞう",
        "meaning": "bronze statue"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 374,
    "character": "適",
    "meaning": "suitable; appropriate",
    "readings": "テキ／かなう",
    "example": "この靴は長い旅行に適しています。",
    "exampleMeaning": "These shoes are suitable for a long trip.",
    "words": [
      {
        "word": "適切",
        "reading": "てきせつ",
        "meaning": "appropriate"
      },
      {
        "word": "適する",
        "reading": "てきする",
        "meaning": "to be suitable"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 375,
    "character": "精",
    "meaning": "spirit; refined",
    "readings": "セイ",
    "example": "運動は精神の健康にもよいです。",
    "exampleMeaning": "Exercise is also good for mental health.",
    "words": [
      {
        "word": "精神",
        "reading": "せいしん",
        "meaning": "mind or spirit"
      },
      {
        "word": "精密",
        "reading": "せいみつ",
        "meaning": "precise"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 376,
    "character": "製",
    "meaning": "manufacture; made in",
    "readings": "セイ",
    "example": "この時計は日本製です。",
    "exampleMeaning": "This watch is made in Japan.",
    "words": [
      {
        "word": "製品",
        "reading": "せいひん",
        "meaning": "product"
      },
      {
        "word": "日本製",
        "reading": "にほんせい",
        "meaning": "made in Japan"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 377,
    "character": "静",
    "meaning": "quiet; calm",
    "readings": "セイ／しずか",
    "example": "図書館では静かにしてください。",
    "exampleMeaning": "Please be quiet in the library.",
    "words": [
      {
        "word": "静か",
        "reading": "しずか",
        "meaning": "quiet"
      },
      {
        "word": "冷静",
        "reading": "れいせい",
        "meaning": "calm"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 378,
    "character": "像",
    "meaning": "image; statue",
    "readings": "ゾウ",
    "example": "画面に商品の画像が表示されます。",
    "exampleMeaning": "An image of the product is displayed on the screen.",
    "words": [
      {
        "word": "画像",
        "reading": "がぞう",
        "meaning": "image"
      },
      {
        "word": "仏像",
        "reading": "ぶつぞう",
        "meaning": "Buddhist statue"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 379,
    "character": "増",
    "meaning": "increase",
    "readings": "ゾウ／ふえる",
    "example": "最近、外国人観光客が増えています。",
    "exampleMeaning": "The number of foreign tourists has recently increased.",
    "words": [
      {
        "word": "増える",
        "reading": "ふえる",
        "meaning": "to increase"
      },
      {
        "word": "増加",
        "reading": "ぞうか",
        "meaning": "increase"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 380,
    "character": "総",
    "meaning": "total; general",
    "readings": "ソウ",
    "example": "この病院では総合的な健康診断を受けられます。",
    "exampleMeaning": "You can receive a comprehensive health examination at this hospital.",
    "words": [
      {
        "word": "総合",
        "reading": "そうごう",
        "meaning": "comprehensive"
      },
      {
        "word": "総理",
        "reading": "そうり",
        "meaning": "prime minister"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 381,
    "character": "鼻",
    "meaning": "nose",
    "readings": "ビ／はな",
    "example": "風邪をひいて鼻水が出ます。",
    "exampleMeaning": "I have a runny nose because I caught a cold.",
    "words": [
      {
        "word": "鼻",
        "reading": "はな",
        "meaning": "nose"
      },
      {
        "word": "鼻水",
        "reading": "はなみず",
        "meaning": "runny nose"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 382,
    "character": "複",
    "meaning": "multiple; complex",
    "readings": "フク",
    "example": "複数の答えから一つ選んでください。",
    "exampleMeaning": "Please choose one from the multiple answers.",
    "words": [
      {
        "word": "複雑",
        "reading": "ふくざつ",
        "meaning": "complicated"
      },
      {
        "word": "複数",
        "reading": "ふくすう",
        "meaning": "multiple"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 383,
    "character": "鳴",
    "meaning": "sound; cry",
    "readings": "メイ／なく",
    "example": "朝、鳥が庭で鳴いていました。",
    "exampleMeaning": "Birds were chirping in the garden this morning.",
    "words": [
      {
        "word": "鳴く",
        "reading": "なく",
        "meaning": "to cry or chirp"
      },
      {
        "word": "鳴る",
        "reading": "なる",
        "meaning": "to ring"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 384,
    "character": "綿",
    "meaning": "cotton",
    "readings": "メン／わた",
    "example": "このシャツは綿でできています。",
    "exampleMeaning": "This shirt is made of cotton.",
    "words": [
      {
        "word": "綿",
        "reading": "わた",
        "meaning": "cotton"
      },
      {
        "word": "木綿",
        "reading": "もめん",
        "meaning": "cotton fabric"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 385,
    "character": "様",
    "meaning": "appearance; manner",
    "readings": "ヨウ／さま",
    "example": "駅の様子が以前と大きく変わりました。",
    "exampleMeaning": "The station looks very different from before.",
    "words": [
      {
        "word": "様子",
        "reading": "ようす",
        "meaning": "condition"
      },
      {
        "word": "お客様",
        "reading": "おきゃくさま",
        "meaning": "customer"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 386,
    "character": "領",
    "meaning": "territory; domain",
    "readings": "リョウ",
    "example": "商品を受け取ったら領収書を確認してください。",
    "exampleMeaning": "Check the receipt after receiving the product.",
    "words": [
      {
        "word": "領収書",
        "reading": "りょうしゅうしょ",
        "meaning": "receipt"
      },
      {
        "word": "領域",
        "reading": "りょういき",
        "meaning": "field or domain"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 387,
    "character": "緑",
    "meaning": "green",
    "readings": "リョク／みどり",
    "example": "毎朝、温かい緑茶を飲みます。",
    "exampleMeaning": "I drink warm green tea every morning.",
    "words": [
      {
        "word": "緑",
        "reading": "みどり",
        "meaning": "green"
      },
      {
        "word": "緑茶",
        "reading": "りょくちゃ",
        "meaning": "green tea"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 388,
    "character": "練",
    "meaning": "practice; refine",
    "readings": "レン／ねる",
    "example": "試験の前に会話を何度も練習しました。",
    "exampleMeaning": "I practiced the conversation many times before the examination.",
    "words": [
      {
        "word": "練習",
        "reading": "れんしゅう",
        "meaning": "practice"
      },
      {
        "word": "訓練",
        "reading": "くんれん",
        "meaning": "training"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 389,
    "character": "歴",
    "meaning": "history; career",
    "readings": "レキ",
    "example": "履歴書を会社に提出しました。",
    "exampleMeaning": "I submitted my résumé to the company.",
    "words": [
      {
        "word": "歴史",
        "reading": "れきし",
        "meaning": "history"
      },
      {
        "word": "履歴書",
        "reading": "りれきしょ",
        "meaning": "résumé"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 390,
    "character": "輪",
    "meaning": "ring; wheel",
    "readings": "リン／わ",
    "example": "結婚記念日に妻へ指輪を贈りました。",
    "exampleMeaning": "I gave my wife a ring on our wedding anniversary.",
    "words": [
      {
        "word": "指輪",
        "reading": "ゆびわ",
        "meaning": "ring"
      },
      {
        "word": "車輪",
        "reading": "しゃりん",
        "meaning": "wheel"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 391,
    "character": "編",
    "meaning": "edit; compile; knit",
    "readings": "ヘン／あむ",
    "example": "この記事は編集者が確認しました。",
    "exampleMeaning": "An editor checked this article.",
    "words": [
      {
        "word": "編集",
        "reading": "へんしゅう",
        "meaning": "editing"
      },
      {
        "word": "編む",
        "reading": "あむ",
        "meaning": "to knit"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 392,
    "character": "箱",
    "meaning": "box",
    "readings": "ソウ／はこ",
    "example": "空の箱をごみ箱の隣に置きました。",
    "exampleMeaning": "I placed the empty box beside the trash can.",
    "words": [
      {
        "word": "箱",
        "reading": "はこ",
        "meaning": "box"
      },
      {
        "word": "ごみ箱",
        "reading": "ごみばこ",
        "meaning": "trash can"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 393,
    "character": "熱",
    "meaning": "heat; fever",
    "readings": "ネツ／あつい",
    "example": "昨夜から高い熱があります。",
    "exampleMeaning": "I have had a high fever since last night.",
    "words": [
      {
        "word": "熱",
        "reading": "ねつ",
        "meaning": "fever"
      },
      {
        "word": "熱心",
        "reading": "ねっしん",
        "meaning": "enthusiastic"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 394,
    "character": "選",
    "meaning": "choose; select",
    "readings": "セン／えらぶ",
    "example": "三つの中から好きな色を選んでください。",
    "exampleMeaning": "Please choose your favorite color from the three.",
    "words": [
      {
        "word": "選ぶ",
        "reading": "えらぶ",
        "meaning": "to choose"
      },
      {
        "word": "選手",
        "reading": "せんしゅ",
        "meaning": "athlete"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 395,
    "character": "線",
    "meaning": "line; route",
    "readings": "セン",
    "example": "この路線は空港まで行きます。",
    "exampleMeaning": "This route goes to the airport.",
    "words": [
      {
        "word": "線",
        "reading": "せん",
        "meaning": "line"
      },
      {
        "word": "路線",
        "reading": "ろせん",
        "meaning": "route"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 396,
    "character": "導",
    "meaning": "guide; lead",
    "readings": "ドウ／みちびく",
    "example": "先生が学生を正しい答えへ導きました。",
    "exampleMeaning": "The teacher guided the student toward the correct answer.",
    "words": [
      {
        "word": "指導",
        "reading": "しどう",
        "meaning": "guidance"
      },
      {
        "word": "導く",
        "reading": "みちびく",
        "meaning": "to guide"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 397,
    "character": "談",
    "meaning": "talk; discuss",
    "readings": "ダン",
    "example": "進路について先生に相談しました。",
    "exampleMeaning": "I consulted my teacher about my future path.",
    "words": [
      {
        "word": "相談",
        "reading": "そうだん",
        "meaning": "consultation"
      },
      {
        "word": "会談",
        "reading": "かいだん",
        "meaning": "formal talks"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 398,
    "character": "調",
    "meaning": "investigate; condition",
    "readings": "チョウ／しらべる",
    "example": "分からない言葉を辞書で調べました。",
    "exampleMeaning": "I looked up an unfamiliar word in the dictionary.",
    "words": [
      {
        "word": "調べる",
        "reading": "しらべる",
        "meaning": "to investigate"
      },
      {
        "word": "調査",
        "reading": "ちょうさ",
        "meaning": "survey"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 399,
    "character": "横",
    "meaning": "side; horizontal",
    "readings": "オウ／よこ",
    "example": "横断歩道を渡ってください。",
    "exampleMeaning": "Please cross at the pedestrian crossing.",
    "words": [
      {
        "word": "横",
        "reading": "よこ",
        "meaning": "side"
      },
      {
        "word": "横断歩道",
        "reading": "おうだんほどう",
        "meaning": "pedestrian crossing"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 400,
    "character": "確",
    "meaning": "certain; confirm",
    "readings": "カク／たしか",
    "example": "予約の日付をもう一度確認してください。",
    "exampleMeaning": "Please confirm the reservation date again.",
    "words": [
      {
        "word": "確認",
        "reading": "かくにん",
        "meaning": "confirmation"
      },
      {
        "word": "正確",
        "reading": "せいかく",
        "meaning": "accurate"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 401,
    "character": "課",
    "meaning": "section; lesson",
    "readings": "カ",
    "example": "今日の課題を明日までに提出してください。",
    "exampleMeaning": "Please submit today’s assignment by tomorrow.",
    "words": [
      {
        "word": "課題",
        "reading": "かだい",
        "meaning": "assignment"
      },
      {
        "word": "課長",
        "reading": "かちょう",
        "meaning": "section manager"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 402,
    "character": "器",
    "meaning": "container; instrument",
    "readings": "キ／うつわ",
    "example": "使用した容器はここに戻してください。",
    "exampleMeaning": "Please return the used container here.",
    "words": [
      {
        "word": "容器",
        "reading": "ようき",
        "meaning": "container"
      },
      {
        "word": "楽器",
        "reading": "がっき",
        "meaning": "musical instrument"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 403,
    "character": "賛",
    "meaning": "approve; praise",
    "readings": "サン",
    "example": "私はその提案に賛成です。",
    "exampleMeaning": "I agree with that proposal.",
    "words": [
      {
        "word": "賛成",
        "reading": "さんせい",
        "meaning": "approval"
      },
      {
        "word": "賛否",
        "reading": "さんぴ",
        "meaning": "approval or disapproval"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 404,
    "character": "賞",
    "meaning": "award; prize",
    "readings": "ショウ",
    "example": "彼女は作文大会で賞を取りました。",
    "exampleMeaning": "She won an award in an essay competition.",
    "words": [
      {
        "word": "賞",
        "reading": "しょう",
        "meaning": "award"
      },
      {
        "word": "賞金",
        "reading": "しょうきん",
        "meaning": "prize money"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 405,
    "character": "機",
    "meaning": "machine; opportunity",
    "readings": "キ",
    "example": "新しい機械の使い方を教えてください。",
    "exampleMeaning": "Please teach me how to use the new machine.",
    "words": [
      {
        "word": "機械",
        "reading": "きかい",
        "meaning": "machine"
      },
      {
        "word": "機会",
        "reading": "きかい",
        "meaning": "opportunity"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 406,
    "character": "橋",
    "meaning": "bridge",
    "readings": "キョウ／はし",
    "example": "川に新しい橋が建てられました。",
    "exampleMeaning": "A new bridge was built over the river.",
    "words": [
      {
        "word": "橋",
        "reading": "はし",
        "meaning": "bridge"
      },
      {
        "word": "歩道橋",
        "reading": "ほどうきょう",
        "meaning": "pedestrian bridge"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 407,
    "character": "積",
    "meaning": "accumulate; load",
    "readings": "セキ／つむ",
    "example": "荷物をトラックに積みました。",
    "exampleMeaning": "We loaded the luggage onto the truck.",
    "words": [
      {
        "word": "積む",
        "reading": "つむ",
        "meaning": "to load"
      },
      {
        "word": "面積",
        "reading": "めんせき",
        "meaning": "area"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 408,
    "character": "輸",
    "meaning": "transport; import or export",
    "readings": "ユ",
    "example": "日本は多くの製品を海外へ輸出しています。",
    "exampleMeaning": "Japan exports many products overseas.",
    "words": [
      {
        "word": "輸出",
        "reading": "ゆしゅつ",
        "meaning": "export"
      },
      {
        "word": "輸入",
        "reading": "ゆにゅう",
        "meaning": "import"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 409,
    "character": "録",
    "meaning": "record",
    "readings": "ロク",
    "example": "会議の内容を録音しました。",
    "exampleMeaning": "I recorded the meeting.",
    "words": [
      {
        "word": "記録",
        "reading": "きろく",
        "meaning": "record"
      },
      {
        "word": "録音",
        "reading": "ろくおん",
        "meaning": "audio recording"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 410,
    "character": "績",
    "meaning": "achievement; results",
    "readings": "セキ",
    "example": "今学期の成績が発表されました。",
    "exampleMeaning": "This semester’s grades were announced.",
    "words": [
      {
        "word": "成績",
        "reading": "せいせき",
        "meaning": "grades"
      },
      {
        "word": "実績",
        "reading": "じっせき",
        "meaning": "achievement"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 411,
    "character": "講",
    "meaning": "lecture",
    "readings": "コウ",
    "example": "来月、オンライン講座を受けます。",
    "exampleMeaning": "I will take an online course next month.",
    "words": [
      {
        "word": "講義",
        "reading": "こうぎ",
        "meaning": "lecture"
      },
      {
        "word": "講座",
        "reading": "こうざ",
        "meaning": "course"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 412,
    "character": "職",
    "meaning": "job; occupation",
    "readings": "ショク",
    "example": "兄は大学を卒業して就職しました。",
    "exampleMeaning": "My older brother found a job after graduating from university.",
    "words": [
      {
        "word": "職業",
        "reading": "しょくぎょう",
        "meaning": "occupation"
      },
      {
        "word": "就職",
        "reading": "しゅうしょく",
        "meaning": "employment"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 413,
    "character": "観",
    "meaning": "view; observe",
    "readings": "カン／みる",
    "example": "京都へ観光に行きました。",
    "exampleMeaning": "I went sightseeing in Kyoto.",
    "words": [
      {
        "word": "観光",
        "reading": "かんこう",
        "meaning": "sightseeing"
      },
      {
        "word": "観客",
        "reading": "かんきゃく",
        "meaning": "audience"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 414,
    "character": "額",
    "meaning": "amount; forehead",
    "readings": "ガク／ひたい",
    "example": "請求書の金額を確認してください。",
    "exampleMeaning": "Please check the amount on the invoice.",
    "words": [
      {
        "word": "金額",
        "reading": "きんがく",
        "meaning": "amount of money"
      },
      {
        "word": "額",
        "reading": "ひたい",
        "meaning": "forehead"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 415,
    "character": "類",
    "meaning": "kind; type",
    "readings": "ルイ／たぐい",
    "example": "この店にはさまざまな種類の商品があります。",
    "exampleMeaning": "This store has many different kinds of products.",
    "words": [
      {
        "word": "種類",
        "reading": "しゅるい",
        "meaning": "type"
      },
      {
        "word": "人類",
        "reading": "じんるい",
        "meaning": "humankind"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 416,
    "character": "願",
    "meaning": "wish; request",
    "readings": "ガン／ねがう",
    "example": "願書は今月末までに提出してください。",
    "exampleMeaning": "Please submit the application form by the end of this month.",
    "words": [
      {
        "word": "願う",
        "reading": "ねがう",
        "meaning": "to wish"
      },
      {
        "word": "願書",
        "reading": "がんしょ",
        "meaning": "application form"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 417,
    "character": "識",
    "meaning": "knowledge; awareness",
    "readings": "シキ",
    "example": "日本文化についての知識を深めたいです。",
    "exampleMeaning": "I want to deepen my knowledge of Japanese culture.",
    "words": [
      {
        "word": "知識",
        "reading": "ちしき",
        "meaning": "knowledge"
      },
      {
        "word": "意識",
        "reading": "いしき",
        "meaning": "awareness"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 418,
    "character": "競",
    "meaning": "compete",
    "readings": "キョウ／きそう",
    "example": "二つのチームが優勝を競っています。",
    "exampleMeaning": "The two teams are competing for the championship.",
    "words": [
      {
        "word": "競争",
        "reading": "きょうそう",
        "meaning": "competition"
      },
      {
        "word": "競技",
        "reading": "きょうぎ",
        "meaning": "sporting event"
      }
    ],
    "category": "JLPT N3"
  },
  {
    "id": 419,
    "character": "議",
    "meaning": "discussion; deliberation",
    "readings": "ギ",
    "example": "会議で新しい計画について議論しました。",
    "exampleMeaning": "We discussed the new plan at the meeting.",
    "words": [
      {
        "word": "会議",
        "reading": "かいぎ",
        "meaning": "meeting"
      },
      {
        "word": "議論",
        "reading": "ぎろん",
        "meaning": "discussion"
      }
    ],
    "category": "JLPT N3"
  }
];
