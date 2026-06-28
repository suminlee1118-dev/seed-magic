import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { INTEREST_OPTIONS } from "../data/seeds";
import { useJourney } from "../context/JourneyContext";
import "./InterestScreen.css";

export default function InterestScreen() {
  const navigate = useNavigate();
  const { selectSeed } = useJourney();

  const handleSelect = (seedId) => {
    selectSeed(seedId);
    navigate(`/seeds/${seedId}/reveal`);
  };

  return (
    <div className="screen interest-screen">
      <div className="screen-content interest-screen__content">
        <motion.p
          className="eyebrow"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
        >
          STEP 1
        </motion.p>

        <motion.h2
          className="interest-screen__title"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          당신은 무엇에
          <br />
          관심이 있나요?
        </motion.h2>

        <div className="interest-screen__options">
          {INTEREST_OPTIONS.map((opt, idx) => (
            <motion.button
              key={opt.seedId}
              className="interest-option"
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.15 + idx * 0.07 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => handleSelect(opt.seedId)}
            >
              <span className="interest-option__emoji" aria-hidden="true">
                {opt.emoji}
              </span>
              <span className="interest-option__label">{opt.label}</span>
            </motion.button>
          ))}
        </div>

        <motion.p
          className="interest-screen__hint"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.65 }}
          transition={{ delay: 0.7 }}
        >
          정답은 없어요. 지금 마음이 가는 곳을 골라보세요.
        </motion.p>
      </div>
    </div>
  );
}
