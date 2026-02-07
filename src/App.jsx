import { useState } from "react";
import Introscreen from "./components/IntroScreen";
import Desktop from "./components/Desktop";

export default function App() {
  const [showIntroscreen, setShowIntroscreen] = useState(true);
  
  return (
    <>
      {showIntroscreen ? (
        <Introscreen onComplete={() => setShowIntroscreen(false)} />
      ) : (
        <Desktop />
      )}
    </>
  );
}