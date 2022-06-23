import React, { useState } from "react";
import "./input.css";

function Input({ postResources, addResource }) {
  const [text, setText] = useState({
    name: "",
    url: "",
    description: "",
    likes: 0,
  });

  return (
    <section className="all-inputs">
      <div className="left-inputs">
        {/* Input field for the name */}
        <input
          className="small-input"
          placeholder="Name"
          type="text"
          onChange={(event) => setText({ ...text, name: event.target.value })}
        ></input>

        {/* Input field for the url  */}
        <input
          className="small-input"
          placeholder="URL"
          type="text"
          onChange={(event) => setText({ ...text, url: event.target.value })}
        ></input>
      </div>

      <div className="right-inputs">
        <input
          className="description-box"
          placeholder="Description"
          type="text"
          onChange={(event) =>
            setText({ ...text, description: event.target.value })
          }
        ></input>
        <button
          className="submit-button"
          onClick={(e) => {
            e.preventDefault();
            postResources(text);
            addResource(text);
          }}
        >
          Submit
        </button>
      </div>
      {/* Input field for the description */}
    </section>
  );
}

export default Input;
