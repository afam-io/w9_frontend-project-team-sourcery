import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "../navbar/index.js";
import Input from "../Input/Input";
import Resources from "../Resources/Resources";

function App() {
  // Resource is an array of all user resources that are submitted.
  const [resources, setResources] = useState([]);

  const addResource = (newResource) => {
    setResources([...resources, newResource]);
  };

  //updates db for each resource post when like button clicked
  const onLikeClick = (resource) => {
    const newObj = { ...resource, likes: resource.likes + 1 };

    patchResources(newObj);
    setResources(
      resources.map((obj) => {
        if (obj.id === resource.id) return { ...obj, likes: obj.likes + 1 };
        return obj;
      })
    );
  };

  // patch request used to update likes
  async function patchResources(input) {
    await fetch("v1/resources", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Request-Method": "PATCH",
      },
      body: JSON.stringify(input),
    });
  }

  // function to add a new resources to the backend
  async function postResources(input) {
    const res = await fetch("v1/resources", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(input),
    });
    const data = await res.json();
    return data;
  }

  // used to get the resources table from the backend
  async function fetchResources() {
    const response = await fetch("v1/resources");
    const data = await response.json();

    return data.rows;
  }

  //gets resources table onload
  useEffect(() => {
    async function setOnLoad() {
      const result = await fetchResources();
      setResources(result);
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
    <div className="App">
      <header className="main-header">
        <div className="bar">
          <figure>
            {" "}
            <img
              className="logo"
              src="images/sourcery-logo.png"
              alt="Logo"
              width="225"
              height="225"
            />{" "}
          </figure>
          <h1>Sourcery</h1>
        </div>
        <Navbar />
      </header>
      <main>
        <div className="input-fields">
          <section>
            <h2>Add a resources below...</h2>
            <Input addResource={addResource} postResources={postResources} />
          </section>
        </div>
        <div className="input-cards">
          {" "}
          <Resources
            resources={resources}
            getInitials={getInitials}
            onLikeClick={onLikeClick}
          />
        </div>
      </main>
    </div>
  );
}

export default App;
