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

let ListGroupItem = () => {
    return <span>Make this component render like a Bootstrap list group item: <a href="https://getbootstrap.com/docs/4.1/components/list-group/" target="_blank">https://goo.gl/images/mY5Qdv</a></span>
}

let ListGroup = () => {
    return <span>Make this Component render a handful of ListGroupItems</span>
}


ReactDOM.render(<ListGroup />, document.getElementById('root'))