/// Render the following items using props filtered down through the List Group
// DON'T use a map to print to render the list

import React from 'react';
import ReactDOM from 'react-dom';

const listText = [
    {id: 0, text: "Cras justo odio"},
    {id: 1, text: "Dapibus ac facilisis in"},
    2: "Morbi leo risus",
    3: "Porta ac consectetur ac",
    4: "Vestibulum at eros"
    ]

let ListGroupItem = (props) => {

    return (
        <li className="list-grou-items"> {props.text}</li>
    )
}

let ListGroup = () => {
    return (
        <ul className = 'list-group'>
            listText.map((item) => {
                <ListGroupItem key = {item.id} text = {item.text} />
            })
        </ul>
    )
}


ReactDOM.render(<ListGroup />, document.getElementById('root'))