let ListGroupItem = () => {
    return <li className="list-group-item">Cras justo odio</li>;
               
}

let ListGroup = () => {
    return (
            <ul className="list-group">
                <ListGroupItem />
                <ListGroupItem />
                <ListGroupItem />
                <ListGroupItem />
                <ListGroupItem />
            </ul>
    );        
};


ReactDOM.render(<ListGroup />, document.getElementById('root'))