import * as React from "react";
import { AnalysisConfigurationSelector } from "./analysis-configuration-selector";

export const ExperimentDetailsContainer = ({ children }) => {
  return (
    <div>
      ExperimentDetailsContainer
      <AnalysisConfigurationSelector />
      {children}
    </div>
  );
};
