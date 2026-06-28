import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./IntroScreen.css";

export default function IntroScreen() {
  const navigate = useNavigate();

  return (
    <div className="screen intro-screen">
      <div className="intro-screen__bg" aria-hidden="true" />

      <motion.div
        className="intro-screen__seed"
        aria-hidden="true"
        initial={{ scale: 0.6, opacity: 0, y: 10 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      >
        🫘
      </motion.div>

      <div className="screen-content intro-screen__content">
        <motion.p
          className="eyebrow intro-screen__eyebrow"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          KOICA WeKO 8기 서포터즈 기획
        </motion.p>

        <motion.h1
          className="intro-screen__title"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
        >
          씨앗 하나가
          <br />
          마을을 바꾸는 마법
        </motion.h1>

        <motion.p
          className="intro-screen__subtitle"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.7 }}
        >
          당신의 전공과 관심사는
          <br />
          어떤 씨앗이 될 수 있을까요?
          <br />
          <span>3분이면 당신의 씨앗을 찾을 수 있어요.</span>
        </motion.p>

        <motion.button
          className="btn-primary intro-screen__cta"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          onClick={() => navigate("/interest")}
        >
          씨앗 심으러 가기 →
        </motion.button>

        <motion.button
          className="intro-screen__about-link"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.75 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          onClick={() => navigate("/about")}
        >
          ODA가 뭔가요?
        </motion.button>

        <motion.p
          className="intro-screen__credit"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 1.4, duration: 0.6 }}
        >
          이수민 (농업경제학 전공)
        </motion.p>
      </div>
    </div>
  );
}
