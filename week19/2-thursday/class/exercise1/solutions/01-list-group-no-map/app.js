/// Render the following items using props filtered down through the List Group
// DON'T use a map to print to render the list

const listText = [
    "Cras justo odio",
    "Dapibus ac facilisis in",
    "Morbi leo risus",
    "Porta ac consectetur ac",
    "Vestibulum at eros",
    "Dans sixth item"
]

let ListGroupItem = (props) => {
    return <li className="list-group-item">{props.text}</li>
}

let ListGroup = () => {
    return (
        <ul className="list-group">
            <ListGroupItem text={listText[0]} />
            <ListGroupItem text={listText[1]} />
            <ListGroupItem text={listText[2]} />
            <ListGroupItem text={listText[3]} />
            <ListGroupItem text={listText[4]} />
        </ul>
    );
}


ReactDOM.render(<ListGroup />, document.getElementById('root'))