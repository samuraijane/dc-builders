import React from 'react';
import ReactDOM from 'react-dom';

import DansButton from './DansButton';

const DansParagraph = () => {
    return (
    <div>
        <DansButton />
        <DansButton />
        <DansButton />
        <DansButton />
        <p className="text-danger">This is my second React Component</p>
    </div>
    );
};

// let dansParagraph = React.createElement('p', {}, 'This is my first React Component');

ReactDOM.render(<DansParagraph />, document.getElementById('root'));