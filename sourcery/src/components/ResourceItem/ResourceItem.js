import React from "react";

function resourceItem(props) {
  return (
    <article>
      <p>
        <strong> Name:</strong> {props.text.name} 
     
        <strong> URL:</strong> {props.text.url} 
        
        <strong> Description:</strong> {props.text.description}
        
      </p>
    </article>
  );
}

export default resourceItem;
