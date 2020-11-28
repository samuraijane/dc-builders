import React from 'react';

const Swatch = (props) => {
    const text = props.isLocked ? 'LOCK' : 'UNLOCK';
    const btnClass = props.isLocked ? "btn btn-outline-dark" : "btn btn-dark";
    return (
        <div style={{ backgroundColor: props.color }} className="w-100 d-flex flex-column align-items-center justify-content-center">
            <h1>{props.color}</h1>
            <button onClick={props.toggle} className={btnClass}>{text}</button>
        </div>
    )
};


export default Swatch