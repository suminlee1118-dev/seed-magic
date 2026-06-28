import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate, useParams } from "react-router-dom";
import { getSeedById, CORE_MESSAGE } from "../data/seeds";
import { getStoryBySeed } from "../data/stories";
import { useJourney } from "../context/JourneyContext";
import "./ResultScreen.css";

export default function ResultScreen() {
  const { seedId } = useParams();
  const navigate = useNavigate();
  const { pathKey, reset } = useJourney();
  const [copied, setCopied] = useState(false);

  const seed = getSeedById(seedId);
  const story = getStoryBySeed(seedId);
  if (!seed || !story) return null;

  // 선택 경로(AA/AB/BA/BB)에 따른 개인화 문장. 경로 정보가 없으면(직접 URL 진입 등) 기본 문장 사용.
  const personalLine =
    story.endingByPath[pathKey] ??
    "당신의 선택이 모여, 마을에 작은 변화를 만들었어요.";

  const shareText = `나는 ${seed.name}이었어. 너는 어떤 씨앗일까? 🌱\n씨앗 하나가 마을을 바꾸는 마법 →`;

  const handleShare = async () => {
    // 항상 첫 화면(origin)이 아니라, 지금 보고 있는 이 결과 페이지 주소를 그대로 공유
    const shareUrl = window.location.href;
    const shareData = {
      title: "씨앗 하나가 마을을 바꾸는 마법",
      text: shareText,
      url: shareUrl,
    };
    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch {
        // 사용자가 공유를 취소한 경우 등 — 별도 처리 불필요
      }
    } else {
      await navigator.clipboard.writeText(`${shareText} ${shareUrl}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleRestart = () => {
    reset();
    navigate("/interest");
  };

  return (
    <div className="screen result-screen" style={{ background: seed.theme.gradient }}>
      <div className="screen-content result-screen__content">
        <motion.div
          className="result-screen__card"
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <span className="result-screen__emoji" aria-hidden="true">
            {seed.emoji}
          </span>
          <p className="result-screen__eyebrow">당신은</p>
          <h2 className="result-screen__seed-name">{seed.name}</h2>
          <p className="result-screen__ending-title">{seed.endingTitle}</p>

          <p className="result-screen__personal-line">{personalLine}</p>

          <div className="result-screen__watermark">
            🫘 씨앗 하나가 마을을 바꾸는 마법 · 이수민 (농업경제학 전공)
          </div>
        </motion.div>

        {/* 모든 씨앗 공통, 변하지 않는 핵심 메시지 */}
        <motion.div
          className="result-screen__core-message"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <p>{CORE_MESSAGE}</p>
        </motion.div>

        <motion.div
          className="result-screen__actions"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <button className="btn-primary result-screen__share" onClick={handleShare}>
            {copied ? "복사 완료! 친구에게 보내보세요" : "결과 공유하기"}
          </button>
          <button className="btn-ghost result-screen__restart" onClick={handleRestart}>
            다른 씨앗도 보러가기
          </button>
        </motion.div>
      </div>
    </div>
  );
}
