import React from 'react';

import Color from './Color';

class App extends React.Component {
    constructor(props) {
        super(props);
        let initialState = {
            colors: [
                {hex: "#54c06c", isLocked: false},
                {hex: "#e4d623", isLocked: false},
                {hex: "#b5453f", isLocked: false},
                {hex: "#e8630c", isLocked: false},
                {hex: "#5d1170", isLocked: false}
            ]
        }

        this.state = initialState;
    }

    toggleLock(i) {
        let newColors = this.state.colors.map((color, index) => {
            if (i === index) {
                return {
                    ...color,
                    isLocked: !color.isLocked
                }
            } else {
                return color
            }
        })

        this.setState({
            colors: newColors
        });
    }

    randomize() {
        let newColors = this.state.colors.map(color => {
            if (!color.isLocked) {
                return {
                    ...color,
                    hex: '#' + Math.floor(Math.random() * 16777215).toString(16)
                }
            } else {
                return color
            }
        })

        this.setState({
            colors: newColors
        });
    }

    render() {
        return (
            <div>
                <div className="text-center bg-dark fixed-top">
                    <button onClick={() => this.randomize()} className="btn btn-secondary m-1">RANDOMIZE COLORS</button>
                </div>
                <div className="w-100 d-flex" style={{height: "100vh"}}>
                    {
                        this.state.colors.map((color, i) => <Color color={color} key={i} toggle={() => this.toggleLock(i)}/>)
                    }
                </div>
            </div>
        )
    }
}

export default App;