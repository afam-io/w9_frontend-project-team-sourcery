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
          <strong>Name</strong> {text.name}
        </div>
        <div>
          <strong>URL</strong>{" "}
          <a href={text.url} target="blank">
            {text.url}
          </a>
        </div>
      </div>
      <div className="description">
        <h3>Description</h3>
        <p> {text.description}</p>
      </div>
      <button
        className="upvote-button"
        onClick={() => {
          onLikeClick(index, state);
        }}>
        Like
      </button>
      <p>{text.likes}</p>
    </div>
  );
}

export default ResourceItem;
