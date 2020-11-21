import React from 'react';

class Square extends React.Component {

    render() {
        switch(this.props.mark) {
            case "X":
                return <div>⭕️</div>
            case "O":
                return <div>❌</div>
            default:
                return <div>❓</div>
        }
    }
    
};

export default Square;