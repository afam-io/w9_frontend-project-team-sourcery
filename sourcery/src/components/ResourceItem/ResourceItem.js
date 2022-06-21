import React from "react";
import "./ResourceItem.css";

function resourceItem(props) {
  return (
    <div className="resource-card">
      <div>
        <span className="initials">{props.getInitials(props.text.name)}</span>{" "}
        <strong>Name:</strong> {props.text.name}
      </div>
      <p>
        <strong>URL:</strong> {props.text.url}
      </p>
      <p>
        <strong>Description:</strong> {props.text.description}
      </p>
    </div>
  );
}

export default resourceItem;
