// 씨앗별 RPG 분기 스토리 데이터
// 구조: step1(문제) -> choice A/B -> step2(변화) -> choice A/B -> step3(변화) -> 수렴 엔딩
// path는 선택의 조합(예: "AA","AB","BA","BB")으로 엔딩 카드의 개인화 문장을 결정함.

export const STORIES = {
  agriculture: {
    step1: {
      situation:
        "올해도 비가 오지 않아 마을 논밭이 바짝 말라가요. 당신의 씨앗은 무엇부터 도울까요?",
      choices: [
        { id: "A", label: "물을 구할 방법을 먼저 찾아요", next: "water" },
        { id: "B", label: "가뭄에도 강한 작물을 함께 심어요", next: "seedling" },
      ],
    },
    step2: {
      water: {
        text: "마을 어귀에 작은 저수 시설이 생기자, 마른 논에 다시 물줄기가 흘러들어요.",
        situation: "이제 물은 충분해졌어요. 이 물을 어떻게 나눌까요?",
        choices: [
          { id: "A", label: "농가마다 순서를 정해 나눠요", next: "share" },
          { id: "B", label: "함께 쓰는 공동 농지부터 적셔요", next: "common" },
        ],
      },
      seedling: {
        text: "새로 나눠준 품종이 마른 땅에서도 뿌리를 내리며 첫 잎을 펼쳐요.",
        situation: "첫 수확이 다가와요. 이 수확물을 어떻게 할까요?",
        choices: [
          { id: "A", label: "각 농가가 거둔 만큼 가져가요", next: "share" },
          { id: "B", label: "마을 창고에 모아 함께 나눠요", next: "common" },
        ],
      },
    },
    step3: {
      share: {
        text: "농가마다 형편에 맞게 물과 수확을 나누면서, 마을 농업에 대한 믿음이 자라요.",
        situation: "다음 해를 위해 무엇을 남길까요?",
        choices: [
          { id: "A", label: "이 경험을 기록해 다음 농가에 전해요", next: "end" },
          { id: "B", label: "협동조합을 만들어 함께 운영해요", next: "end" },
        ],
      },
      common: {
        text: "공동 농지에서 거둔 수확을 함께 나누며, 마을 사람들이 처음으로 한자리에 모여요.",
        situation: "다음 해를 위해 무엇을 남길까요?",
        choices: [
          { id: "A", label: "이 경험을 기록해 다음 농가에 전해요", next: "end" },
          { id: "B", label: "협동조합을 만들어 함께 운영해요", next: "end" },
        ],
      },
    },
    endingByPath: {
      AA: "물을 나누며 쌓인 신뢰가, 기록으로 다음 세대 농가에 전해졌어요.",
      AB: "물을 나누던 마을 사람들이 이제는 협동조합으로 함께 농사를 지어요.",
      BA: "함께 거둔 수확의 기억이 글로 남아 다음 농가의 길잡이가 되었어요.",
      BB: "공동 농지에서 시작된 나눔이 어느새 마을 협동조합으로 자라났어요.",
    },
  },

  health: {
    step1: {
      situation:
        "마을에 병원이 없어, 아이들이 작은 열에도 먼 길을 가야 해요. 당신의 씨앗은 무엇부터 도울까요?",
      choices: [
        { id: "A", label: "마을에 작은 보건소를 짓는다", next: "clinic" },
        { id: "B", label: "마을 사람을 보건요원으로 교육한다", next: "worker" },
      ],
    },
    step2: {
      clinic: {
        text: "마을 어귀에 작은 보건소가 문을 열고, 처음으로 진료 받는 줄이 생겨요.",
        situation: "보건소를 어떻게 운영할까요?",
        choices: [
          { id: "A", label: "예방접종부터 시작해요", next: "prevent" },
          { id: "B", label: "응급 처치를 우선해요", next: "emergency" },
        ],
      },
      worker: {
        text: "마을에서 뽑힌 보건요원이 기본 응급처치와 위생 교육을 배워 와요.",
        situation: "배운 것을 어떻게 나눌까요?",
        choices: [
          { id: "A", label: "예방접종부터 알려요", next: "prevent" },
          { id: "B", label: "응급 처치법을 먼저 알려요", next: "emergency" },
        ],
      },
    },
    step3: {
      prevent: {
        text: "예방접종을 받은 아이들이 늘어나며, 마을에 큰 병이 도는 일이 줄어들어요.",
        situation: "이 변화를 계속 지키려면 무엇이 필요할까요?",
        choices: [
          { id: "A", label: "정기 건강 검진을 약속해요", next: "end" },
          { id: "B", label: "다음 세대 보건요원을 키워요", next: "end" },
        ],
      },
      emergency: {
        text: "응급 처치를 배운 사람들 덕분에, 위급한 순간에도 더는 멀리까지 뛰지 않아도 돼요.",
        situation: "이 변화를 계속 지키려면 무엇이 필요할까요?",
        choices: [
          { id: "A", label: "정기 건강 검진을 약속해요", next: "end" },
          { id: "B", label: "다음 세대 보건요원을 키워요", next: "end" },
        ],
      },
    },
    endingByPath: {
      AA: "예방접종으로 시작된 변화가, 이제는 정기 검진으로 마을을 지켜요.",
      AB: "예방의 힘을 본 마을이 다음 세대 보건요원을 스스로 키워내고 있어요.",
      BA: "위급한 순간을 넘긴 마을이, 이제는 정기 검진으로 미리 대비해요.",
      BB: "응급처치를 배운 한 사람이, 또 다른 보건요원을 길러내고 있어요.",
    },
  },

  environment: {
    step1: {
      situation:
        "마을 뒷산의 나무가 줄어들고, 강물이 점점 흐려지고 있어요. 당신의 씨앗은 무엇부터 도울까요?",
      choices: [
        { id: "A", label: "나무를 다시 심는다", next: "forest" },
        { id: "B", label: "깨끗한 물 시설을 만든다", next: "water" },
      ],
    },
    step2: {
      forest: {
        text: "마을 사람들과 함께 심은 어린 나무들이 뒷산에 줄지어 자라기 시작해요.",
        situation: "이 작은 숲을 어떻게 지킬까요?",
        choices: [
          { id: "A", label: "나무를 돌볼 당번을 정해요", next: "care" },
          { id: "B", label: "아이들에게 숲의 가치를 가르쳐요", next: "teach" },
        ],
      },
      water: {
        text: "마을에 정수 시설이 생기면서, 처음으로 맑은 물을 떠 마실 수 있게 됐어요.",
        situation: "이 물을 어떻게 지킬까요?",
        choices: [
          { id: "A", label: "시설을 돌볼 당번을 정해요", next: "care" },
          { id: "B", label: "아이들에게 물의 가치를 가르쳐요", next: "teach" },
        ],
      },
    },
    step3: {
      care: {
        text: "돌아가며 돌보는 사람들 덕분에, 작은 변화가 꾸준히 이어지고 있어요.",
        situation: "다음 세대에게 무엇을 남길까요?",
        choices: [
          { id: "A", label: "환경 지킴이 모임을 만들어요", next: "end" },
          { id: "B", label: "학교에서 환경 수업을 시작해요", next: "end" },
        ],
      },
      teach: {
        text: "환경의 가치를 배운 아이들이, 어른보다 먼저 마을을 지키기 시작해요.",
        situation: "다음 세대에게 무엇을 남길까요?",
        choices: [
          { id: "A", label: "환경 지킴이 모임을 만들어요", next: "end" },
          { id: "B", label: "학교에서 환경 수업을 시작해요", next: "end" },
        ],
      },
    },
    endingByPath: {
      AA: "당번을 정해 지켜온 변화가, 마을 환경 지킴이 모임으로 자라났어요.",
      AB: "꾸준히 돌본 마음이, 이제는 학교 환경 수업으로 이어지고 있어요.",
      BA: "가치를 배운 아이들이 자라, 환경 지킴이 모임을 직접 만들었어요.",
      BB: "아이들의 배움이 학교 수업이 되어, 마을 전체로 퍼지고 있어요.",
    },
  },

  technology: {
    step1: {
      situation:
        "마을에 인터넷이 없어, 바깥 소식도 시장 가격도 알기 어려워요. 당신의 씨앗은 무엇부터 도울까요?",
      choices: [
        { id: "A", label: "통신 인프라부터 연결한다", next: "infra" },
        { id: "B", label: "디지털 사용법을 먼저 교육한다", next: "literacy" },
      ],
    },
    step2: {
      infra: {
        text: "마을에 처음으로 인터넷이 연결되고, 화면 속 세상이 마을에 들어와요.",
        situation: "이 연결을 어디에 먼저 쓸까요?",
        choices: [
          { id: "A", label: "농작물 시장 가격을 확인해요", next: "market" },
          { id: "B", label: "마을 행정 정보를 공유해요", next: "admin" },
        ],
      },
      literacy: {
        text: "처음 스마트폰을 손에 쥔 주민들이, 화면을 누르는 법부터 배워가요.",
        situation: "배운 기술을 어디에 먼저 쓸까요?",
        choices: [
          { id: "A", label: "농작물 시장 가격을 확인해요", next: "market" },
          { id: "B", label: "마을 행정 정보를 공유해요", next: "admin" },
        ],
      },
    },
    step3: {
      market: {
        text: "시장 가격을 미리 알게 된 농가들이, 더 나은 시기에 수확물을 팔 수 있게 됐어요.",
        situation: "이 변화를 마을 전체로 넓히려면?",
        choices: [
          { id: "A", label: "마을 디지털 교육센터를 만들어요", next: "end" },
          { id: "B", label: "이웃 마을과 정보를 나눠요", next: "end" },
        ],
      },
      admin: {
        text: "행정 정보가 휴대폰으로 전달되면서, 더는 먼 길을 걷지 않고도 소식을 들어요.",
        situation: "이 변화를 마을 전체로 넓히려면?",
        choices: [
          { id: "A", label: "마을 디지털 교육센터를 만들어요", next: "end" },
          { id: "B", label: "이웃 마을과 정보를 나눠요", next: "end" },
        ],
      },
    },
    endingByPath: {
      AA: "시장 정보로 시작된 변화가, 마을 디지털 교육센터로 이어졌어요.",
      AB: "더 나은 거래를 경험한 마을이, 이웃 마을과도 정보를 나누고 있어요.",
      BA: "빨라진 행정 소식이, 이제는 디지털 교육센터로 마을에 뿌리내렸어요.",
      BB: "연결의 힘을 느낀 마을이, 이웃 마을까지 정보를 나누고 있어요.",
    },
  },

  education: {
    step1: {
      situation:
        "학교가 너무 멀어서, 마을 아이들 절반이 학교에 가지 못해요. 당신의 씨앗은 무엇부터 도울까요?",
      choices: [
        { id: "A", label: "마을 가까이에 교실을 만든다", next: "classroom" },
        { id: "B", label: "마을에 선생님을 보낸다", next: "teacher" },
      ],
    },
    step2: {
      classroom: {
        text: "마을 어귀에 작은 교실이 생기고, 처음으로 아이들이 책상 앞에 모여 앉아요.",
        situation: "이 교실에 무엇이 더 필요할까요?",
        choices: [
          { id: "A", label: "책과 교재를 보내요", next: "books" },
          { id: "B", label: "디지털 학습 기기를 보내요", next: "digital" },
        ],
      },
      teacher: {
        text: "새로 온 선생님과 함께, 마을 아이들의 첫 수업이 시작돼요.",
        situation: "수업에 무엇이 더 필요할까요?",
        choices: [
          { id: "A", label: "책과 교재를 보내요", next: "books" },
          { id: "B", label: "디지털 학습 기기를 보내요", next: "digital" },
        ],
      },
    },
    step3: {
      books: {
        text: "처음 손에 쥔 책으로, 아이들이 스스로 글을 읽어내기 시작해요.",
        situation: "이 배움을 어떻게 이어갈까요?",
        choices: [
          { id: "A", label: "마을 도서관을 만들어요", next: "end" },
          { id: "B", label: "졸업생이 후배를 가르치게 해요", next: "end" },
        ],
      },
      digital: {
        text: "화면 속 수업 영상으로, 아이들이 더 넓은 세상의 지식을 만나요.",
        situation: "이 배움을 어떻게 이어갈까요?",
        choices: [
          { id: "A", label: "마을 도서관을 만들어요", next: "end" },
          { id: "B", label: "졸업생이 후배를 가르치게 해요", next: "end" },
        ],
      },
    },
    endingByPath: {
      AA: "처음 읽은 책이 모여, 마을에 작은 도서관이 생겼어요.",
      AB: "글을 깨친 아이가 자라, 이제는 후배를 가르치고 있어요.",
      BA: "화면으로 배운 지식이, 마을 도서관의 책장으로 옮겨왔어요.",
      BB: "디지털로 배운 첫 졸업생이, 후배들의 첫 선생님이 되었어요.",
    },
  },
};

export const getStoryBySeed = (seedId) => STORIES[seedId];
