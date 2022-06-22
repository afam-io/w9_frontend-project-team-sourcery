import React from "react";

import ResourceItem from "../ResourceItem/ResourceItem";

function Resources({ resource, getInitials }) {
  return (
    <section>
      {resource.map((resources, index) => {
        return (
          <article key={index}>
            <ResourceItem text={resources} getInitials={getInitials} />
          </article>
        );
      })}
    </section>
  );
}

export default Resources;
