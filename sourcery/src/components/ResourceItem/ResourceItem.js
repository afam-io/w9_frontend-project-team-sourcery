import React from "react";
import "./ResourceItem.css";

function ResourceItem({ getInitials, text, index, onLikeClick, state }) {
  return (
    <div className="resource-card">
      <div className="name">
        <div className="initials">
          <span>{getInitials(text.name)}</span>
        </div>
        <div className="name-padding">
          <strong>NAME</strong> {text.name}
        </div>
        <div>
          <strong>URL</strong>{" "}
          <a href={text.url} target="blank">
            Click Here
          </a>
        </div>
      </div>
      <div className="description">
        <div>
          {" "}
          <h3>DESCRIPTION</h3>
        </div>

        <p> {text.description.toLowerCase()}</p>
      </div>
      <button
        className="upvote-button"
        onClick={() => {
          onLikeClick(text);
        }}>
        Like
      </button>
      <p>{text.likes}</p>
    </div>
  );
}

export default ResourceItem;
