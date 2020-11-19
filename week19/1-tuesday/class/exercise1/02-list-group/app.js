let ListGroupItem = () => {
    return <li className='list-group-item'>Lots of stuff</li>;
};

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


ReactDOM.render(<ListGroup />, document.getElementById('root'));