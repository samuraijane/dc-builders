// Render the following items using props filtered down through the List Group
// REFACTOR the previous solution to use 'map' to render the list of items 
// Don't foget the key property

const listText = [
    "Cras justo odio",
    "Dapibus ac facilisis in",
    "Morbi leo risus",
    "Porta ac consectetur ac",
    "Vestibulum at eros"
]

let ListGroupItem = (props) => {
    return (<li className="list-group-item">{props.item}</li>
    );
}

let ListGroup = () => {
    return <span>Make this Component render a handful of ListGroupItems</span>
}


ReactDOM.render(<ListGroup />, document.getElementById('root'))