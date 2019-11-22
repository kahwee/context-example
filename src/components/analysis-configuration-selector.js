import * as React from "react";
import { AnalysisContext } from "./analysis-context";

export const AnalysisConfigurationSelector = () => {
  const { setAnalysisId } = React.useContext(AnalysisContext);
  console.log(setAnalysisId, 2222);
  return (
    <div>
      <select
        onChange={ev => {
          setAnalysisId(ev.target.value);
          // console.log(ev.target.value);
        }}
      >
        <option value="abc">abc</option>
        <option value="def">def</option>
      </select>
    </div>
  );
};
