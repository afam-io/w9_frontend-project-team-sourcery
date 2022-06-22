import React, { useState, useEffect } from "react";
import "./App.css";

import Input from "../Input/Input";
import Resources from "../Resources/Resources";

function App() {
  const [resource, setResource] = useState([]);

  const addResource = (newResource) => {
    setResource([...resource, newResource]);
  };

  async function postResources(input) {
    await fetch("http://localhost:5001/v1/resources", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(input),
    });
  }

  async function fetchResources() {
    const response = await fetch("http://localhost:5001/v1/resources");
    const data = await response.json();

    return data.rows;
  }
  useEffect(() => {
    async function setOnLoad() {
      const result = await fetchResources();
      setResource(result);
    }
    setOnLoad();
  }, []);

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
      <div className="recommended">
        <select className="week">
          <option value="Week 1">Week 1: Computational thinking</option>
          <option>Week 2: JavaScript funfdamentals</option>
          <option value="mercedes">Week 3: UI/UX</option>
          <option value="audi">Week 4: APIs/Node JS</option>
          <option value="audi">Week 5: Databases</option>
          <option value="audi">Week 6: Testing</option>
          <option value="audi">Week 7: React</option>
          <option value="audi">Week 8: React deeper dive</option>
        </select>
      </div>
      <div className="input-fields">
        <section>
          <h2>Add a resource below...</h2>
          <Input addResource={addResource} postResources={postResources} />
        </section>
      </div>
      <div className="input-cards">
        {" "}
        <Resources resource={resource} getInitials={getInitials} />
      </div>
    </main>
  );
}

export default App;
