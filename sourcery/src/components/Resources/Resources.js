import React from "react";

import ResourceItem from "./ResourceItem";


function Resources (props) {

return (
    <div>
        {props.resources.map((resources, index) => {

            return (
                <div key={index}>
                    <ResourceItem text={resources}/>
                </div>
            );

        })}
        </div>
        
    
    
);
    }

    export default Resources;




        







