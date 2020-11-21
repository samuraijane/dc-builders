import React from 'react';

class BetterHeader extends React.Component {
    // console.log(props)
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        return (
            <div>
                <h1>{this.props.title} </h1>
                <h2>Date: {new Date().toLocaleDateString()}</h2>
                <h3>By {this.props.author} </h3>
            </div>
        );
    }
    
};

export default BetterHeader;