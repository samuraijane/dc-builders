import React from 'react';
import ReactDOM from 'react-dom';

import Clock from './Clock'

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = { time: new Date().toLocaleTimeString() }
    }

    _updateTime() {
        this.setState({time: new Date().toLocaleTimeString()})

        // Write bunch of extra stuff here
    }

    render() {
        
        return (
            <div>
                <Clock time={this.state.time} />
                <button onClick={ ()=> this._updateTime() } >Refresh</button>
            </div>
        );
    }

};


ReactDOM.render(<App />, document.getElementById('root'));
