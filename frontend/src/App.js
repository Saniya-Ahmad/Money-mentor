import React, { useState } from "react";
import InputForm from "./components/InputForm";
import ResultDisplay from "./components/ResultDisplay";
import { analyzeData } from "./services/api";
import "./App.css";
import Charts from "./components/Charts";

function App() {
  const [result, setResult] = useState(null);

  const handleSubmit = async (data) => {
    try {
      const response = await analyzeData(data);
      setResult(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
  <div className="container">
    <h1 className="title">AI Money Mentor</h1>

    <div className="layout">
      <div className="card input-card">
        <InputForm onSubmit={handleSubmit} />
      </div>

      <div className="card result-card">
        <ResultDisplay result={result} />
        <Charts result={result} />
      </div>
    </div>
  </div>
);
}

export default App;