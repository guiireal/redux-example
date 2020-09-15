import React from "react";

import "./Card.css";

function getColor(props) {
  if (props.red) return "red";
  if (props.green) return "green";
  if (props.blue) return "blue";
  if (props.purple) return "purble";
  return "";
}

export default ({ title, children, ...props }) => (
  <div className={`card ${getColor(props)}`}>
    <div className="header">
      <span className="title">{title}</span>
    </div>
    <div className="content">{children}</div>
  </div>
);
