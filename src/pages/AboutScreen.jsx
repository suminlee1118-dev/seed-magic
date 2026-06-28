import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { SEEDS } from "../data/seeds";
import "./AboutScreen.css";

export default function AboutScreen() {
  const navigate = useNavigate();

  return (
    <div className="screen about-screen">
      <div className="screen-content about-screen__content">
        <button className="about-screen__back" onClick={() => navigate(-1)}>
          ← 뒤로
        </button>

        <motion.h2
          className="about-screen__title"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          ODA, 그리고 이 프로젝트
        </motion.h2>

        <section className="about-screen__section">
          <h3>ODA가 뭔가요?</h3>
          <p>
            ODA(공적개발원조)는 선진국이 개발도상국의 경제·사회 발전을 돕기
            위해 지원하는 자금과 기술, 사람을 말해요. 흔히 교육이나 의료
            봉사만 떠올리기 쉽지만, 실제로는 농업, 환경, 기술, 보건 등
            훨씬 다양한 분야에서 이뤄지고 있어요.
          </p>
        </section>

        <section className="about-screen__section">
          <h3>이 프로젝트를 만든 이유</h3>
          <p>
            저는 농업경제학을 전공하면서 "농업국제개발협력과 ODA" 수업을
            듣기 전까지, ODA는 국제학이나 정치외교학을 전공한 사람들의
            일이라고만 생각했어요. 하지만 수업을 들으며 제 전공도 이미 ODA와
            깊이 연결되어 있다는 걸 알게 됐어요. 이 경험을, 더 많은 사람이
            짧은 시간 안에 직접 느꼈으면 해서 이 콘텐츠를 만들었어요.
          </p>
        </section>

        <section className="about-screen__section">
          <h3>다섯 개의 씨앗</h3>
          <ul className="about-screen__seed-list">
            {SEEDS.map((seed) => (
              <li key={seed.id}>
                <span aria-hidden="true">{seed.emoji}</span> {seed.name} —{" "}
                {seed.relatedMajors.slice(0, 3).join(", ")} 등
              </li>
            ))}
          </ul>
        </section>

        <section className="about-screen__section">
          <h3>KOICA WeKO</h3>
          <p>
            WeKO는 KOICA(한국국제협력단)가 운영하는 청년 서포터즈 활동으로,
            대학생과 청년들이 국제개발협력에 대한 이해를 넓히고 이를
            콘텐츠로 알리는 활동을 해요. 이 웹사이트는 WeKO 8기 지원을
            위해 제작한 포트폴리오 콘텐츠예요.
          </p>
        </section>

        <button className="btn-primary about-screen__cta" onClick={() => navigate("/")}>
          씨앗 심으러 가기
        </button>
      </div>
    </div>
  );
}
