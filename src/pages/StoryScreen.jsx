import { AnimatePresence } from "framer-motion";
import { useNavigate, useParams } from "react-router-dom";
import { getSeedById } from "../data/seeds";
import { getStoryBySeed } from "../data/stories";
import { useJourney } from "../context/JourneyContext";
import StoryCard from "../components/StoryCard";
import ProgressSprout from "../components/ProgressSprout";
import "./StoryScreen.css";

export default function StoryScreen() {
  const { seedId, step } = useParams(); // step: "1" | "2" | "3"
  const navigate = useNavigate();
  const { choices, makeChoice } = useJourney();

  const seed = getSeedById(seedId);
  const story = getStoryBySeed(seedId);
  if (!seed || !story) return null;

  const stepNum = Number(step);

  // step에 따라 표시할 situation/choices를 데이터 구조에서 동적으로 찾는다.
  // step1: story.step1 고정
  // step2: story.step1의 선택(next)에 따라 story.step2[next]
  // step3: step2의 선택(next)에 따라 story.step3[next]
  let leadText = null;
  let situation;
  let choices_;
  let branchKey1 = choices.step1; // "A" | "B"

  if (stepNum === 1) {
    situation = story.step1.situation;
    choices_ = story.step1.choices;
  } else if (stepNum === 2) {
    const chosen = story.step1.choices.find((c) => c.id === branchKey1);
    const branch = story.step2[chosen.next];
    leadText = branch.text;
    situation = branch.situation;
    choices_ = branch.choices;
  } else if (stepNum === 3) {
    const chosen1 = story.step1.choices.find((c) => c.id === branchKey1);
    const branch2 = story.step2[chosen1.next];
    const chosenBranch2 = branch2.choices.find((c) => c.id === choices.step2);
    const branch3 = story.step3[chosenBranch2.next];
    leadText = branch3.text;
    situation = branch3.situation;
    choices_ = branch3.choices;
  }

  const handleChoose = (choice) => {
    makeChoice(`step${stepNum}`, choice.id);

    if (stepNum < 3) {
      navigate(`/seeds/${seedId}/story/${stepNum + 1}`);
    } else {
      navigate(`/seeds/${seedId}/case`);
    }
  };

  return (
    <div className="screen story-screen" style={{ background: seed.theme.gradient }}>
      <ProgressSprout stage={stepNum} total={3} themeColor="#fff" />

      <div className="screen-content story-screen__content">
        <AnimatePresence mode="wait">
          <StoryCard
            key={`${seedId}-${stepNum}`}
            leadText={leadText}
            situation={situation}
            choices={choices_}
            onChoose={handleChoose}
            themeBase={seed.theme.base}
          />
        </AnimatePresence>
      </div>
    </div>
  );
}
