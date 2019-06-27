import React from "react";
// import PercentageCircle from "reactjs-percentage-circle";
// import Collapsible from "react-collapsible";

const Trial = props => {
  return (
    <div className="trial">
      <p>Name: </p>
      <p>{props.trial.brief_title}</p>
      <p>Trial type: </p>
      <p>{props.trial.study_type}</p>
      <p>Phase: </p>
      <p>{props.trial.phase}</p>
      <p>Description: </p>
      <p>{props.trial.description}</p>
    </div>
  );
};

export default Trial;
