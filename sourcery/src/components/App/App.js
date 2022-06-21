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

  // for initials badge
  const getInitials = function (name) {
    const fullName = name.split(" ");
    const initials = [];
    for (let i = 0; i < fullName.length; i++) {
      initials.push(fullName[i].charAt(0).toUpperCase());
    }

    return initials.join("");
  };

  return (
    <main className="App">
      <div className="bar">
        <img
          className="logo"
          src="images/sourcery-logo.png"
          alt="Logo"
          width="225"
          height="225"
        />
        <h1>Sourcery</h1>
      </div>
      <div className="main-content">
        <section>
          <h2>Add a resource below...</h2>
          <Input addResource={addResource} />
          <Resources resource={resource} getInitials={getInitials} />
        </section>
      </div>
    </main>
  );
}

export default App;
