import React from "react";

const Trial = props => {
  return (
    <div>
      <p>Name: {props.trial.brief_title}</p>
      <p>Trial type: {props.trial.study_type}</p>
    </div>
  );
};

export default Trial;
