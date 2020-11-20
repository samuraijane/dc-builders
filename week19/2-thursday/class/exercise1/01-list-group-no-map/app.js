/// Render the following items using props filtered down through the List Group
// DON'T use a map to print to render the list

const listText = [
    "Cras justo odio",
    "Dapibus ac facilisis in",
    "Morbi leo risus",
    "Porta ac consectetur ac",
    "Vestibulum at eros"
]

let ListGroupItem = () => {
    return (
        <div>
            <li className="list-group-item">{listText[0]}</li>
            <li className="list-group-item">{listText[1]}</li>
            <li className="list-group-item">{listText[2]}</li>
            <li className="list-group-item">{listText[3]}</li>
            <li className="list-group-item">{listText[4]}</li>
        </div>
        );
}

let ListGroup = () => {
    return (
        <ul className="list-group">
            <ListGroupItem />
        </ul>
    );
}


ReactDOM.render(<ListGroup />, document.getElementById('root')) 