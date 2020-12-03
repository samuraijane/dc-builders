import React from 'react';

// I just included this to show you that you can make tiny helper comopnents
// This is similar to what the react-bootstrap library would provide.
const BoostrapContainer = (props) => {
    return (
        <div className="container">
            {props.children}
        </div>
    )
}


export default BoostrapContainer;