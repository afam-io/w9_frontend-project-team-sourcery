import React from "react";

import ResourceItem from "../ResourceItem/ResourceItem";

function Resources(props) {
  return (
    <section>
      {props.resource.map((resources, index) => {
        return (
          <article key={index}>
            <ResourceItem text={resources} />
          </article>
        );
      })}
    </section>
  );
}

export default Resources;
