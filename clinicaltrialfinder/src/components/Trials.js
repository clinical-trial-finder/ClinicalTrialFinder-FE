import React from "react";
import Trial from "./Trial";

const Trials = props => {
  return (
    <div className="trial-container">
      {props.trials.map(trial => (
        <Trial trial={trial} />
      ))}
    </div>
  );
};

export default Trials;
