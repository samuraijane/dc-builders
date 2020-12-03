import React from 'react';

import Square from './Square';

class Board extends React.Component {
    // console.log(props)

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm">
                        <Square mark={this.props.pieces[0][0]} />
                    </div>
                    <div className="col-sm">
                        <Square mark={this.props.pieces[0][1]} />
                    </div>
                    <div className="col-sm">
                        <Square mark={this.props.pieces[0][2]} />
                    </div>
                </div>
                <div className="row">
                <div className="col-sm">
                        <Square mark={this.props.pieces[1][0]} />
                    </div>
                    <div className="col-sm">
                        <Square mark={this.props.pieces[1][1]} />
                    </div>
                    <div className="col-sm">
                        <Square mark={this.props.pieces[1][2]} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm">
                        <Square mark={this.props.pieces[2][0]} />
                    </div>
                    <div className="col-sm">
                        <Square mark={this.props.pieces[2][1]} />
                    </div>
                    <div className="col-sm">
                        <Square mark={this.props.pieces[2][2]} />
                    </div>
                </div>
            </div>

        );
    }
};

export default Board;