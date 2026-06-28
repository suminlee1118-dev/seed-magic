import { motion } from "framer-motion";
import { useNavigate, useParams } from "react-router-dom";
import { getSeedById } from "../data/seeds";
import "./SeedIntroScreen.css";

export default function SeedIntroScreen() {
  const { seedId } = useParams();
  const navigate = useNavigate();
  const seed = getSeedById(seedId);

  if (!seed) return null;

  return (
    <div className="screen seed-intro-screen" style={{ background: seed.theme.dark }}>
      <div className="screen-content seed-intro-screen__content">
        <motion.div
          className="seed-intro-screen__badge"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <span aria-hidden="true">{seed.emoji}</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="seed-intro-screen__title"
        >
          이 씨앗을 심으면
          <br />
          어떤 마을이 자랄까요?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="seed-intro-screen__desc"
        >
          {seed.description}
        </motion.p>

        <motion.button
          className="btn-primary seed-intro-screen__cta"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          onClick={() => navigate(`/seeds/${seedId}/story/1`)}
          style={{ background: seed.theme.base, color: "#fff" }}
        >
          씨앗 심기 시작 →
        </motion.button>
      </div>
    </div>
  );
}
