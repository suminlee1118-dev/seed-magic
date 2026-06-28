// 씨앗(분야) 마스터 데이터
// 각 씨앗 = 하나의 분야(관심사+전공군)를 상징.
// id는 라우팅과 스토리/사례 데이터를 연결하는 키이므로 변경 시 다른 파일도 함께 수정해야 함.

export const SEEDS = [
  {
    id: "agriculture",
    emoji: "🌱",
    name: "농업의 씨앗",
    tagline: "땅과 사람을 함께 키우는 마음",
    interestPrompt: "식량과 농촌이 궁금해요",
    revealLine: "당신의 관심사는… 농업의 씨앗이었네요.",
    description:
      "가뭄과 흉작 앞에서도 땅을 포기하지 않는 마음. 작은 농경지를 살리는 기술 하나가 한 마을의 식탁을 통째로 바꿀 수 있어요.",
    relatedMajors: ["농업경제학", "식품영양학", "축산학", "농촌사회학", "원예학"],
    theme: {
      base: "#5B7B3F",
      light: "#E7EFDC",
      dark: "#33491F",
      gradient: "linear-gradient(160deg, #3C5A26 0%, #5B7B3F 55%, #8FAE63 100%)",
    },
    endingTitle: "마을의 식탁을 바꿨어요",
  },
  {
    id: "health",
    emoji: "❤️",
    name: "보건의 씨앗",
    tagline: "생명을 가장 먼저 돌보는 마음",
    interestPrompt: "사람들의 건강이 궁금해요",
    revealLine: "당신의 관심사는… 보건의 씨앗이었네요.",
    description:
      "작은 보건소 하나, 한 명의 보건요원이 한 마을 아이들의 생존율을 바꿉니다. 돌봄은 가장 직접적인 변화의 시작이에요.",
    relatedMajors: ["간호학", "보건행정학", "의학", "공공보건학", "임상병리학"],
    theme: {
      base: "#C9505C",
      light: "#FBE5E7",
      dark: "#8F2F39",
      gradient: "linear-gradient(160deg, #7A2530 0%, #C9505C 55%, #E69098 100%)",
    },
    endingTitle: "마을의 생명을 지켰어요",
  },
  {
    id: "environment",
    emoji: "🌍",
    name: "환경의 씨앗",
    tagline: "지구와 공존하는 마음",
    interestPrompt: "환경과 기후가 궁금해요",
    revealLine: "당신의 관심사는… 환경의 씨앗이었네요.",
    description:
      "줄어드는 숲과 더러워지는 물 앞에서, 다음 세대의 공기를 먼저 생각하는 마음. 환경을 지키는 일은 곧 사람을 지키는 일이에요.",
    relatedMajors: ["환경공학", "지리학", "에너지공학", "생태학", "산림자원학"],
    theme: {
      base: "#2E8B7E",
      light: "#DDF0EC",
      dark: "#1A554C",
      gradient: "linear-gradient(160deg, #134A41 0%, #2E8B7E 55%, #76C2B6 100%)",
    },
    endingTitle: "마을의 공기와 물을 바꿨어요",
  },
  {
    id: "technology",
    emoji: "💻",
    name: "기술의 씨앗",
    tagline: "연결과 효율을 만드는 마음",
    interestPrompt: "기술과 혁신이 궁금해요",
    revealLine: "당신의 관심사는… 기술의 씨앗이었네요.",
    description:
      "종이 더미 속에 묻혀 있던 기록 하나. 기술은 오래 걸리던 일을 순식간에 끝내는 가장 확실한 도구가 될 수 있어요.",
    relatedMajors: ["컴퓨터공학", "산업공학", "데이터과학", "디자인", "전자공학"],
    theme: {
      base: "#3D6FB4",
      light: "#E1EBF8",
      dark: "#234373",
      gradient: "linear-gradient(160deg, #1E3A63 0%, #3D6FB4 55%, #7FAEE3 100%)",
    },
    endingTitle: "마을의 기다림을 줄였어요",
  },
  {
    id: "education",
    emoji: "📚",
    name: "교육의 씨앗",
    tagline: "배움의 기회를 나누는 마음",
    interestPrompt: "교육과 성장이 궁금해요",
    revealLine: "당신의 관심사는… 교육의 씨앗이었네요.",
    description:
      "멀어서 닿지 못했던 교실 하나. 배움의 기회가 한 사람에게 닿으면, 그 사람이 다시 마을의 다음 세대를 가르치게 돼요.",
    relatedMajors: ["교육학", "아동학", "사회복지학", "심리학", "초등교육학"],
    theme: {
      base: "#D98E3B",
      light: "#FBEFDC",
      dark: "#8F5A1F",
      gradient: "linear-gradient(160deg, #7A4B16 0%, #D98E3B 55%, #F0BD7C 100%)",
    },
    endingTitle: "마을의 미래를 읽게 했어요",
  },
];

export const getSeedById = (id) => SEEDS.find((s) => s.id === id);

// 관심사 질문 화면에서 사용하는 보기 순서 (SEEDS와 동일 순서, 분리해 둔 이유: 질문 화면 문구는 관심사 언어 우선)
export const INTEREST_OPTIONS = SEEDS.map((s) => ({
  seedId: s.id,
  label: s.interestPrompt,
  emoji: s.emoji,
}));

// 모든 엔딩 화면에 고정으로 들어가는 공통 메시지 (요청사항: 절대 변경되지 않는 핵심 문장)
export const CORE_MESSAGE =
  "ODA는 국제학과만의 것이 아닙니다. 당신의 전공과 관심사가 누군가의 마을을 바꾸는 씨앗이 될 수 있습니다.";
