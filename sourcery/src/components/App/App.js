import React, { useState, useEffect } from "react";
import "./App.css";

import Input from "../Input/Input";
import Resources from "../Resources/Resources";

function App() {
  const [resource, setResource] = useState([]);
  console.log(resource);

  const addResource = (newResource) => {
    setResource([...resource, newResource]);
  };

  async function fetchResources() {
    const response = await fetch("http://localhost:5001/v1/resources");
    const data = await response.json();
    console.log(data.rows[0]);
    return data;
  }
  useEffect(() => {
    fetchResources();
  }, []);

  async function postResources() {
    await fetch("http://localhost:5001/v1/resources", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: "Afam",
        url: "www.google.com",
        description: "this is google y'all",
      }),
    });
  }

  postResources();

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
      <div className="input-fields">
        <section>
          <h2>Add a resource below...</h2>
          <Input addResource={addResource} />
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
