import React, { useState } from "react";

function Input(props) {
  const [text, setText] = useState("");

  return (
    <div>
      <input
        type="text"
        onChange={(event) => setText(event.target.value)}
      ></input>
      <button onClick={() => props.addTodo(text)}>Add to List</button>
    </div>
  );
}

export default Input;
