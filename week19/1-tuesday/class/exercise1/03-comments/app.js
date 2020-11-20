let ProfilePic = () => {
    return (
        <div>
            <img src="https://pbs.twimg.com/profile_images/736165708883714048/2VnUdO9r.jpg" />
        </div>
    );
    //<span>Make this component render an image</span>
};

let CommentBody = () => {
    return (
        <div>
            <h2><b>Elijah</b></h2>
            <p>This is Elijah's comment.</p>
        </div>
    );
    
//<span>Make this component render a username in bold above the comment text</span>
}

let Comment = () => {
    return (
        <div>
            <ProfilePic />
            <CommentBody />
        </div>
    );

//<span>Make each comment render a profile picture and the comment body</span>
}

let Comments = () => {
    return (
        <div>
            <Comment />
            <Comment />
            <Comment />
        </div>
    );
//<span>Make this component render a list of comments</span>
}

ReactDOM.render(<Comments />, document.getElementById('root'))