import React from 'react';

const Header = (props) => {
    // console.log(props)

    return (
        <div>
            <h1>{props.title} </h1>
            <h2>Date: {new Date().toLocaleDateString()}</h2>
            <h3>By {props.author} </h3>
        </div>
    );
};

export default Header;