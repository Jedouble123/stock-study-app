// 가상 인물 기반 스토리
// 등장인물: 이서준(24, 스타트업 창업), 김지은(25, 직장인), 최민석(33, 투자 선배), 박현우(26, 투자 입문)

export const TERM_STORIES = {
  stock: {
    term: '주식', termEn: 'Stock',
    slides: [
      {
        bg: ['#DBEAFE', '#BFDBFE'],
        visual: '👨‍💻💡',
        text: '이서준(24세)은 퇴근 후 카페에서\n헬스케어 앱을 기획했어요.',
        imageUrl: '/images/stock-s1.png',
      },
      {
        bg: ['#FEF9C3', '#FDE68A'],
        visual: '💰❓',
        text: '"창업하려면 3억이 필요한데\n혼자서는 도저히 못 모으겠어..." 😓',
        imageUrl: '/images/stock-s2.png',
      },
      {
        bg: ['#EDE9FE', '#C4B5FD'],
        visual: '✂️📋📋📋',
        text: '"회사 소유권을 100만 조각으로 나눠서\n투자자들에게 팔면 어떨까?"',
        imageUrl: '/images/stock-s3.png',
      },
      {
        bg: ['#D1FAE5', '#6EE7B7'],
        visual: '📋⭐',
        text: '이 조각 한 장이 바로 주식 1주!\n서준이의 회사는 주당 3,000원에 100만 주를 발행했어요.',
        imageUrl: '/images/stock-s4.png',
        realWorld: {
          label: '증권 앱에서는',
          desc: '내가 보유한 주식 수와 현재 가치를 확인할 수 있어요',
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
        visual: '👩‍💼👨‍💼💼',
        text: '김지은, 박현우, 최민석이\n각각 서준이 회사 주식을 샀어요.',
        imageUrl: '/images/shareholder-s1.png',
      },
      {
        bg: ['#EDE9FE', '#DDD6FE'],
        visual: '🗳️💬',
        text: '"이제 우리도 회사 주주니까\n주주총회에서 의결권을 행사할 수 있어!"',
        imageUrl: '/images/shareholder-s2.png',
      },
      {
        bg: ['#D1FAE5', '#A7F3D0'],
        visual: '📈💰🎁',
        text: '앱이 흥하면 주가가 오르고\n회사 이익의 일부도 배당으로 받을 수 있어요.',
        imageUrl: '/images/shareholder-s3.png',
        realWorld: {
          label: '증권 앱에서는',
          desc: '보유 종목 탭에서 내가 주주인 회사 목록을 확인해요',
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
        text: '서준이 회사 주식은\n처음에 1주당 3,000원이었어요.',
        imageUrl: '/images/stock-price-s1.png',
      },
      {
        bg: ['#DBEAFE', '#93C5FD'],
        visual: '📱✨',
        text: '앱이 앱스토어 1위를 찍으면서\n"이 회사 주식 사야겠다!"는 사람이 폭발적으로 늘었어요.',
        imageUrl: '/images/stock-price-s2.png',
      },
      {
        bg: ['#DCFCE7', '#86EFAC'],
        visual: '📈💰',
        text: '사려는 사람이 많아질수록 가격은 오른다!\n3,000원이던 주가가 8,500원이 됐어요.',
        imageUrl: '/images/stock-price-s3.png',
        realWorld: {
          label: '증권 앱에서는',
          desc: '실시간으로 주가가 1초마다 바뀌는 걸 볼 수 있어요',
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
        visual: '📊🎉',
        text: '서준이 회사가 올해\n순이익 10억 원을 기록했어요!',
      },
      {
        bg: ['#D1FAE5', '#6EE7B7'],
        visual: '💰➗👥',
        text: '"이익의 30%를 주주들에게 나눠드릴게요."\n주식 1주당 450원씩 배당!',
      },
      {
        bg: ['#FDF2F8', '#FBCFE8'],
        visual: '💳💰',
        text: '지은이는 500주를 갖고 있으니\n아무것도 안 해도 225,000원이 통장에 들어와요!',
        realWorld: {
          label: '증권 앱에서는',
          desc: '배당금은 보통 배당기준일 후 1~2달 내에 자동 입금돼요',
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
        visual: '🏢📈',
        text: '서준이 회사가 창업 4년 만에\n연 매출 200억을 돌파했어요.',
      },
      {
        bg: ['#DBEAFE', '#BFDBFE'],
        visual: '🚀📋',
        text: '"코스닥 시장에 상장해서\n전국 누구나 우리 주식을 살 수 있게 하자!"',
      },
      {
        bg: ['#FEF3C7', '#FDE68A'],
        visual: '🏛️🎊',
        text: '한국거래소 심사 통과, 공모가 15,000원 확정!\n이 주식 시장 데뷔를 "상장"이라고 해요.',
        realWorld: {
          label: '증권 앱에서는',
          desc: '공모주 청약은 증권사 앱 "IPO/공모주" 메뉴에서 신청해요',
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
        text: '서울 여의도에 아주 특별한 기관이 있어요.\n"한국거래소(KRX)"가 바로 그곳이에요.',
      },
      {
        bg: ['#DBEAFE', '#93C5FD'],
        visual: '💱📋',
        text: '모든 주식 거래는 이곳을 통해 이뤄져요.\n가격 결정·정산·규정 준수를 관리하는 공식 기관이에요.',
      },
      {
        bg: ['#D1FAE5', '#6EE7B7'],
        visual: '🇰🇷🏛️',
        text: 'KRX는 KOSPI와 KOSDAQ\n두 시장을 함께 운영해요.',
        realWorld: {
          label: '증권 앱에서는',
          desc: '종목 상단에 KOSPI 또는 KOSDAQ 배지로 소속 시장이 표시돼요',
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
        visual: '👨‍💻💭',
        text: '현우는 서준이 회사 실적 보고서를 읽고\n"이 주식, 지금 사야 할 것 같은데?" 🤔',
      },
      {
        bg: ['#DBEAFE', '#BFDBFE'],
        visual: '📱🛒',
        text: '증권사 앱에서 종목 검색 →\n수량 입력 → "매수" 버튼 클릭!',
      },
      {
        bg: ['#D1FAE5', '#86EFAC'],
        visual: '✅📋',
        text: '주식을 사는 행위 = 매수(買受)\n현우는 이제 서준이 회사의 공식 주주예요!',
        realWorld: {
          label: '증권 앱에서는',
          desc: '지정가 주문(원하는 가격 지정) vs 시장가 주문(현재 가격 즉시 체결)',
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
        text: '현우가 주당 7,000원에 산 주식이\n6개월 만에 12,500원이 됐어요! (+78%) 🤩',
      },
      {
        bg: ['#FEF9C3', '#FDE68A'],
        visual: '😤💭',
        text: '"조금 더 오를 것 같기도 한데..."\n최민석 선배가 말해요. "수익은 팔아야 내 돈이야."',
      },
      {
        bg: ['#FDF2F8', '#FBCFE8'],
        visual: '💸📤',
        text: '주식을 파는 행위 = 매도(賣渡)\n팔면 2~3 영업일 후 현금이 계좌에 입금돼요.',
        realWorld: {
          label: '증권 앱에서는',
          desc: '매도 후 결제일(T+2)에 현금 인출이 가능해요',
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
        visual: '🏢🏢❓',
        text: '"삼성전자랑 카카오 중\n어느 회사가 더 큰 회사야?"',
      },
      {
        bg: ['#DBEAFE', '#93C5FD'],
        visual: '💰✕🔢',
        text: '시가총액 = 주가 × 발행 주식 수\n이 공식으로 회사 전체 가격을 계산해요!',
      },
      {
        bg: ['#D1FAE5', '#6EE7B7'],
        visual: '⚖️📊',
        text: '삼성전자 시총 400조 vs 카카오 20조\n→ 삼성이 20배 더 큰 회사예요.',
        realWorld: {
          label: '증권 앱에서는',
          desc: '종목 정보 화면에서 시가총액 순위와 규모를 확인할 수 있어요',
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
        text: '"삼성·현대·LG·SK 주가가\n오늘 다 어떤지 어떻게 한눈에 봐요?"',
      },
      {
        bg: ['#FEF3C7', '#FDE68A'],
        visual: '📊🔢',
        text: '국내 대형 우량주 수백 개를\n하나의 숫자로 압축한 게 코스피 지수예요.',
      },
      {
        bg: ['#D1FAE5', '#6EE7B7'],
        visual: '🇰🇷📈',
        text: '코스피 2,600 → 2,700 : 대기업들 전반적으로 상승\n코스피 하락 : 경기 침체·외국인 자금 이탈 신호',
        realWorld: {
          label: '증권 앱에서는',
          desc: '홈 화면 상단에 코스피 지수가 실시간으로 표시돼요',
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
        visual: '🌱💻',
        text: '서준이처럼 성장 중인 IT·바이오 스타트업은\n코스피 대신 코스닥에 상장해요.',
      },
      {
        bg: ['#DBEAFE', '#93C5FD'],
        visual: '🔬🚀',
        text: '코스닥은 매출·이익 기준이 코스피보다 낮아\n유망 스타트업도 도전할 수 있어요.',
      },
      {
        bg: ['#FDF2F8', '#FBCFE8'],
        visual: '📈⚡',
        text: '변동성이 크지만 기회도 커요.\n실제로 카카오·셀트리온도 코스닥 출신이에요!',
        realWorld: {
          label: '증권 앱에서는',
          desc: '홈 화면에 코스피 옆에 코스닥 지수도 함께 표시돼요',
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
        text: '최민석 선배가 말해요.\n"하루 주가를 딱 한 눈에 기록하는 방법이 있어."',
      },
      {
        bg: ['#DBEAFE', '#BFDBFE'],
        visual: '🕯️4️⃣',
        text: '"시작 가격(시가), 최고(고가), 최저(저가),\n마감(종가) 4개를 양초 모양으로 표현한 거야."',
        deepDive: {
          title: '캔들 4가지 가격 자세히 보기',
          items: [
            {
              label: '시가 (始價, Open)',
              desc: '그날 주식 시장이 열렸을 때 처음 거래된 가격. 한국 주식 시장은 오전 9시에 열려요.',
            },
            {
              label: '고가 (高價, High)',
              desc: '그날 가장 높게 거래된 가격. 캔들 위로 뻗은 "윗꼬리"의 끝이 고가예요.',
            },
            {
              label: '저가 (低價, Low)',
              desc: '그날 가장 낮게 거래된 가격. 캔들 아래로 뻗은 "아래꼬리"의 끝이 저가예요.',
            },
            {
              label: '종가 (終價, Close)',
              desc: '오후 3시 30분 시장 마감 시 마지막으로 거래된 가격. 다음날 시가에 영향을 줘요.',
            },
          ],
        },
      },
      {
        bg: ['#D1FAE5', '#86EFAC'],
        visual: '🔴🔵',
        text: '한국 앱 기준: 빨강 캔들 = 오늘 올랐어요 📈\n파랑 캔들 = 오늘 내렸어요 📉',
        deepDive: {
          title: '한국 vs 해외 색상 차이',
          items: [
            {
              label: '한국 증권 앱 — 빨강이 상승',
              desc: '국내 HTS/MTS는 빨강=상승(양봉), 파랑=하락(음봉)이에요. 미국이랑 정반대라 처음엔 헷갈려요.',
            },
            {
              label: '해외 차트 — 초록이 상승',
              desc: '미국 차트 앱(트레이딩뷰 등)은 초록=상승, 빨강=하락이에요. 같은 주식도 플랫폼마다 색이 달라 보여요.',
            },
            {
              label: '꼬리(심지)의 의미',
              desc: '꼬리가 길수록 그날 가격 변동이 극적이었다는 뜻이에요. 윗꼬리가 길면 고점에서 팔려는 세력이 있다는 신호예요.',
            },
          ],
        },
      },
      {
        bg: ['#EDE9FE', '#C4B5FD'],
        visual: '📊✨',
        text: '"캔들을 며칠치 이어 보면\n주가가 어느 방향으로 흐르는지 보여." — 최민석',
        realWorld: {
          label: '증권 앱에서는',
          desc: '종목 차트 화면에서 1일봉/주봉/월봉을 선택해서 볼 수 있어요',
          mockup: 'chart',
        },
        deepDive: {
          title: '캔들 패턴 읽기 입문',
          items: [
            {
              label: '장대 양봉 (긴 빨간 캔들)',
              desc: '몸통이 길고 꼬리가 짧은 강력한 양봉. 매수세가 압도적이었다는 뜻 — 추세 전환 신호일 수 있어요.',
            },
            {
              label: '도지 (Doji)',
              desc: '시가와 종가가 거의 같아 몸통이 아주 얇은 캔들. 매수와 매도 세력이 팽팽히 맞선 상태 — 방향 전환 전에 자주 나타나요.',
            },
            {
              label: '거래량도 함께 봐야 해요',
              desc: '캔들 아래 막대(거래량)가 클수록 신뢰도가 높아요. 거래량 없이 주가만 오른 건 지속성이 낮아요.',
            },
            {
              label: '1일봉 · 주봉 · 월봉',
              desc: '1일봉은 하루치, 주봉은 1주일치, 월봉은 1달치 데이터를 캔들 하나에 담아요. 장기 흐름 볼 땐 월봉을 봐요.',
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
        visual: '📰📈',
        text: '서준이 회사가 미국 빅테크와 파트너십 체결!\n뉴스가 나오자 주가가 폭발적으로 치솟았어요.',
      },
      {
        bg: ['#DBEAFE', '#93C5FD'],
        visual: '🔝⛔',
        text: '하지만 하루에 너무 많이 오르면\n투자자 보호를 위해 +30%에서 멈춰요.',
      },
      {
        bg: ['#D1FAE5', '#6EE7B7'],
        visual: '🎯',
        text: '하루 상승 한계인 +30%에 딱 닿은 것 —\n이게 상한가예요! 상한가 종목엔 "상"자 표시가 떠요.',
        realWorld: {
          label: '증권 앱에서는',
          desc: '상한가 도달 시 빨간 "상" 배지와 함께 +30% 수익률이 표시돼요',
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
        text: '갑작스러운 분식회계 의혹 뉴스!\n서준이 회사 주가가 장 시작 직후부터 폭락했어요.',
      },
      {
        bg: ['#DBEAFE', '#BFDBFE'],
        visual: '🛡️⛔',
        text: '그래도 하루에 -30% 이상은 내려가지 않아요.\n시장 붕괴를 막는 안전장치가 있거든요.',
      },
      {
        bg: ['#D1FAE5', '#6EE7B7'],
        visual: '🛡️✅',
        text: '하루 하락 한계인 -30%에 닿은 것 = 하한가\n투자자의 손실을 제한하는 중요한 제도예요.',
        realWorld: {
          label: '증권 앱에서는',
          desc: '하한가 도달 시 파란 "하" 배지와 함께 -30% 수익률이 표시돼요',
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
        visual: '🤔💭',
        text: '현우가 물었어요. "A 회사 주가 3만원, B 회사 주가 1만원.\nB가 더 싼 거 맞아?"',
      },
      {
        bg: ['#DBEAFE', '#93C5FD'],
        visual: '🧮➗',
        text: '최민석 선배: "주가만 보면 안 돼. PER로 비교해야지.\nPER = 주가 ÷ 주당 순이익"',
      },
      {
        bg: ['#EDE9FE', '#C4B5FD'],
        visual: '📉✅',
        text: 'A사 PER 8 vs B사 PER 35\nA사가 이익 대비 주가가 훨씬 저렴한 거예요!',
      },
      {
        bg: ['#D1FAE5', '#6EE7B7'],
        visual: '⚖️💡',
        text: '단, 반드시 같은 업종끼리 비교해야 해요.\nIT 기업 PER 30과 금융주 PER 8은 직접 비교 불가예요.',
        realWorld: {
          label: '증권 앱에서는',
          desc: '종목 상세 화면 "투자지표" 탭에서 PER을 확인할 수 있어요',
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
        visual: '🏢💰',
        text: '서준이 회사가 올해\n순이익 50억 원을 기록했어요.',
      },
      {
        bg: ['#DBEAFE', '#BFDBFE'],
        visual: '💰➗📋',
        text: '총주식 수가 100만 주라면\n1주당 이익 = 50억 ÷ 100만 = 5,000원',
      },
      {
        bg: ['#D1FAE5', '#6EE7B7'],
        visual: '📈💡',
        text: 'EPS가 매년 꾸준히 오르는 회사 = 실적이 성장하는 회사\n→ 좋은 투자 후보가 될 수 있어요!',
        realWorld: {
          label: '증권 앱에서는',
          desc: 'PER 화면 옆에 EPS(주당순이익)가 함께 표시돼요',
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
        text: '지은이가 처음 주식 앱을 켰어요.\n"빨간 막대랑 파란 막대는 뭐가 달라요?"',
      },
      {
        bg: ['#FFEAEA', '#FCA5A5'],
        visual: '🟥📈',
        text: '"빨간 캔들 = 오늘 종가가 시가보다 높다는 뜻이야.\n한국 앱에선 빨강이 상승을 나타내." — 최민석',
        realWorld: {
          desc: '차트에서 빨간 막대(양봉)가 많은 구간이 강세장이에요',
          mockup: 'chart',
        },
      },
      {
        bg: ['#D1FAE5', '#6EE7B7'],
        visual: '💪🟥',
        text: '몸통이 길수록 강한 상승 신호!\n꼬리 없이 긴 몸통 = "장대 양봉", 강한 매수세의 증거예요.',
        deepDive: {
          title: '양봉 패턴 더 알아보기',
          items: [
            {
              label: '장대 양봉',
              desc: '몸통이 매우 길고 꼬리가 짧거나 없는 양봉. 세력(기관·외국인)이 강하게 매수했다는 신호로 자주 해석해요.',
            },
            {
              label: '위꼬리 달린 양봉',
              desc: '몸통은 있지만 위로 긴 꼬리가 달려 있어요. 올라가려다 저항을 받은 것 — 다음날 조정 가능성이 있어요.',
            },
            {
              label: '도지 (십자형)',
              desc: '시가와 종가가 거의 같아 몸통이 아주 얇은 캔들. 매수와 매도세가 팽팽히 맞서 추세 전환이 임박했을 때 나타나요.',
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
        text: '"그럼 파란 캔들은요?" — 지은\n"오늘 종가가 시가보다 낮다는 뜻. 즉 하락한 날." — 최민석',
      },
      {
        bg: ['#EDE9FE', '#C4B5FD'],
        visual: '🌍🔄',
        text: '주의! 해외 차트(미국·유럽)는 색이 반대예요.\n미국 앱은 초록=상승, 빨강=하락이에요.',
      },
      {
        bg: ['#FEF9C3', '#FDE68A'],
        visual: '⚠️🟦🟦🟦',
        text: '음봉이 거래량과 함께 3일 연속 나오면\n하락 추세가 시작됐다는 경고 신호예요.',
        deepDive: {
          title: '음봉이 나왔을 때 체크리스트',
          items: [
            {
              label: '거래량은 얼마나?',
              desc: '거래량 없이 조금 빠진 음봉은 덜 위험해요. 거래량이 급증한 음봉은 기관/외국인 매도일 가능성이 높아요.',
            },
            {
              label: '연속 음봉 3개 이상',
              desc: '3일 이상 음봉이 연속되면 추세적 하락일 가능성이 높아요. 손절 기준을 다시 점검할 시점이에요.',
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
        text: '"차트 아래 이 막대기들은 뭐예요?" — 지은\n"그게 거래량이야. 오늘 얼마나 많이 사고팔았는지." — 최민석',
      },
      {
        bg: ['#FEF3C7', '#FDE68A'],
        visual: '🚀📊',
        text: '"평소의 5배 넘는 거래량이 터졌어?"\n그건 큰 뉴스 또는 세력 개입의 신호예요!',
        realWorld: {
          desc: '차트 하단 거래량 막대가 유독 크게 솟은 날 — 뉴스를 꼭 확인해보세요',
          mockup: 'chart',
        },
      },
      {
        bg: ['#D1FAE5', '#6EE7B7'],
        visual: '📊+📈=✅',
        text: '거래량 많은 상승 = 믿을 수 있는 상승\n거래량 없는 상승 = 지속성 낮으니 주의!',
        deepDive: {
          title: '거래량으로 주가 움직임 해석하기',
          items: [
            {
              label: '거래량 ↑ + 주가 ↑',
              desc: '강력한 매수 신호. 많은 참여자가 이 가격에 동의하며 매수하고 있다는 의미예요.',
            },
            {
              label: '거래량 ↓ + 주가 ↑',
              desc: '거래 참여자가 적은데 오르는 것. 실제 수요가 없을 수 있어요 — 쉽게 빠질 수 있어요.',
            },
            {
              label: '거래량 ↑ + 주가 ↓',
              desc: '강력한 매도 신호. 기관이나 외국인이 대량 매도하고 있을 가능성이 높아요.',
            },
            {
              label: '20일 평균 거래량과 비교',
              desc: '오늘 거래량이 20일 평균의 2배 이상이면 주목할 만한 움직임이에요. 증권 앱에서 평균 거래량 표시를 켜보세요.',
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
        text: '최민석 선배가 차트를 보여줬어요.\n"이 부드러운 선들이 이동평균선이야."',
      },
      {
        bg: ['#DBEAFE', '#93C5FD'],
        visual: '5️⃣📅2️⃣0️⃣📅',
        text: '"5일선 = 최근 5일 종가의 평균\n20일선 = 최근 한 달 평균이야."',
      },
      {
        bg: ['#D1FAE5', '#6EE7B7'],
        visual: '✨🥇',
        text: '"5일선이 20일선 위로 올라오는 순간,\n그게 골든크로스 — 상승 추세 전환 신호야."',
        realWorld: {
          desc: '차트에서 두 선이 교차하는 시점을 찾아보세요 — 중요한 매매 참고 신호예요',
          mockup: 'chart',
        },
        deepDive: {
          title: '이동평균선 실전 활용',
          items: [
            {
              label: '골든크로스 (매수 신호)',
              desc: '단기선(5일)이 장기선(20일) 위로 올라오는 것. 상승 추세로 전환하는 대표적 신호예요.',
            },
            {
              label: '데드크로스 (매도 주의)',
              desc: '단기선이 장기선 아래로 내려가는 것. 하락 추세 전환 신호 — 보유 종목의 손절 여부를 고려해야 해요.',
            },
            {
              label: '120일선 (장기 추세)',
              desc: '6개월치 평균인 120일선은 장기 추세를 나타내요. 주가가 120일선 위에 있으면 장기 우상향 중인 거예요.',
            },
            {
              label: '이평선이 지지·저항선 역할',
              desc: '주가가 이동평균선에 닿으면 반등하거나 막히는 경우가 많아요. 이평선 위에서 눌림목은 매수 기회로 보기도 해요.',
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
        text: '현우가 12,000원에 산 주식이\n8,400원으로 내려갔어요. (-30%) 😱',
      },
      {
        bg: ['#FEF3C7', '#FDE68A'],
        visual: '🤔💭',
        text: '"조금만 기다리면 오르겠지..."\n최민석 선배: "그 생각이 가장 위험해."',
      },
      {
        bg: ['#D1FAE5', '#6EE7B7'],
        visual: '✂️🛡️',
        text: '매수 전에 "-10% 되면 무조건 판다"고\n미리 기준을 정하는 게 손절의 핵심이에요.',
        deepDive: {
          title: '손절을 잘 하는 방법',
          items: [
            {
              label: '매수 전에 손절 기준 정하기',
              desc: '"이 주식은 -7% 되면 무조건 판다"고 규칙을 만드세요. 감정 없이 기계적으로 실행하는 게 핵심이에요.',
            },
            {
              label: '-10% 법칙',
              desc: '초보 투자자에게 자주 권장되는 기준. 10% 이상 손해가 나면 즉시 파는 것. 대형 손실을 막아주는 가장 확실한 방법이에요.',
            },
            {
              label: '손절 후 재매수도 전략',
              desc: '팔고 나서 주가가 반등해도 괜찮아요. 손절 당시 내 판단은 틀리지 않았어요. 손절은 리스크 관리지 실패가 아니에요.',
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
        text: '지은이가 7,000원에 산 주식이\n9,800원이 됐어요! (+40%) 🎉',
      },
      {
        bg: ['#FEF9C3', '#FDE68A'],
        visual: '😤💭',
        text: '"10,000원은 가겠지..." 하다가\n다음날 9,000원으로 떨어졌어요. 😢',
      },
      {
        bg: ['#FDF2F8', '#FBCFE8'],
        visual: '🎯💰',
        text: '"수익은 팔아야 진짜 내 돈이야."\n매수 전에 목표 수익률을 미리 정해두는 게 답이에요.',
        deepDive: {
          title: '익절 잘 하는 법',
          items: [
            {
              label: '목표 수익률 미리 정하기',
              desc: '"이 주식은 +25% 되면 판다"고 매수 시점에 정해두세요. 탐욕에 흔들리지 않는 가장 좋은 방법이에요.',
            },
            {
              label: '분할 매도 전략',
              desc: '+20%에서 절반 팔고, 나머지를 더 보유하는 것. 이익도 챙기면서 추가 상승도 놓치지 않는 균형 잡힌 방법이에요.',
            },
            {
              label: '"완벽한 꼭지"를 찾지 마세요',
              desc: '최고점에서 파는 건 신도 모른다고 해요. 충분한 수익에서 팔고 다음 기회를 찾는 게 장기적으로 더 이익이에요.',
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
        text: '"계란을 한 바구니에 담지 마라."\n워런 버핏도 강조한 투자의 첫 번째 원칙이에요.',
      },
      {
        bg: ['#DBEAFE', '#93C5FD'],
        visual: '🌈💼',
        text: '현우: "IT 주식만 샀는데..."\n최민석: "반도체 폭락하면 전 재산이 위험해. IT·금융·바이오로 나눠야 해."',
      },
      {
        bg: ['#D1FAE5', '#6EE7B7'],
        visual: '🛡️✅',
        text: '10개 종목 중 1개가 망해도\n나머지 9개가 지켜줘요. 한 종목에 10~20% 이하로!',
        deepDive: {
          title: '분산투자 실전 가이드',
          items: [
            {
              label: '업종 분산',
              desc: 'IT, 금융, 헬스케어, 소비재 등 다양한 업종에 투자해요. 한 업종이 침체해도 다른 업종이 버텨줄 수 있어요.',
            },
            {
              label: '국가 분산',
              desc: '한국 주식만 갖지 말고 미국(S&P500 ETF), 유럽 등 다양한 나라에도 투자하면 특정 국가 리스크를 줄일 수 있어요.',
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
        text: '"지금 당장 이 회사를 청산하면\n주주들이 얼마씩 받을 수 있을까?" — 최민석',
      },
      {
        bg: ['#DBEAFE', '#93C5FD'],
        visual: '📚÷💰',
        text: 'PBR = 주가 ÷ 주당 순자산\nPBR 1 미만 = 주가가 순자산보다 낮다 = 이론적 저평가!',
        realWorld: {
          desc: '종목 상세 화면 투자지표 탭에서 PER 바로 옆에 PBR이 표시돼요',
          mockup: 'per-eps',
        },
      },
      {
        bg: ['#D1FAE5', '#6EE7B7'],
        visual: '⚠️💡',
        text: '단, IT·플랫폼 기업은 PBR이 높아도 괜찮아요.\n특허·브랜드·데이터 등 무형자산이 크기 때문이에요.',
        deepDive: {
          title: 'PBR 실전 해석',
          items: [
            {
              label: 'PBR 1 미만 (저평가?)',
              desc: '지금 주가가 회사 순자산보다 낮아요. 이론적으로 청산 시 이익인 상태. 가치주 투자자들이 주목해요.',
            },
            {
              label: '은행·제조업 → PBR 중요',
              desc: '자산이 많은 업종은 PBR로 저평가 여부를 잘 판단할 수 있어요. 은행주 PBR 0.5 이하면 저평가 신호예요.',
            },
            {
              label: 'IT·플랫폼 → PBR 높아도 OK',
              desc: '네이버·카카오 같은 기업은 특허·브랜드·데이터 같은 무형자산이 커서 PBR이 높아도 과열이 아닐 수 있어요.',
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
        text: '"1억으로 2천만원 버는 회사 A\nvs 10억으로 2천만원 버는 회사 B — 어느 게 더 효율적이야?"',
      },
      {
        bg: ['#DBEAFE', '#BFDBFE'],
        visual: '🧮📊',
        text: 'ROE = 순이익 ÷ 자기자본 × 100\nA사 ROE 20% vs B사 ROE 2% → A가 압도적으로 효율적!',
        realWorld: {
          desc: '증권 앱 기업분석 화면에서 ROE 항목을 찾아보세요',
          mockup: 'per-eps',
        },
      },
      {
        bg: ['#D1FAE5', '#6EE7B7'],
        visual: '🏆✅',
        text: '"워런 버핏은 ROE 15% 이상을\n3년 이상 유지한 기업만 투자 후보로 봐." — 최민석',
        deepDive: {
          title: 'ROE 실전 활용법',
          items: [
            {
              label: 'ROE 15% 이상이 기준',
              desc: '워런 버핏이 제시한 우량 기업 기준. 3년 이상 꾸준히 15% 이상을 유지하면 탄탄한 수익 구조를 가진 기업이에요.',
            },
            {
              label: '부채가 많으면 ROE도 높아져요',
              desc: 'ROE가 비정상적으로 높다면(30%+) 빚을 많이 써서 숫자가 부풀려진 건지 확인이 필요해요. 부채비율도 같이 봐야 해요.',
            },
            {
              label: '동종 업계 비교 필수',
              desc: '은행업은 ROE 8~10%도 좋은 편이고, 소프트웨어 기업은 20~40%도 가능해요. 항상 같은 업종끼리 비교하세요.',
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
        text: '"주식 들고만 있어도 매년 돈이 들어온다고요?" — 지은\n"응, 그게 배당이야. 배당수익률로 얼마나 주는지 봐." — 최민석',
      },
      {
        bg: ['#DBEAFE', '#93C5FD'],
        visual: '💧÷💰',
        text: '배당수익률 = 주당배당금 ÷ 주가 × 100\n주가 50,000원, 연 배당 1,500원 → 배당수익률 3%',
        realWorld: {
          desc: '증권 앱 배당 탭에서 배당금 수령 내역과 배당수익률을 확인할 수 있어요',
          mockup: 'dividend',
        },
      },
      {
        bg: ['#D1FAE5', '#6EE7B7'],
        visual: '🏦📊',
        text: '예금 금리(3~4%)보다 높으면 매력적!\n단, 배당수익률이 너무 높으면(6%+) 재무 위험 신호일 수 있어요.',
        deepDive: {
          title: '배당주 투자 전략',
          items: [
            {
              label: '배당수익률 2~4% = 양호',
              desc: '2025~2026년 기준 예금 금리 3~4%와 비교해요. 배당수익률이 예금 금리 이상이면 주가 상승 기대까지 있어 더 매력적이에요.',
            },
            {
              label: '배당수익률 6% 이상 = 주의',
              desc: '너무 높은 배당수익률은 주가가 많이 빠졌거나 회사 재정이 불안하다는 신호일 수 있어요. 지속 가능한지 꼭 확인하세요.',
            },
            {
              label: '배당 기준일 확인 필수',
              desc: '배당을 받으려면 배당기준일에 주식을 보유하고 있어야 해요. 주로 12월 말이 기준일이고 4월경에 입금돼요.',
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
