import Axios from 'axios'
import React from 'react';
import ReactDOM from 'react-dom';

import ImageCard from './ImageCard'

class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {images: [],
                  isReady: false}    
  }

  componentDidMount() {
    Axios.get("https://dog.ceo/api/breeds/image/random/10")
    // .then(response => response.json())
    .then(response => {
      console.log(response.data)
      this.setState({images: response.data.message});
      this.setState({isReady: true})
    });
  }

  render() {

    if (this.state.isReady){
      return (
        <div className="container">
          {this.state.images.map( url => <ImageCard key={url} width="18rem" url={url} /> )}
        </div>
      )
    } else {
      return <h1>Loading</h1>
    }
    
  }

}

ReactDOM.render(<App />,
  document.getElementById('root')
);