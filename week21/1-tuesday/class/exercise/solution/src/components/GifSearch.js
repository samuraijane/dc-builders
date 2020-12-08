import React from 'react';

import './GifSearch.css'
import BoostrapContainer from './BootstrapContainer';
import Gif from './Gif';
import giphy from '../api/giphy';
import GifSearchForm from './GifSearchForm';

class GifSearch extends React.Component {

  state = {gifs: [], isReady: false}

  componentDidMount() {
    
  }

  getGifs = (term, rating, limit) => {
    // Set the state back to false while we regerate gifs.
    this.setState({isReady: false});

    // Start setting up the query parameters for Axios
    const params = {
      q: term,
      limit: limit
    };

    // "All" is not a valid rating - just don't send it.
    if( rating !== "all") params.rating = rating;

    // Make the search with the added query parameters
    giphy.get('/gifs/search', {
      params: params
    }).then(response => {
       // console.log(response.data.data)
       this.setState({gifs: response.data.data.map(record => record.images.original.url) });
       this.setState({isReady: true})
     })
  }

  render() {

    const gifs = this.state.isReady ? 
      this.state.gifs.map( url => <Gif key={url} width="18rem" url={url} />) : 
      <img src="https://cdn140.picsart.com/322889586445201.png?type=webp&to=min&r=1024" alt="need input"/>

    return (
      <BoostrapContainer>
        <h1>Search GIFs (like gift, not jif 👀)</h1>
        <GifSearchForm onSubmit={this.getGifs} />
        <h1>Results</h1>
        <div className="gif-flexbox">
          {gifs}
        </div>
      </BoostrapContainer>
    )
      
  }

}

export default GifSearch;