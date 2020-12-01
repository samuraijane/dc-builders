import React from 'react';

 const Square = (props) =>  {


    switch(props.mark) {
        case "O":
            return <div>⭕️</div>
        case "X":
            return <div>❌</div>
        default:
            return <div>❓</div>
    }
    
};

export default Square;