import React from "react";
import PercentageCircle from "reactjs-percentage-circle";
// import Collapsible from "react-collapsible";

const Trial = props => {
  return (
    <div className="trial">
      <div className="main-text">
        <p>Name: </p>
        <p>{props.trial.brief_title}</p>
        <p>Trial type: </p>
        <p>{props.trial.study_type}</p>
        <p>Phase: </p>
        <p>{props.trial.phase}</p>
        <p>Description: </p>
        <p>{props.trial.description}</p>
      </div>
      <div className="completion-prob">
        <p>Predicted Success Rate: </p>
        <p>{props.trial.completion_prob}</p>
      </div>
    </div>
  );
};

export default Trial;
