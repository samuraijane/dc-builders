import React from 'react';

class Square extends React.Component {

    render() {
        switch(this.props.mark) {
            case "O":
                return <div>⭕️</div>
            case "X":
                return <div>❌</div>
            default:
                return <div>❓</div>
        }
    }
    
};

export default Square;