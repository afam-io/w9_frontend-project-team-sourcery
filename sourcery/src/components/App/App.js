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
    <div>
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
        <navbar className="menu">
          <div className="select-menu">
            <h4>Search Resources By Week</h4>
            <select name="weeks" id="weeks">
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
        </navbar>

        <div className="sites">
          <div className="link-spacing">
            <a
              href="https://www.codewars.com/"
              target="blank"
              style={{ color: "white" }}
            >
              Codewars
            </a>
          </div>
          <div className="link-spacing">
            <a
              href="https://codepen.io/"
              target="blank"
              style={{ color: "white" }}
            >
              Code-pen
            </a>
          </div>
          <div className="link-spacing">
            <a
              href="https://web.postman.co/home"
              target="blank"
              style={{ color: "white" }}
            >
              Post man
            </a>
          </div>
          <div className="link-spacing">
            <a
              href="https://www.figma.com/"
              target="blank"
              style={{ color: "white" }}
            >
              Figma
            </a>
          </div>
          <div className="link-spacing">
            <a
              href="https://www.udemy.com/"
              target="blank"
              style={{ color: "white" }}
            >
              Udemy
            </a>
          </div>

          <div className="link-spacing">
            <a
              href="https://github.com/"
              target="blank"
              style={{ color: "white" }}
            >
              GitHub
            </a>
          </div>
          <div className="link-spacing">
            <a
              href="https://stackoverflow.com/"
              target="blank"
              style={{ color: "white" }}
            >
              Stack Overflow
            </a>
          </div>
          <div className="link-spacing">
            <a
              href="https://developer.mozilla.org/en-US/"
              target="blank"
              style={{ color: "white" }}
            >
              MDN Docs
            </a>
          </div>
          <div className="link-spacing">
            <a
              href="https://reactjs.org/docs/getting-started.html"
              target="blank"
              style={{ color: "white" }}
            >
              React Docs
            </a>
          </div>
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
    </div>
  );
}

export default App;
