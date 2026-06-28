import { motion } from "framer-motion";
import { useNavigate, useParams } from "react-router-dom";
import { getSeedById } from "../data/seeds";
import "./SeedRevealScreen.css";

export default function SeedRevealScreen() {
  const { seedId } = useParams();
  const navigate = useNavigate();
  const seed = getSeedById(seedId);

  if (!seed) return null;

  return (
    <div
      className="screen reveal-screen"
      style={{ background: seed.theme.gradient }}
    >
      <div className="screen-content reveal-screen__content">
        <motion.div
          className="reveal-screen__seed-wrap"
          initial={{ scale: 0.4, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="reveal-screen__emoji" aria-hidden="true">
            {seed.emoji}
          </span>
        </motion.div>

        <motion.p
          className="reveal-screen__line"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 0.9, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          {seed.revealLine}
        </motion.p>

        <motion.h2
          className="reveal-screen__name"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65 }}
        >
          {seed.name}
        </motion.h2>

        <motion.p
          className="reveal-screen__tagline"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.95 }}
          transition={{ delay: 0.8 }}
        >
          {seed.tagline}
        </motion.p>

        {/* 핵심 강조 섹션: 관심사뿐 아니라 "전공"도 명시적으로 보여주는 독립 블록 */}
        <motion.div
          className="reveal-screen__major-box"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <p className="reveal-screen__major-label">
            이 씨앗과 연결될 수 있는 전공·분야
          </p>
          <div className="reveal-screen__major-tags">
            {seed.relatedMajors.map((major) => (
              <span key={major} className="tag-pill reveal-screen__major-tag">
                {major}
              </span>
            ))}
          </div>
          <p className="reveal-screen__major-note">
            여기 없어도 괜찮아요. 당신의 전공도 이미 누군가의 씨앗이에요.
          </p>
        </motion.div>

        <motion.button
          className="btn-primary reveal-screen__cta"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          onClick={() => navigate(`/seeds/${seedId}/intro`)}
        >
          이 씨앗 심으러 가기 →
        </motion.button>
      </div>
    </div>
  );
}
