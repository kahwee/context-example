import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { ExperimentDetailsContainer } from "./components/experiment-details-container";
import { AnalysisDataFetcher } from "./components/analysis-data-fetcher";
import { AnalysisContext } from "./components/analysis-context";

function App() {
  const [analysisId, setAnalysisId] = React.useState('abc');
  return (
    <AnalysisContext.Provider
      value={{
        analysisId,
        setAnalysisId,
        getAnalysisId: () => {
          return "hello-world";
        }
      }}
    >
      <div className="App">
        <header className="App-header">
          <ExperimentDetailsContainer>
            <AnalysisDataFetcher />
          </ExperimentDetailsContainer>
        </header>
      </div>
    </AnalysisContext.Provider>
  );
}

export default App;
