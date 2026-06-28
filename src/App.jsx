import { AnimatePresence } from "framer-motion";
import { Routes, Route, useLocation } from "react-router-dom";
import { JourneyProvider } from "./context/JourneyContext";

import IntroScreen from "./pages/IntroScreen";
import InterestScreen from "./pages/InterestScreen";
import SeedRevealScreen from "./pages/SeedRevealScreen";
import SeedIntroScreen from "./pages/SeedIntroScreen";
import StoryScreen from "./pages/StoryScreen";
import ODACaseScreen from "./pages/ODACaseScreen";
import ResultScreen from "./pages/ResultScreen";
import AboutScreen from "./pages/AboutScreen";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<IntroScreen />} />
        <Route path="/interest" element={<InterestScreen />} />
        <Route path="/seeds/:seedId/reveal" element={<SeedRevealScreen />} />
        <Route path="/seeds/:seedId/intro" element={<SeedIntroScreen />} />
        <Route path="/seeds/:seedId/story/:step" element={<StoryScreen />} />
        <Route path="/seeds/:seedId/case" element={<ODACaseScreen />} />
        <Route path="/seeds/:seedId/result" element={<ResultScreen />} />
        <Route path="/about" element={<AboutScreen />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <JourneyProvider>
      <AnimatedRoutes />
    </JourneyProvider>
  );
}
