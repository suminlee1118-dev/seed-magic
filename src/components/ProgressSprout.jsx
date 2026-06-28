import "./ProgressSprout.css";

// RPG 진행도를 점이 아니라 "씨앗이 자라는 단계"로 표현.
// stage: 0(씨앗) ~ 3(나무) — 스토리 전체 진행 단계와 1:1 매칭.
const STAGES = ["🌰", "🌱", "🌿", "🌳"];

export default function ProgressSprout({ stage, total = 3, themeColor }) {
  return (
    <div className="progress-sprout" role="status" aria-label={`진행 ${stage} / ${total}`}>
      <span className="progress-sprout__icon" aria-hidden="true">
        {STAGES[Math.min(stage, STAGES.length - 1)]}
      </span>
      <div className="progress-sprout__track">
        {Array.from({ length: total }).map((_, i) => (
          <span
            key={i}
            className="progress-sprout__dot"
            style={{
              background: i < stage ? themeColor : "rgba(255,255,255,0.25)",
            }}
          />
        ))}
      </div>
    </div>
  );
}
