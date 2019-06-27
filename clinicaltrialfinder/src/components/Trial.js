import React from "react";

const Trial = props => {
  return (
    <div className="trial">
      <p>Name: {props.trial.brief_title}</p>
      <p>Trial type: {props.trial.study_type}</p>
      <p>Phase: {props.trial.phase}</p>
    </div>
  );
};

export default Trial;
