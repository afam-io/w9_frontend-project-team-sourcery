import React from "react";
import Likes from "../Likes";
import "./ResourceItem.css";

function ResourceItem({ getInitials, resource, onLikeClick }) {
  return (
    <div className="resource-card">
      <div className="name">
        <div className="initials">
          <span>{getInitials(resource.name)}</span>
        </div>
        <div className="name-padding">
          <strong>NAME</strong> {resource.name}
        </div>
        <div>
          <strong>URL</strong>{" "}
          <a href={resource.url} target="blank">
            Click Here
          </a>
        </div>
      </div>
      <div className="description">
        <div>
          {" "}
          <h3>DESCRIPTION</h3>
        </div>

        <p> {resource.description.toLowerCase()}</p>
      </div>
      <Likes resource={resource} onLikeClick={onLikeClick} />
    </div>
  );
}

export default ResourceItem;
