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
    <main className="App">
      <div className="bar">
      <h1>Sourcery</h1>
      </div> 
      <div className="main-content">
      <section>
      <Input addResource={addResource} />
      <Resources resource={resource} />
      </section>
      </div>
    </main>
  );
}





export default App;
