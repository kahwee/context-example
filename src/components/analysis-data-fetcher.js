import * as React from "react";
import { AnalysisContext } from "./analysis-context";

export const AnalysisDataFetcher = () => {
  const { analysisId, getAnalysisId } = React.useContext(AnalysisContext);
  console.log(analysisId, getAnalysisId);
  return (
    <div>
      {analysisId}
    </div>
  );
};
