import { motion } from "framer-motion";
import "./StoryCard.css";

export default function StoryCard({ leadText, situation, choices, onChoose, themeBase }) {
  return (
    <motion.div
      className="story-card"
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -18 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      {leadText && <p className="story-card__lead">{leadText}</p>}
      <p className="story-card__situation">{situation}</p>

      <div className="story-card__choices">
        {choices.map((choice, idx) => (
          <motion.button
            key={choice.id}
            className="story-card__choice"
            whileTap={{ scale: 0.96 }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + idx * 0.1 }}
            onClick={() => onChoose(choice)}
            style={{ borderColor: themeBase }}
          >
            <span className="story-card__choice-letter" style={{ background: themeBase }}>
              {choice.id}
            </span>
            <span className="story-card__choice-label">{choice.label}</span>
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
}
