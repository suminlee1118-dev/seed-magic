import { createContext, useContext, useReducer } from "react";

// 사용자가 진행하면서 쌓는 선택 상태를 전역으로 관리.
// - selectedSeedId: 매칭된 씨앗
// - choices: { step1: "A"|"B", step2: "A"|"B" } 형태로 누적, 엔딩 문구 결정에 사용
const initialState = {
  selectedSeedId: null,
  choices: {},
};

function journeyReducer(state, action) {
  switch (action.type) {
    case "SELECT_SEED":
      return { selectedSeedId: action.seedId, choices: {} };
    case "MAKE_CHOICE":
      return {
        ...state,
        choices: { ...state.choices, [action.step]: action.choiceId },
      };
    case "RESET":
      return initialState;
    default:
      return state;
  }
}

const JourneyContext = createContext(null);

export function JourneyProvider({ children }) {
  const [state, dispatch] = useReducer(journeyReducer, initialState);

  const selectSeed = (seedId) => dispatch({ type: "SELECT_SEED", seedId });
  const makeChoice = (step, choiceId) =>
    dispatch({ type: "MAKE_CHOICE", step, choiceId });
  const reset = () => dispatch({ type: "RESET" });

  // 선택 경로를 "AB" 같은 2글자 문자열로 합쳐 엔딩 데이터 조회 키로 사용
  const pathKey = `${state.choices.step1 ?? ""}${state.choices.step2 ?? ""}`;

  return (
    <JourneyContext.Provider
      value={{ ...state, pathKey, selectSeed, makeChoice, reset }}
    >
      {children}
    </JourneyContext.Provider>
  );
}

export function useJourney() {
  const ctx = useContext(JourneyContext);
  if (!ctx) throw new Error("useJourney는 JourneyProvider 내부에서만 사용 가능합니다.");
  return ctx;
}
