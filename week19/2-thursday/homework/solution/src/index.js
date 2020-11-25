import React from 'react';
import ReactDOM from 'react-dom';

import Board from './Board';

const board = [
    ['X', 'X', 'X'],
    ['X', 'O', 'O'],
    ['X', 'X', 'O'],
];

class App extends React.Component {

    render() {
        return <Board pieces={board} />
    }
};


ReactDOM.render(<App />, document.getElementById('root'));
