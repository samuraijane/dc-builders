// Render the following items using props filtered down through the List Group
// REFACTOR the previous solution to use 'map' to render the list of items 
// Don't foget the key property

const listText = [
    {id: 1, text: "Cras justo odio"},
    {id: 2, text: "Dapibus ac facilisis in"},
    {id: 3, text: "Morbi leo risus"},
    {id: 4, text: "Porta ac consectetur ac"},
    {id: 5, text: "Vestibulum at eros"},
    {id: 6, text: "Test"}
];

let ListGroupItem = (props) => {
    return <li className="list-group-item">{props.text}</li>
}

let ListGroup = () => {
    return (
        <ul className="list-group">
            {listText.map( item => <ListGroupItem key={item.id} text={item.text} /> )}
        </ul>
    );
}


ReactDOM.render(<ListGroup />, document.getElementById('root'))