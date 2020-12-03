let ProfilePic = () => {
    return <img src="https://media-exp1.licdn.com/dms/image/C5603AQHxSAhLfdhRZg/profile-displayphoto-shrink_200_200/0?e=1611187200&v=beta&t=WZIEOS3jds4NzgvqtPqx6AyKDsm7wd4XhD1-cu4Zk_Y" />
}

let CommentBody = () => {
    return <span><strong>Dan Stough</strong></span>
}

let Comment = () => {
    return (<div>
        <ProfilePic />
        <br />
        <CommentBody />
    </div>);
}

let Comments = () => {
    return (<div>
        <Comment />
        <Comment />
        <Comment />
    </div>);
}

ReactDOM.render(<Comments />, document.getElementById('root'))