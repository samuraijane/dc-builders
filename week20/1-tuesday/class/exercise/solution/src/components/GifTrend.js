import React from 'react';

import './GifTrend.css'
import BoostrapContainer from './BootstrapContainer';
import Gif from './Gif';
import giphy from '../api/giphy';

class GifTrend extends React.Component {

  // NEW SCHOOL
  state = {gifs: [], isReady: false}

  // // OLD SCHOOL
  // constructor(props) {
  //   super(props)
  //   this.state = {gifs: [],
  //                 isReady: false}    
  // }

  componentDidMount() {
    giphy.get("/gifs/trending")
      .then(response => {
        // console.log(response.data.data)
        this.setState({gifs: response.data.data.map(record => record.images.original.url) });
        this.setState({isReady: true})
      });
  }

  render() {

    // console.log(this.state)
    const gifs = this.state.isReady ? this.state.gifs.map( url => <Gif key={url} width="18rem" url={url} />) : <h1>Loading</h1>

    return (
      <BoostrapContainer>
        <h1>Trending GIFs (like gift, not jif 👀)</h1>
        {/* Form  will go here*/}
        <div className="gif-flexbox">
          {gifs}
        </div>
      </BoostrapContainer>
    )
      
  }

}

export default GifTrend;