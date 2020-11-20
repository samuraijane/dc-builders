// Render the following items using props filtered down through Comments
// Use `map` to render the comment boxes and do some light styling with bootstrap cards to make them look decent.

// Some comments should get a Pill Badge that indicates they are a moderator: https://getbootstrap.com/docs/4.1/components/badge/#pill-badges

const comments = [
    {id: 1, picUrl: "https://www.generalmills.com/~/media/Images/GMI/Brands/brands-articles/trix-rabbit.jpg", text: "Silly Rabbit, Trix are for Kids!", isModerator: true},
    {id: 2, picUrl: "https://i.pinimg.com/originals/a1/31/0d/a1310d58235e72e04fff25ac22b25513.png", text: "They're always after me lucky charms!", isModerator: false},
    {id: 3, picUrl: "https://www.nydailynews.com/resizer/5n_0rVoLJ28MePpleS6XsEmLk7Y=/800x856/top/arc-anglerfish-arc2-prod-tronc.s3.amazonaws.com/public/4HDSW6YT777BLGN7SBPHL7STMM.jpg", text: "They're great!", isModerator: false},
]

let ProfilePic = (props) => {
    return <img src={props.picUrl} style={{height: "6rem", objectFit: "contain"}}></img>
}

let CommentBody = (props) => {
    return <p>{props.text}</p>
}

let Comment = (props) => {
    return (
    <div className="card" style={{width: "18rem"}}>
    <ProfilePic picUrl={props.picUrl} className="card-img-top" />
    <div className="card-body">
        <CommentBody className="card-text" text={props.text}/>
        {props.isModerator === true ? <span className="badge badge-pill badge-primary">Moderator</span> : <span></span>}
    </div>
  </div>)
}

let Comments = () => {
    return (
    <div>
        {comments.map(comment => <Comment key={comment.id} picUrl={comment.picUrl} text={comment.text} isModerator={comment.isModerator} />)} 
    </div>)
}

ReactDOM.render(<Comments />, document.getElementById('root'))