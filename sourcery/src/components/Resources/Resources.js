import React from "react";

import ResourceItem from "../ResourceItem/ResourceItem";

function Resources({ resources, getInitials, onLikeClick }) {
  return (
    <section>
      {resources.map((resource, index) => {
        return (
          <article key={index}>
            <ResourceItem
              state={resource}
              resource={resource}
              getInitials={getInitials}
              index={index}
              onLikeClick={onLikeClick}
            />
          </article>
        );
      })}
    </section>
  );
}

export default Resources;
