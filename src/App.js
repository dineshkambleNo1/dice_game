import Gameplay from "./Components/GamePlay/Gameplay";
import Home from "./Components/Home/Home";
import React, { useState } from "react";

function App() {
  // use state use karke hum eek page se dusre page me jayenge

  const [isGameStarted, setGameStarted] = useState(true);

  const toggleGamePlay = () => {
    setGameStarted((prev) => !prev);
  };

  return <>{isGameStarted ? <Gameplay /> : <Home toggle={toggleGamePlay} />}</>;
}

export default App;
