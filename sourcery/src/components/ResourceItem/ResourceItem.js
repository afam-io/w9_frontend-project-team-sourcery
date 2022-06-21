import React from "react";

function resourceItem(props) {

return (
    <div>
    <p>Name:  {props.text.name} URL:  {props.text.url} Description:  {props.text.description}</p>
 
    
    </div>
);
}

export default resourceItem;