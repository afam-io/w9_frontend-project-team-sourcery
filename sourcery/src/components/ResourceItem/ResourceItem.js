import React from "react";

function resourceItem(props) {

return (
    <div>
    <p>{props.name.text}</p>
    <p>{props.url.text}</p>
    <p>{props.description.text}</p>
    </div>
);
}

export default resourceItem;