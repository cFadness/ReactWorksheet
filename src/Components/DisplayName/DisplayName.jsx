import React from 'react';
import "./DisplayName.css"

const DisplayName = (props) => {
    return (
        <div className="centered">
            <h1>{props.firstName} {props.lastName}</h1>
        </div>
    );
}
 
export default DisplayName;