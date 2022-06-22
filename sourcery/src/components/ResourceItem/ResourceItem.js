import React from "react";
import "./ResourceItem.css";

function resourceItem(props) {
  return (
    <div className="resource-card">
      <div className="name">
        <div className="initials">
          <span>{props.getInitials(props.text.name)}</span>
        </div>
        <div className="name-padding">
          <strong>Name</strong> {props.text.name}
        </div>
        <div>
          <strong>URL</strong>{" "}
          <a href={props.text.url} target="blank">
            {props.text.url}
          </a>
        </div>
      </div>
      <div className="description">
        <h3>Description</h3>
        <p> {props.text.description}</p>
      </div>
    </div>
  );
}

export default resourceItem;
