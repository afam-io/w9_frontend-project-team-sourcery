import React, { useState } from "react";

function Input(props) {
  const [text, setText] = useState({ name: "", url: "", description: "" });


  return (
    <section>
      {/* Input field for the name */}
      <input
      placeholder="Name"
        type="text"
        onChange={(event) => setText({ ...text, name: event.target.value })}
      ></input>

      {/* Input field for the url  */}
      <input
        placeholder="URL"
        type="text"
        onChange={(event) => setText({ ...text, url: event.target.value })}
      ></input>

      {/* Input field for the description */}
      <input
        placeholder="Description"
        type="text"
        onChange={(event) =>
          setText({ ...text, description: event.target.value })
        }
      ></input>
      <button onClick={() => props.addResource(text)}>Submit</button>
    </section>
  );
}

export default Input;
