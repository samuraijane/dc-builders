import React from 'react';
import ReactDOM from 'react-dom';

import Article from './Article';
import Footer from './Footer';
import Header from './Header';

const Blog = () => {
    return (
    <div>
        <Header />
        <Article /> 
        <Footer />
    </div>
    );
};


ReactDOM.render(<Blog />, document.getElementById('root'));