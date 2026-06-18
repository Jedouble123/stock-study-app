// 3–4 micro-slides per term, Instagram Reels style
// Each slide: bg (gradient pair), visual (emoji scene), text (≤2 lines), optional realWorld

export const TERM_STORIES = {
  stock: {
    term: '주식', termEn: 'Stock',
    slides: [
      {
        bg: ['#DCFCE7', '#86EFAC'],
        visual: '🌲🏠🌲',
        text: '숲 속 마을에\n맛있는 빵집이 있었어요.',
        imageUrl: '/images/stock-s1.png',
      },
      {
        bg: ['#FEF9C3', '#FDE68A'],
        visual: '🐰💭💰',
        text: '"빵집을 키우고 싶은데\n혼자서는 돈이 부족해..." 🥲',
        imageUrl: '/images/stock-s2.png',
      },
      {
        bg: ['#DBEAFE', '#BFDBFE'],
        visual: '✂️📄📄📄',
        text: '"주인 자격을 10조각으로\n나눠서 팔자!"',
        imageUrl: '/images/stock-s3.png',
      },
      {
        bg: ['#D1FAE5', '#6EE7B7'],
        visual: '📄⭐',
        text: '이 조각 한 장이 바로\n주식(株式) 1주예요!',
        imageUrl: '/images/stock-s4.png',
        realWorld: {
          label: '증권 앱에서는',
          desc: '내가 가진 주식 수를 이렇게 확인해요',
          mockup: 'portfolio',
        },
      },
    ],
  },

  shareholder: {
    term: '주주', termEn: 'Shareholder',
    slides: [
      {
        bg: ['#FEF3C7', '#FDE68A'],
        visual: '🐿️🐻🦊',
        text: '주식을 산 다람쥐, 곰, 여우—\n이제 모두 빵집의 진짜 주인이에요! 👑',
        imageUrl: '/images/shareholder-s1.png',
      },
      {
        bg: ['#EDE9FE', '#DDD6FE'],
        visual: '🗳️💬',
        text: '빵집 회의에서\n의견도 낼 수 있어요.',
        imageUrl: '/images/shareholder-s2.png',
      },
      {
        bg: ['#D1FAE5', '#A7F3D0'],
        visual: '🏠💰🎁',
        text: '빵집이 잘 될수록\n이익도 함께 나눠요!',
        imageUrl: '/images/shareholder-s3.png',
        realWorld: {
          label: '증권 앱에서는',
          desc: '내가 주주인 종목 목록을 볼 수 있어요',
          mockup: 'holdings',
        },
      },
    ],
  },

  'stock-price': {
    term: '주가', termEn: 'Stock Price',
    slides: [
      {
        bg: ['#FEF9C3', '#FCD34D'],
        visual: '🏷️',
        text: '처음엔 빵집 주식\n한 장에 1,000원이었어요.',
        imageUrl: '/images/stock-price-s1.png',
      },
      {
        bg: ['#DBEAFE', '#93C5FD'],
        visual: '📺✨',
        text: '빵집이 TV에 나와서\n온 나라가 주목했어요!',
        imageUrl: '/images/stock-price-s2.png',
      },
      {
        bg: ['#DCFCE7', '#86EFAC'],
        visual: '📈💰',
        text: '사고 싶은 사람이 많을수록\n가격이 올라가요 — 이게 주가예요!',
        imageUrl: '/images/stock-price-s3.png',
        realWorld: {
          label: '증권 앱에서는',
          desc: '실시간으로 주가가 이렇게 표시돼요',
          mockup: 'price',
        },
      },
    ],
  },

  dividend: {
    term: '배당금', termEn: 'Dividend',
    slides: [
      {
        bg: ['#FEF9C3', '#FDE68A'],
        visual: '🎉🏠',
        text: '토끼 빵집이\n올해 돈을 엄청 많이 벌었어요!',
        imagePrompt: 'Celebrating bakery with confetti, successful business illustration',
      },
      {
        bg: ['#D1FAE5', '#6EE7B7'],
        visual: '💰✂️',
        text: '"이익을 주주들에게\n나눠드려야죠!" 🎁',
        imagePrompt: 'Money being split and distributed to animal shareholders equally',
      },
      {
        bg: ['#FDF2F8', '#FBCFE8'],
        visual: '💌💰',
        text: '가만히 들고만 있어도\n돈이 들어오는 게 배당금이에요!',
        imagePrompt: 'An envelope with coins falling out, happy character receiving money',
        realWorld: {
          label: '증권 앱에서는',
          desc: '배당금 수령 내역을 여기서 확인해요',
          mockup: 'dividend',
        },
      },
    ],
  },

  ipo: {
    term: '상장', termEn: 'IPO',
    slides: [
      {
        bg: ['#DCFCE7', '#86EFAC'],
        visual: '🏡🌲',
        text: '동네 빵집이었던\n토끼 빵집이 유명해졌어요.',
        imagePrompt: 'Small cozy bakery in a village, growing bigger and brighter',
      },
      {
        bg: ['#DBEAFE', '#BFDBFE'],
        visual: '🚀🌍',
        text: '"전국 누구나 우리 주식을\n살 수 있게 하자!" 🎊',
        imagePrompt: 'Rocket launching from a small town into the big city skyline',
      },
      {
        bg: ['#FEF3C7', '#FDE68A'],
        visual: '🏛️📈',
        text: '주식 시장에 데뷔하는 것 —\n이게 바로 상장이에요!',
        imagePrompt: 'Grand stock exchange building with ribbon cutting ceremony, celebration',
        realWorld: {
          label: '증권 앱에서는',
          desc: 'KOSPI / KOSDAQ 배지로 어디 소속인지 표시돼요',
          mockup: 'exchange-badge',
        },
      },
    ],
  },

  exchange: {
    term: '거래소', termEn: 'Stock Exchange',
    slides: [
      {
        bg: ['#EDE9FE', '#C4B5FD'],
        visual: '🏛️',
        text: '왕국 한가운데에\n아주 특별한 시장이 있었어요.',
        imagePrompt: 'Grand marble building in the center of a kingdom, majestic atmosphere',
      },
      {
        bg: ['#DBEAFE', '#93C5FD'],
        visual: '📄💱',
        text: '채소 대신 주식을\n사고파는 곳이에요!',
        imagePrompt: 'Characters trading certificates instead of vegetables, busy marketplace',
      },
      {
        bg: ['#D1FAE5', '#6EE7B7'],
        visual: '🇰🇷🏛️',
        text: '우리나라엔 한국거래소(KRX)!\nKOSPI · KOSDAQ을 함께 운영해요.',
        imagePrompt: 'Korean flag with a modern stock exchange building, professional illustration',
        realWorld: {
          label: '증권 앱에서는',
          desc: '종목마다 어느 거래소 소속인지 표시돼요',
          mockup: 'exchange-badge',
        },
      },
    ],
  },

  buy: {
    term: '매수', termEn: 'Buy',
    slides: [
      {
        bg: ['#FEF3C7', '#FDE68A'],
        visual: '🐿️💭✨',
        text: '"이 빵집, 앞으로\n더 잘 될 것 같은데?" 🤔',
        imagePrompt: 'Cute squirrel thinking with sparkles, looking at a promising bakery',
      },
      {
        bg: ['#DBEAFE', '#BFDBFE'],
        visual: '🛒📄',
        text: '"토끼 빵집 주식\n5개 주세요!"',
        imagePrompt: 'Character at a stock exchange counter buying shares, confident expression',
      },
      {
        bg: ['#D1FAE5', '#86EFAC'],
        visual: '📈🙋',
        text: '주식을 사는 것 = 매수\n이제 나도 주인 중 한 명!',
        imagePrompt: 'Proud character holding a share certificate, thumbs up',
        realWorld: {
          label: '증권 앱에서는',
          desc: '매수 버튼을 눌러 주식을 살 수 있어요',
          mockup: 'order',
        },
      },
    ],
  },

  sell: {
    term: '매도', termEn: 'Sell',
    slides: [
      {
        bg: ['#D1FAE5', '#6EE7B7'],
        visual: '📈💰',
        text: '1,000원에 샀던 주식이\n2,000원이 됐어요! 🤩',
        imagePrompt: 'Stock price chart going up dramatically, character celebrating',
      },
      {
        bg: ['#FEF9C3', '#FDE68A'],
        visual: '💡🐿️',
        text: '"지금 팔면\n2배 이익인데..."',
        imagePrompt: 'Squirrel with a lightbulb moment, looking at rising price chart',
      },
      {
        bg: ['#FDF2F8', '#FBCFE8'],
        visual: '💸📄',
        text: '주식을 파는 것 = 매도\n팔면 주식 대신 현금이 들어와요!',
        imagePrompt: 'Character selling a certificate, coins flowing into wallet',
        realWorld: {
          label: '증권 앱에서는',
          desc: '매도 버튼을 눌러 주식을 팔 수 있어요',
          mockup: 'order',
        },
      },
    ],
  },

  'market-cap': {
    term: '시가총액', termEn: 'Market Cap',
    slides: [
      {
        bg: ['#EDE9FE', '#C4B5FD'],
        visual: '🏠🏠🏠',
        text: '이 빵집은 얼마짜리\n회사일까요?',
        imagePrompt: 'Three different sized bakeries side by side with question marks and price tags',
      },
      {
        bg: ['#DBEAFE', '#93C5FD'],
        visual: '📄✕🔢',
        text: '주가 × 주식 수\n= 회사 전체 가격!',
        imagePrompt: 'Simple math formula illustrated cutely: price tag × number of certificates',
      },
      {
        bg: ['#D1FAE5', '#6EE7B7'],
        visual: '⚖️📊',
        text: '이게 시가총액!\n클수록 더 큰 회사예요.',
        imagePrompt: 'Scale comparing big and small companies by market cap, visual comparison',
        realWorld: {
          label: '증권 앱에서는',
          desc: '시가총액 순위로 회사 크기를 비교할 수 있어요',
          mockup: 'market-cap',
        },
      },
    ],
  },

  kospi: {
    term: '코스피', termEn: 'KOSPI',
    slides: [
      {
        bg: ['#DBEAFE', '#BFDBFE'],
        visual: '🏢🏢🏢',
        text: '수천 개 회사의 주가를\n하나하나 다 볼 순 없잖아요.',
        imagePrompt: 'Many skyscrapers representing companies, overwhelming amount',
      },
      {
        bg: ['#FEF3C7', '#FDE68A'],
        visual: '📊🔢',
        text: '"대기업들 주가를 모아서\n숫자 하나로 정리해줘!"',
        imagePrompt: 'Many numbers being compressed into a single big number, illustration',
      },
      {
        bg: ['#D1FAE5', '#6EE7B7'],
        visual: '🇰🇷📈',
        text: '코스피가 오르면 경제 활발,\n내리면 위축 신호예요!',
        imagePrompt: 'Korean flag with an upward arrow, positive economic vibes illustration',
        realWorld: {
          label: '증권 앱에서는',
          desc: '첫 화면에 코스피 지수가 항상 표시돼요',
          mockup: 'index',
        },
      },
    ],
  },

  kosdaq: {
    term: '코스닥', termEn: 'KOSDAQ',
    slides: [
      {
        bg: ['#D1FAE5', '#6EE7B7'],
        visual: '🌱',
        text: '코스피는 이미 큰 대기업들—\n작은 회사들은 어디로 갈까요?',
        imagePrompt: 'Small green sprout next to a giant tree, size comparison illustration',
      },
      {
        bg: ['#DBEAFE', '#93C5FD'],
        visual: '💻🔬',
        text: 'IT·바이오·스타트업들의\n성장 가능성에 투자하는 곳!',
        imagePrompt: 'Young innovative companies with laptops and lab equipment, startup vibes',
      },
      {
        bg: ['#FDF2F8', '#FBCFE8'],
        visual: '🚀📈',
        text: '변동이 크지만\n기회도 더 클 수 있어요.',
        imagePrompt: 'Rocket going up fast but with some turbulence, exciting but risky feeling',
        realWorld: {
          label: '증권 앱에서는',
          desc: '코스피 옆에 코스닥 지수도 같이 표시돼요',
          mockup: 'index',
        },
      },
    ],
  },

  candlestick: {
    term: '캔들차트', termEn: 'Candlestick Chart',
    slides: [
      {
        bg: ['#FEF3C7', '#FDE68A'],
        visual: '📊❓',
        text: '하루 주가를\n어떻게 한눈에 기록할까요?',
        imagePrompt: 'Character puzzling over how to record price data, thinking pose',
      },
      {
        bg: ['#DBEAFE', '#BFDBFE'],
        visual: '🕯️4️⃣',
        text: '시작·최고·최저·마지막\n4가지를 양초 모양으로!',
        imagePrompt: 'A single candlestick chart bar with four price points labeled clearly',
      },
      {
        bg: ['#D1FAE5', '#86EFAC'],
        visual: '🟩',
        text: '초록 = 오늘 올랐어요 📈\n빨간 = 오늘 내렸어요 📉',
        imagePrompt: 'Green and red candles side by side, clear color coding illustration',
      },
      {
        bg: ['#EDE9FE', '#C4B5FD'],
        visual: '📊✨',
        text: '이 캔들들을 이어 붙이면\n주가 흐름이 한눈에!',
        imagePrompt: 'Multiple candlesticks forming a price chart, beautiful data visualization',
        realWorld: {
          label: '증권 앱에서는',
          desc: '종목 화면에서 이 캔들차트를 볼 수 있어요',
          mockup: 'chart',
        },
      },
    ],
  },

  'upper-limit': {
    term: '상한가', termEn: 'Upper Limit',
    slides: [
      {
        bg: ['#FEF3C7', '#FDE68A'],
        visual: '📈🚨',
        text: '엄청 좋은 소식에\n주가가 폭발적으로 올랐어요!',
        imagePrompt: 'Price chart shooting up very fast with alarm bells, exciting and chaotic',
      },
      {
        bg: ['#DBEAFE', '#93C5FD'],
        visual: '🔝⛔',
        text: '"하루에 +30% 이상은\n안 돼요!" 🛑',
        imagePrompt: 'A ceiling or limit sign stopping an upward arrow at 30%, rule enforcement',
      },
      {
        bg: ['#D1FAE5', '#6EE7B7'],
        visual: '🎯',
        text: '그 한계 딱 30%에\n도달한 게 상한가예요!',
        imagePrompt: 'Bullseye target at exactly 30% mark, achievement illustration',
        realWorld: {
          label: '증권 앱에서는',
          desc: '상한가 도달 시 빨간 화살표와 함께 표시돼요',
          mockup: 'limit',
        },
      },
    ],
  },

  'lower-limit': {
    term: '하한가', termEn: 'Lower Limit',
    slides: [
      {
        bg: ['#FFEAEA', '#FCA5A5'],
        visual: '📉😱',
        text: '나쁜 소식에\n주가가 와르르 무너졌어요!',
        imagePrompt: 'Price chart crashing down dramatically, character looking shocked',
      },
      {
        bg: ['#DBEAFE', '#BFDBFE'],
        visual: '🛡️⛔',
        text: '"하루에 -30% 이상은\n안 돼요!" 🛑',
        imagePrompt: 'A shield stopping a falling arrow at -30%, protective barrier illustration',
      },
      {
        bg: ['#D1FAE5', '#6EE7B7'],
        visual: '🛡️✅',
        text: '하한가는 투자자를 지키는\n안전장치예요!',
        imagePrompt: 'Safety net catching a falling character, protection concept illustration',
        realWorld: {
          label: '증권 앱에서는',
          desc: '하한가 도달 시 파란 화살표와 함께 표시돼요',
          mockup: 'limit',
        },
      },
    ],
  },

  per: {
    term: 'PER', termEn: 'Price-Earnings Ratio',
    slides: [
      {
        bg: ['#FEF3C7', '#FDE68A'],
        visual: '🏠🏠❓',
        text: '주가 1만원짜리 빵집 vs\n2만원짜리 서점 — 어느 게 싸죠?',
        imagePrompt: 'Two shops with different price tags, character looking confused and comparing',
      },
      {
        bg: ['#DBEAFE', '#93C5FD'],
        visual: '🧮➗',
        text: 'PER = 주가 ÷ 1주당 이익\n이 공식으로 비교해요!',
        imagePrompt: 'Simple cute math formula with a calculator, illustration style',
      },
      {
        bg: ['#EDE9FE', '#C4B5FD'],
        visual: '📉✅',
        text: 'PER이 낮을수록\n이익에 비해 주가가 싸요!',
        imagePrompt: 'Low number glowing green, character pointing excitedly at a bargain',
      },
      {
        bg: ['#D1FAE5', '#6EE7B7'],
        visual: '🧮💡',
        text: '단, 같은 업종끼리만\n비교해야 의미가 있어요.',
        imagePrompt: 'Apples compared to apples, not apples to oranges, comparison concept',
        realWorld: {
          label: '증권 앱에서는',
          desc: '종목 상세 페이지에서 PER을 확인할 수 있어요',
          mockup: 'per-eps',
        },
      },
    ],
  },

  eps: {
    term: 'EPS', termEn: 'Earnings Per Share',
    slides: [
      {
        bg: ['#FEF9C3', '#FDE68A'],
        visual: '🏠💰',
        text: '토끼 빵집이\n1년 동안 10만원을 벌었어요!',
        imagePrompt: 'Bakery with a year-end earnings report, money piling up illustration',
      },
      {
        bg: ['#DBEAFE', '#BFDBFE'],
        visual: '💰➗📄',
        text: '10만원 ÷ 주식 100개\n= 주식 1장당 1,000원 이익!',
        imagePrompt: 'Money being divided equally among certificates, math concept illustration',
      },
      {
        bg: ['#D1FAE5', '#6EE7B7'],
        visual: '📈💡',
        text: 'EPS가 높고 꾸준히 오른다면\n성장하는 좋은 회사예요!',
        imagePrompt: 'Rising EPS graph with a lightbulb, positive company growth illustration',
        realWorld: {
          label: '증권 앱에서는',
          desc: 'PER 옆에 EPS도 함께 표시돼요',
          mockup: 'per-eps',
        },
      },
    ],
  },
};
