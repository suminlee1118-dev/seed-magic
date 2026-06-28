// 씨앗별 실제 KOICA / ODA 사례 데이터
//
// 아래 5개 사례는 검색을 통해 확인 가능한 실제 KOICA 사업입니다.
// sourceUrl을 통해 사용자가 직접 출처를 확인할 수 있습니다.
// 단, environment 항목은 사업 자체(KOICA 내부 사후평가보고서, 2018)는 실존이 확인되었으나
// 해당 보고서로의 직접 공개 링크가 없어, 이를 인용한 학술논문 페이지를 출처로 연결했습니다.
// 더 정확한 1차 출처(KOICA ODA 도서관 등)를 찾으면 sourceUrl을 교체해주세요.
//
// 필드 설명:
// - title: 실제 KOICA 사업명
// - country: 사업 대상국
// - year: 사업 연도(또는 기간)
// - summary: 사업 핵심 내용 2~3문장
// - sourceLabel: 출처 표기
// - sourceUrl: 출처 링크 (클릭 가능)

export const ODA_CASES = {
  agriculture: {
    title: "르완다 무심바(Mushimba) 마을 새마을운동 농촌개발 사업",
    country: "르완다",
    year: "2014년~ (현재까지 자립 운영 중)",
    summary:
      "KOICA와 새마을재단이 함께 르완다 무심바 마을에 한국형 농촌개발 모델인 새마을운동을 전수했어요. 주민들은 공동 양어장과 벼농사 협동조합을 직접 운영하며, 공식 지원이 끝난 뒤에도 자립적으로 마을을 발전시키고 있어요.",
    sourceLabel: "KOICA — 새마을운동(통합사업관리)",
    sourceUrl: "http://ocsearch.koica.go.kr/osearch/ksr.do?query=%EC%83%88%EB%A7%88%EC%9D%84%EC%9A%B4%EB%8F%99",
  },
  health: {
    title: "페루 리마 꼬마스구 제2한-페 모자보건센터 개선사업",
    country: "페루",
    year: "2011-2016",
    summary:
      "KOICA와 페루 보건부가 약 320만 달러를 투입해 리마 빈민가 꼬마스 지역에 모자보건센터를 짓고 의료기자재와 보건인력 연수를 지원했어요. 그 결과 27만 명의 주민이 모자보건 혜택을 받게 됐고, 해당 보건소는 리마 북부 45개 보건소 중 진료 건수 3위로 올라섰어요.",
    sourceLabel: "KOICA — 성과사례",
    sourceUrl: "https://koica.go.kr/koica_kr/908/subview.do",
  },
  environment: {
    title: "미얀마 기후변화 대응을 위한 산림분야 역량강화사업",
    country: "미얀마",
    year: "사후평가 2018년 (KOICA 내부 평가보고서 기준)",
    summary:
      "줄어드는 산림을 되살리기 위해 KOICA가 미얀마 현지의 산림 복원과 기후변화 대응 역량강화를 지원한 사업이에요. KOICA는 같은 시기 한-인도네시아, 우즈베키스탄, 에티오피아 등에서도 유사한 산림·기후 대응 사업을 진행해왔어요.",
    sourceLabel: "KOICA 사후평가보고서를 인용한 학술논문(국제개발협력저널)",
    sourceUrl: "https://www.ejidc.org/archive/view_article?pid=jidc-19-1-111",
  },
  technology: {
    title: "르완다 교사 및 예비교사 ICT교육 역량강화사업",
    country: "르완다",
    year: "2017-2024 (약 730만 달러)",
    summary:
      "르완다의 현직·예비 교사들을 대상으로 7년간 ICT 활용 교육 역량을 강화한 사업이에요. KOICA는 이 사업을 디지털 ODA의 대표 성공 사례로 소개하며, 디지털 기술로 교육 현장의 격차를 줄이는 모델을 보여줬어요.",
    sourceLabel: "ZDNet Korea — 디지털정부 해외진출 포럼 보도",
    sourceUrl: "https://zdnet.co.kr/view/?no=20240403234639",
  },
  education: {
    title: "베트남 한·베 산업기술대학 건립 및 지원사업 (3차)",
    country: "베트남",
    year: "2014-2019 (약 600만 달러)",
    summary:
      "베트남 정부의 '고급인력 육성' 정책에 맞춰 KOICA가 응에안성에 산업기술대학을 짓고 운영을 지원한 사업이에요. 2001년 1차 사업부터 이어진 장기 협력으로, 빠르게 성장하는 지역 산업에 필요한 전문 기능 인력을 길러내고 있어요.",
    sourceLabel: "KOICA — 성과사례",
    sourceUrl: "https://koica.go.kr/koica_kr/905/subview.do",
  },
};

export const getODACaseBySeed = (seedId) => ODA_CASES[seedId];
