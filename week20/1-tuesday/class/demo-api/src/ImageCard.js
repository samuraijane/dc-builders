import React from 'react';

class ImageCard extends React.Component {

  // constructor() {

  // }

  componentDidMount() {
    console.log("I'm showing up on the screen")
  }

  componentDidUpdate() {
    console.log("Hey, I updated")
  }

  componentWillUnmount() {
      console.log("I'm leaving")
  }

  render() {
    return (
        <div className="card" style={{ width: this.props.width }}>
          <img src={this.props.url} className="card-img-top" alt="..." />
        </div>
    )
  }

}

export default ImageCard;