import { useState, useCallback } from "react";
import "./App.css";

function App() {
  const [fact, setFact] = useState<string>("Loading...");
  const fetchFact: () => void = useCallback(() => {
    fetch("https://ariabackend.onrender.com/")
      .then((res) => res.json())
      .then((data) => setFact(data.fact))
      .catch(() => setFact("Failed to load fact!"));
  }, [setFact]);
  return <div>{fact}</div>;
}

export default App;
