import { motion } from "framer-motion";
import { useNavigate, useParams } from "react-router-dom";
import { getSeedById } from "../data/seeds";
import { getODACaseBySeed } from "../data/odaCases";
import "./ODACaseScreen.css";

export default function ODACaseScreen() {
  const { seedId } = useParams();
  const navigate = useNavigate();
  const seed = getSeedById(seedId);
  const odaCase = getODACaseBySeed(seedId);

  if (!seed || !odaCase) return null;

  return (
    <div className="screen oda-screen" style={{ background: seed.theme.dark }}>
      <div className="screen-content oda-screen__content">
        <motion.p
          className="eyebrow oda-screen__eyebrow"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.75 }}
        >
          이야기는 여기서 끝나지 않아요
        </motion.p>

        <motion.h2
          className="oda-screen__title"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          실제로 일어나고 있는 일이에요
        </motion.h2>

        <motion.div
          className="oda-screen__card"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
        >
          <span className="oda-screen__badge">실화 기반 · KOICA ODA</span>

          <h3 className="oda-screen__case-title">{odaCase.title}</h3>

          <div className="oda-screen__meta">
            <span className="tag-pill oda-screen__meta-tag">{odaCase.country}</span>
            <span className="tag-pill oda-screen__meta-tag">{odaCase.year}</span>
          </div>

          <p className="oda-screen__summary">{odaCase.summary}</p>

          {odaCase.sourceLabel && (
            <p className="oda-screen__source">
              출처: {odaCase.sourceLabel}
              {odaCase.sourceUrl && (
                <>
                  {" · "}
                  <a href={odaCase.sourceUrl} target="_blank" rel="noopener noreferrer">
                    자세히 보기
                  </a>
                </>
              )}
            </p>
          )}
        </motion.div>

        <motion.button
          className="btn-primary oda-screen__cta"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
          onClick={() => navigate(`/seeds/${seedId}/result`)}
          style={{ background: seed.theme.base }}
        >
          내 마을의 결과 보기 →
        </motion.button>
      </div>
    </div>
  );
}
