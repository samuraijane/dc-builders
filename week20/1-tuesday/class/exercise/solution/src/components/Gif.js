import React from 'react';

const Gif = (props) => {
    return (
        <div className="card" style={{ width: props.width, padding: "20px" }}>
          <img src={props.url} className="card-img-top" alt="..." />
        </div>
    )
}

export default Gif;