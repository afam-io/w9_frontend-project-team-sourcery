import React, { useState } from "react";
import "./App.css"

import Input from "../Input/Input";

import Resources from "../Resources/Resources";

function App() {
  const [resource, setResource] = useState([
    { name: "", url: "", description: "" },
  ]);

  const addResource = (newResource) => {
    setResource([...resource, newResource]);
  };

  return (
    <div className="App">
      <h1>Resources!</h1>
      <Input addResource={addResource} />
      <Resources resource={resource} />
    </div>
  );
}

export default App;
