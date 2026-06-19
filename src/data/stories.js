// 3–4 micro-slides per term, Instagram Reels style
// Each slide: bg (gradient pair), visual (emoji scene), text (≤2 lines), optional realWorld, optional deepDive

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
        deepDive: {
          title: '캔들 4가지 가격 자세히 보기',
          items: [
            {
              label: '시가 (始價, Open)',
              desc: '그날 주식 시장이 열렸을 때 처음 거래된 가격. 캔들 몸통의 시작점이에요.',
            },
            {
              label: '고가 (高價, High)',
              desc: '그날 가장 비쌌던 순간의 가격. 캔들 위에 삐죽 나온 "윗 꼬리(위 그림자)"로 표현돼요.',
            },
            {
              label: '저가 (低價, Low)',
              desc: '그날 가장 쌌던 순간의 가격. 캔들 아래 나온 "아랫 꼬리(아래 그림자)"로 표현돼요.',
            },
            {
              label: '종가 (終價, Close)',
              desc: '그날 시장이 닫혔을 때 마지막으로 거래된 가격. 캔들 몸통의 끝점이에요.',
            },
          ],
        },
      },
      {
        bg: ['#D1FAE5', '#86EFAC'],
        visual: '🔴🔵',
        text: '빨강 = 오늘 올랐어요 📈\n파랑 = 오늘 내렸어요 📉',
        imagePrompt: 'Red and blue candles side by side, Korean market color coding illustration',
        deepDive: {
          title: '한국 vs 해외 색상 차이',
          items: [
            {
              label: '한국 증권 앱 — 빨강이 상승!',
              desc: '국내 MTS(모바일 트레이딩 시스템)는 빨강=상승, 파랑=하락이에요. 처음 보면 헷갈릴 수 있어요.',
            },
            {
              label: '해외 차트 — 초록이 상승',
              desc: '미국·유럽 등 해외 플랫폼은 대부분 초록=상승, 빨강=하락을 씁니다. 같은 차트도 색이 반대로 보일 수 있어요!',
            },
            {
              label: '꼬리(심지)의 의미',
              desc: '몸통 위아래로 얇게 뻗은 선이 "꼬리"예요. 꼬리가 길수록 그날 가격 변동이 극적이었다는 뜻이에요.',
            },
          ],
        },
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
        deepDive: {
          title: '캔들 패턴 읽기 입문',
          items: [
            {
              label: '장대 양봉 (긴 빨간 캔들)',
              desc: '몸통이 길고 꼬리가 짧은 빨간 캔들. 그날 매수세가 강해 시가보다 종가가 훨씬 높았다는 신호예요.',
            },
            {
              label: '도지 (Doji)',
              desc: '시가와 종가가 거의 같아서 몸통이 아주 얇은 캔들. 매수와 매도 세력이 팽팽히 맞섰을 때 나타나요.',
            },
            {
              label: '거래량도 함께 봐야 해요',
              desc: '캔들 아래 막대(거래량)가 클수록 많은 사람이 그 가격에 동의했다는 의미. 거래량 없는 큰 움직임은 신뢰도가 낮아요.',
            },
            {
              label: '1일봉 · 주봉 · 월봉',
              desc: '캔들 하나가 나타내는 기간을 바꿀 수 있어요. 1일봉은 하루, 주봉은 일주일, 월봉은 한 달치 OHLC를 담아요.',
            },
          ],
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

  // ── 챕터 6 — 차트 읽기 ──────────────────────────────
  'bullish-candle': {
    term: '양봉', termEn: 'Bullish Candle',
    slides: [
      {
        bg: ['#FEF3C7', '#FDE68A'],
        visual: '🟥❓🟦',
        text: '캔들 색깔이 두 종류예요.\n무슨 차이일까요?',
      },
      {
        bg: ['#FFEAEA', '#FCA5A5'],
        visual: '🟥📈',
        text: '빨간 캔들 = 오늘 주가가 올랐어요!\n한국 앱에서는 빨강이 "좋은 것"이에요.',
        realWorld: {
          desc: '증권 앱에서 빨간 막대(양봉)가 많이 보이면 그날 강하게 오른 거예요',
          mockup: 'chart',
        },
      },
      {
        bg: ['#D1FAE5', '#6EE7B7'],
        visual: '💪🟥',
        text: '몸통이 길수록 강한 상승!\n꼬리가 짧으면 매수세가 강했다는 뜻이에요.',
        deepDive: {
          title: '양봉 패턴 더 알아보기',
          items: [
            {
              label: '장대 양봉',
              desc: '몸통이 매우 길고 꼬리가 짧은 강력한 양봉. 세력(큰 손)이 강하게 매수했다는 신호로 자주 해석해요.',
            },
            {
              label: '위꼬리 달린 양봉',
              desc: '몸통은 있지만 위로 긴 꼬리가 달려 있어요. 올라가려다 저항을 받은 것 — 다음날 조정을 조심해야 해요.',
            },
            {
              label: '도지 (십자형)',
              desc: '시가와 종가가 거의 같아서 몸통이 아주 얇은 캔들. 매수와 매도세가 팽팽히 맞서 방향성이 불분명한 상태예요.',
            },
          ],
        },
      },
    ],
  },

  'bearish-candle': {
    term: '음봉', termEn: 'Bearish Candle',
    slides: [
      {
        bg: ['#DBEAFE', '#93C5FD'],
        visual: '🟦📉',
        text: '파란 캔들 = 오늘 주가가 내렸어요.\n한국에선 파랑이 하락을 뜻해요.',
      },
      {
        bg: ['#EDE9FE', '#C4B5FD'],
        visual: '🌍🔄',
        text: '주의! 해외 차트는 반대예요.\n미국·유럽 앱에선 초록=상승, 빨강=하락!',
      },
      {
        bg: ['#FEF9C3', '#FDE68A'],
        visual: '⚠️🟦🟦🟦',
        text: '음봉이 연달아 3개 이상 나오면\n하락 추세를 조심해야 해요.',
        deepDive: {
          title: '음봉이 나왔을 때 체크할 것들',
          items: [
            {
              label: '거래량은 얼마나?',
              desc: '거래량 없이 가격만 조금 빠진 음봉은 비교적 덜 위험해요. 거래량이 폭증한 음봉은 큰 매도세가 있다는 신호예요.',
            },
            {
              label: '연속 음봉 3개 이상',
              desc: '3일 이상 연속으로 음봉이 나온다면 추세적 하락일 가능성이 높아요. 손절 기준을 다시 점검해볼 시점이에요.',
            },
            {
              label: '이동평균선 아래로 이탈',
              desc: '음봉이 나오면서 주가가 20일 이동평균선 아래로 내려가면 중요한 경고 신호예요.',
            },
          ],
        },
      },
    ],
  },

  volume: {
    term: '거래량', termEn: 'Trading Volume',
    slides: [
      {
        bg: ['#DBEAFE', '#BFDBFE'],
        visual: '📊📊📊',
        text: '차트 아래에 있는 막대기들,\n이게 바로 거래량이에요!',
      },
      {
        bg: ['#FEF3C7', '#FDE68A'],
        visual: '🚀📊',
        text: '거래량이 갑자기 3~5배 폭발하면\n뭔가 큰 일이 생겼다는 신호예요!',
        realWorld: {
          desc: '증권 앱 차트 하단 막대가 유독 크게 솟아 있는 날을 찾아보세요',
          mockup: 'chart',
        },
      },
      {
        bg: ['#D1FAE5', '#6EE7B7'],
        visual: '📊+📈=✅',
        text: '거래량 많은 상승 = 신뢰할 수 있는 상승!\n거래량 없는 상승 = 주의 필요해요.',
        deepDive: {
          title: '거래량으로 주가 움직임 해석하기',
          items: [
            {
              label: '거래량 ↑ + 주가 ↑',
              desc: '강력한 매수 신호. 많은 사람이 사고 있어 가격이 오르는 것 — 신뢰도 높은 상승이에요.',
            },
            {
              label: '거래량 ↓ + 주가 ↑',
              desc: '거래 참여자가 적은데 오르는 것. 진짜 상승인지 의심해봐야 해요. 쉽게 빠질 수 있어요.',
            },
            {
              label: '거래량 ↑ + 주가 ↓',
              desc: '강력한 매도 신호. 많은 사람이 팔고 있다는 것 — 추가 하락 가능성이 높아요.',
            },
            {
              label: '평균 거래량 확인하기',
              desc: '평소 거래량과 비교하는 게 중요해요. 오늘 거래량이 20일 평균의 2배 이상이면 주목할 만한 움직임이에요.',
            },
          ],
        },
      },
    ],
  },

  'moving-average': {
    term: '이동평균선', termEn: 'Moving Average',
    slides: [
      {
        bg: ['#EDE9FE', '#C4B5FD'],
        visual: '〰️📊',
        text: '캔들차트 위에 그려진 부드러운 선들!\n이게 이동평균선이에요.',
      },
      {
        bg: ['#DBEAFE', '#93C5FD'],
        visual: '5️⃣📅2️⃣0️⃣📅',
        text: '5일선 = 최근 5일 평균\n20일선 = 최근 한 달 평균',
      },
      {
        bg: ['#D1FAE5', '#6EE7B7'],
        visual: '✨🥇',
        text: '단기선이 장기선 위로 → 골든크로스!\n상승 추세의 대표 신호예요. 📈',
        realWorld: {
          desc: '차트에서 선들이 교차하는 지점을 찾아보세요 — 중요한 매매 신호예요',
          mockup: 'chart',
        },
        deepDive: {
          title: '이동평균선 실전 활용',
          items: [
            {
              label: '골든크로스 (매수 신호)',
              desc: '5일선이 20일선 위로 올라오는 것. 단기 평균이 중기 평균을 넘어서면 상승 추세로 전환하는 신호예요.',
            },
            {
              label: '데드크로스 (매도 주의)',
              desc: '5일선이 20일선 아래로 내려가는 것. 하락 추세로 전환하는 신호 — 손절 시점을 고려해야 해요.',
            },
            {
              label: '120일선 (장기 추세)',
              desc: '6개월치 평균인 120일선은 장기 추세를 보여줘요. 주가가 120일선 위에 있으면 장기 상승 추세예요.',
            },
            {
              label: '이평선이 지지·저항선 역할',
              desc: '주가가 이동평균선에 닿으면 반등하거나 막히는 경우가 많아요. 이평선 위에선 매수 기회, 아래선 저항선이에요.',
            },
          ],
        },
      },
    ],
  },

  // ── 챕터 7 — 현명한 투자자의 기준 ───────────────────
  'stop-loss': {
    term: '손절', termEn: 'Stop Loss',
    slides: [
      {
        bg: ['#FFEAEA', '#FCA5A5'],
        visual: '📉😰',
        text: '10,000원에 산 주식이\n7,000원으로 내려갔어요.',
      },
      {
        bg: ['#FEF3C7', '#FDE68A'],
        visual: '🤔💭',
        text: '"조금만 기다리면 오르겠지..."\n이 생각이 가장 위험해요! ⚠️',
      },
      {
        bg: ['#D1FAE5', '#6EE7B7'],
        visual: '✂️🛡️',
        text: '미리 -10% 등 기준을 정하고\n기계적으로 자르는 게 정답이에요!',
        deepDive: {
          title: '손절을 잘 하는 방법',
          items: [
            {
              label: '손절 기준을 미리 정하자',
              desc: '매수 전에 "이 주식은 -7%가 되면 무조건 판다"고 규칙을 만들어요. 감정이 개입되지 않게 자동화하는 게 핵심이에요.',
            },
            {
              label: '-10% 법칙',
              desc: '초보자에게 자주 추천되는 기준. 10% 이상 손해가 나면 무조건 파는 것. 처음엔 아프지만 대형 손실을 막아줘요.',
            },
            {
              label: '손절 후 재매수도 전략',
              desc: '팔고 나서 주가가 다시 오른다고 해도 괜찮아요. 팔 당시엔 틀린 판단이 아니었던 거예요. 손절은 리스크 관리예요.',
            },
          ],
        },
      },
    ],
  },

  'take-profit': {
    term: '익절', termEn: 'Take Profit',
    slides: [
      {
        bg: ['#D1FAE5', '#6EE7B7'],
        visual: '📈💰',
        text: '10,000원에 산 주식이\n13,000원이 됐어요! 30% 수익! 🎉',
      },
      {
        bg: ['#FEF9C3', '#FDE68A'],
        visual: '😤💭',
        text: '"더 오를 것 같은데..." 했다가\n갑자기 12,000원으로 떨어졌어요. 😢',
      },
      {
        bg: ['#FDF2F8', '#FBCFE8'],
        visual: '🎯💰',
        text: '수익은 팔아야 진짜 내 돈!\n목표 수익률을 미리 정해두세요.',
        deepDive: {
          title: '익절 잘 하는 법',
          items: [
            {
              label: '목표 수익률 미리 정하기',
              desc: '매수할 때 "이 주식은 +20%가 되면 판다"고 정해두세요. 탐욕에 흔들리지 않는 가장 좋은 방법이에요.',
            },
            {
              label: '분할 매도',
              desc: '30%가 됐을 때 절반을 팔고, 나머지를 더 들고 가는 것. 이익도 챙기고 추가 상승도 놓치지 않는 방법이에요.',
            },
            {
              label: '"완벽한 꼭지"를 찾지 마세요',
              desc: '최고점에서 파는 건 불가능해요. 충분한 수익에서 팔고 다음 기회를 보는 게 장기적으로 더 이익이에요.',
            },
          ],
        },
      },
    ],
  },

  diversification: {
    term: '분산투자', termEn: 'Diversification',
    slides: [
      {
        bg: ['#FEF3C7', '#FDE68A'],
        visual: '🥚🧺',
        text: '"계란을 한 바구니에 담지 마라"\n투자의 가장 유명한 격언이에요!',
      },
      {
        bg: ['#DBEAFE', '#93C5FD'],
        visual: '🥗🌈',
        text: 'IT + 금융 + 바이오 + 소비재...\n다양한 업종에 나눠 투자하면?',
      },
      {
        bg: ['#D1FAE5', '#6EE7B7'],
        visual: '🛡️✅',
        text: '1개가 망해도 나머지 9개가 지켜줘요!\n전체 자산의 10~20% 이하로 한 종목에 투자.',
        deepDive: {
          title: '분산투자 실전 가이드',
          items: [
            {
              label: '업종 분산',
              desc: 'IT, 금융, 헬스케어, 소비재 등 다양한 업종에 투자해요. 한 업종이 침체해도 다른 업종이 버텨줄 수 있어요.',
            },
            {
              label: '국가 분산',
              desc: '한국 주식만 갖지 말고, 미국(S&P500 ETF), 유럽 등 다양한 나라에도 투자하면 특정 국가 리스크를 줄일 수 있어요.',
            },
            {
              label: '자산 분산',
              desc: '주식 외에 채권, 부동산(REITs), 현금도 함께 보유하면 주식 시장이 폭락해도 충격을 줄일 수 있어요.',
            },
            {
              label: '한 종목 10~20% 제한',
              desc: '전문 투자자들도 한 종목에 자산의 20% 이상을 넣지 않아요. 초보일수록 더 보수적으로 분산하는 게 좋아요.',
            },
          ],
        },
      },
    ],
  },

  pbr: {
    term: 'PBR', termEn: 'Price-to-Book Ratio',
    slides: [
      {
        bg: ['#EDE9FE', '#C4B5FD'],
        visual: '🏢💰❓',
        text: '지금 당장 이 회사를 팔면\n얼마나 받을 수 있을까요?',
      },
      {
        bg: ['#DBEAFE', '#93C5FD'],
        visual: '📚÷💰',
        text: 'PBR = 주가 ÷ 주당 순자산\n1 미만이면 이론적 저평가 신호!',
        realWorld: {
          desc: '종목 상세 페이지에서 PER 옆에 PBR도 함께 확인하세요',
          mockup: 'per-eps',
        },
      },
      {
        bg: ['#D1FAE5', '#6EE7B7'],
        visual: '⚠️💡',
        text: '단, 업종마다 기준이 달라요.\nIT 기업은 PBR이 높아도 괜찮을 수 있어요!',
        deepDive: {
          title: 'PBR 실전 해석',
          items: [
            {
              label: 'PBR 1 미만 (저평가?))',
              desc: '지금 주가가 회사 순자산보다 낮아요. 이론적으로 회사를 청산하면 이익인 상태. 가치주 투자자들이 좋아해요.',
            },
            {
              label: '은행·제조업 → PBR 중요',
              desc: '자산이 많은 업종은 PBR로 저평가 여부를 잘 판단할 수 있어요.',
            },
            {
              label: 'IT·플랫폼 → PBR 높아도 OK',
              desc: '네이버, 카카오 같은 기업은 특허·브랜드·데이터 같은 무형자산이 크기 때문에 PBR이 높아도 과열이 아닐 수 있어요.',
            },
          ],
        },
      },
    ],
  },

  roe: {
    term: 'ROE', termEn: 'Return on Equity',
    slides: [
      {
        bg: ['#FEF3C7', '#FDE68A'],
        visual: '🏆🤔',
        text: '100만원으로 20만원 버는 빵집 vs\n1,000만원으로 20만원 버는 빵집?',
      },
      {
        bg: ['#DBEAFE', '#BFDBFE'],
        visual: '🧮📊',
        text: 'ROE = 순이익 ÷ 자기자본 × 100\n100만원으로 20만원 = ROE 20%!',
        realWorld: {
          desc: '증권 앱 기업정보에서 ROE 항목을 찾아보세요',
          mockup: 'per-eps',
        },
      },
      {
        bg: ['#D1FAE5', '#6EE7B7'],
        visual: '🏆✅',
        text: '워런 버핏은 ROE 15% 이상인\n기업만 투자 후보로 봐요!',
        deepDive: {
          title: 'ROE 실전 활용법',
          items: [
            {
              label: 'ROE 15% 이상이 기준',
              desc: '워런 버핏이 제시한 우량 기업 기준. 3년 이상 꾸준히 15% 이상을 유지하면 탄탄한 수익 구조를 가진 기업이에요.',
            },
            {
              label: '부채가 많으면 ROE도 높아져요',
              desc: 'ROE가 너무 높다면(30%+) 부채를 많이 써서 숫자가 부풀려진 건지 확인이 필요해요. 부채비율도 같이 봐야 해요.',
            },
            {
              label: '동종 업계 비교 필수',
              desc: '은행업은 ROE가 8~10%도 좋은 편이고, 소프트웨어 기업은 20~40%도 가능해요. 항상 같은 업종끼리 비교하세요.',
            },
          ],
        },
      },
    ],
  },

  'dividend-yield': {
    term: '배당수익률', termEn: 'Dividend Yield',
    slides: [
      {
        bg: ['#FEF9C3', '#FDE68A'],
        visual: '💧🎁',
        text: '주식을 갖고 있으면\n매년 배당금을 받을 수 있어요!',
      },
      {
        bg: ['#DBEAFE', '#93C5FD'],
        visual: '💧÷💰',
        text: '배당수익률 = 주당배당금 ÷ 주가 × 100\n3% = 100만원 투자 시 연 3만원 배당!',
        realWorld: {
          desc: '배당금 수령 내역과 배당수익률을 여기서 확인할 수 있어요',
          mockup: 'dividend',
        },
      },
      {
        bg: ['#D1FAE5', '#6EE7B7'],
        visual: '🏦📊',
        text: '예금 금리보다 높으면 매력적!\n단, 너무 높으면 재무 위험 신호일 수 있어요.',
        deepDive: {
          title: '배당주 투자 전략',
          items: [
            {
              label: '배당수익률 2~4% = 양호',
              desc: '2025~2026년 기준 예금 금리 3~4%와 비교해요. 배당수익률이 예금 금리보다 높으면 주가 상승 기대도 있어 더 매력적이에요.',
            },
            {
              label: '배당수익률 6% 이상 = 주의',
              desc: '너무 높은 배당수익률은 주가가 많이 빠졌거나 회사 재정이 불안하다는 신호일 수 있어요. 지속 가능한지 꼭 확인하세요.',
            },
            {
              label: '배당 기준일 확인 필수',
              desc: '배당을 받으려면 배당기준일에 주식을 보유하고 있어야 해요. 주로 12월 말이 기준일이고, 4월경에 배당금을 받아요.',
            },
            {
              label: '배당세 15.4% 공제',
              desc: '배당금엔 세금이 있어요. 배당금의 15.4%(지방세 포함)가 원천징수돼요. 10만원 배당 → 실수령 84,600원이에요.',
            },
          ],
        },
      },
    ],
  },
};
