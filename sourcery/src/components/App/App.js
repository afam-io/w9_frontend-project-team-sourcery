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
      <div className="bar">
      <h1>Sourcery</h1>
      </div> 
      <div className="main-content">
      <section>
      <Input addResource={addResource} />
      <Resources resource={resource} />
      </section>
      </div>
    </section>
  );
}





export default App;
