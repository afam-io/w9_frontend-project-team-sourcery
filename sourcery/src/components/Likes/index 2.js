import React from "react";

function Likes({ obj, onLikeClick }) {
  return (
    <div className="button-spacing">
      <button
        className="upvote-button"
        onClick={() => {
          onLikeClick(obj);
        }}>
        Like
      </button>
      <p>
        <strong>{obj.likes}</strong>
      </p>
    </div>
  );
}

export default Likes;
