import React from 'react';
import ReactDOM from 'react-dom';

import GifSearch from './components/GifSearch';


const App = () => {
  return <GifSearch />
}

ReactDOM.render(<App />,
  document.getElementById('root')
);