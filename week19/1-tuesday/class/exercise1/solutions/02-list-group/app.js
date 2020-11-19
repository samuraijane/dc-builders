let BootstrapGroupItem = () => {
    return <li className="list-group-item">Cras justo odio</li>;
}

let BootstrapGroup = () => {
    return (
        <ul className="list-group">
            <BootstrapGroupItem />
            <BootstrapGroupItem />
            <BootstrapGroupItem />
            <BootstrapGroupItem />
            <BootstrapGroupItem />
        </ul>
    );
};


ReactDOM.render(<BootstrapGroup />, document.getElementById('root'))