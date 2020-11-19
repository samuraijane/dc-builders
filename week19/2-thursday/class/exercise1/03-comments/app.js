// Render the following items using props filtered down through Comments
// Use `map` to render the comment boxes and do some light styling with bootstrap cards to make them look decent.

// Some comments should get a Pill Badge that indicates they are a moderator: https://getbootstrap.com/docs/4.1/components/badge/#pill-badges

const comments = [
    {picUrl: "https://www.generalmills.com/~/media/Images/GMI/Brands/brands-articles/trix-rabbit.jpg", text: "Silly Rabbit, Trix are for Kids!", isModerator: true},
    {picUrl: "https://i.pinimg.com/originals/a1/31/0d/a1310d58235e72e04fff25ac22b25513.png", text: "They're always after me lucky charms!", isModerator: false},
    {picUrl: "https://www.nydailynews.com/resizer/5n_0rVoLJ28MePpleS6XsEmLk7Y=/800x856/top/arc-anglerfish-arc2-prod-tronc.s3.amazonaws.com/public/4HDSW6YT777BLGN7SBPHL7STMM.jpg", text: "They're great!", isModerator: false},
]


let ProfilePic = () => {
    return <span>Make this component render an image</span>
}

let CommentBody = () => {
    return <span>Make this component render a he comment text</span>
}

let Comment = () => {
    return <span>Make each comment render a profile picture and the comment body</span>
}

let Comments = () => {
    return <span>Make this component render a list of comments</span>
}

ReactDOM.render(<Comments />, document.getElementById('root'))