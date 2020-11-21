import React from 'react';

const ArticleBody = (props) => {
    // console.log(props)

    return (
        <div className="container">
           {props.children}
        </div>
    );
};

export default ArticleBody;