import React from 'react';
import ReactDOM from 'react-dom';

import GifTrend from './components/GifTrend';


const App = () => {
  return <GifTrend />
}

ReactDOM.render(<App />,
  document.getElementById('root')
);