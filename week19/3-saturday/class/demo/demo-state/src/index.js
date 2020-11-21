import React from 'react';
import ReactDOM from 'react-dom';

import Header from './Header';
import BetterHeader from './BetterHeader';

import ArticleBody from './ArticleBody';

const Blog = () => {
    const data = [
        {id: 1, author: "Tiger", title: "Carole Made Me Do It"},
        {id: 2, author: "Dan", title: "The Steelers are Undefeated"},
        {id: 3, author: "Lewis", title: "Killer Wasps are our new Overlords"}
    ]

    // const data = [];

    if (data.length > 0){
        return (
            <div>
                { data.map( article =>{ 
                    return (
                    <div>
                        <BetterHeader key={article.id} author={article.author} title={article.title} />
                        <ArticleBody><p>Carole Baskin did it. Case Closed</p></ArticleBody>
                    </div>);
                } )}
            </div>
         );
    } else {
        return <h1>Data Not Found</h1>
    }

    // return (
    //    <div>
    //        { data.map( article => <Header key={article.id} author={article.author} title={article.title} /> )}
    //    </div>
    // );
    // return (
    //    <div>
    //        <Header author="Tiger" title="Carole Made Me Do It" />
    //        <Header author="Dan" title="The Steelers are Undefeated" />
    //        <Header author="Lewis" title="Killer Wasps are our new Overlords" />
    //    </div>
    // );
};


ReactDOM.render(<Blog />, document.getElementById('root'));
