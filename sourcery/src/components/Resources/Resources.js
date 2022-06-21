import React from "react";

import ResourceItem from "../ResourceItem/ResourceItem";


function Resources (props) {

return (
    <div>
        {props.resource.map((resources, index) => {

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




        







