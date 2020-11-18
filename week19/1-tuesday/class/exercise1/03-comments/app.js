let ProfilePic = () => {
    return <span>Make this component render an image</span>
}

let CommentBody = () => {
    return <span>Make this component render a username in bold above the comment text</span>
}

let Comment = () => {
    return <span>Make each comment render a profile picture and the comment body</span>
}

let Comments = () => {
    return <span>Make this component render a list of comments</span>
}

ReactDOM.render(<Comments />, document.getElementById('root'))