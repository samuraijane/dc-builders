import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = { time: new Date().toLocaleTimeString() }
    }

    render() {
        
        return (
            <div>
                <div>{this.state.time}</div>
                <button onClick={ () => this.render() } >Refresh</button>
            </div>
        )

    }

};


ReactDOM.render(<Blog />, document.getElementById('root'));
