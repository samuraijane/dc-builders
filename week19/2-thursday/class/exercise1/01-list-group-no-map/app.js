/// Render the following items using props filtered down through the List Group
// DON'T use a map to print to render the list

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
        return (
            <ul className="list-group">
                <ListGroupItem item={listText[0]}/>
                <ListGroupItem item={listText[1]}/>
                <ListGroupItem item={listText[2]}/>
                <ListGroupItem item={listText[3]}/>
                <ListGroupItem item={listText[4]}/>
            </ul>
    );        
};



ReactDOM.render(<ListGroup />, document.getElementById('root'))