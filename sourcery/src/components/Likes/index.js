import React from "react";

function Likes({ resource, onLikeClick }) {
  return (
    <div className="button-spacing">
      <button
        className="upvote-button"
        onClick={() => {
          onLikeClick(resource);
        }}
      >
        Like
      </button>
      <p>
        <strong>{resource.likes}</strong>
      </p>
    </div>
  );
}

export default Likes;
