import React, { useState } from "react";
import "./App.css";

import Input from "../Input/Input";
import Resources from "../Resources/Resources";

function App() {
  const [resource, setResource] = useState([]);
  console.log(resource);

  const addResource = (newResource) => {
    setResource([...resource, newResource]);
  };

  return (

    <section className="App">
      <div className= "bar"> </div>
      <h1>Sourcery</h1>
      <Input addResource={addResource} />
      <Resources resource={resource} />
    </section>
  );
}





export default App;
