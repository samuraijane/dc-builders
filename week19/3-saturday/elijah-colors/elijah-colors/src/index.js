import React from 'react';
import ReactDOM from 'react-dom';
import Swatch from './Swatch';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            swatch1: { color: this.randomColor(), isLocked: false},
            swatch2: { color: this.randomColor(), isLocked: false},
            swatch3: { color: this.randomColor(), isLocked: false},
            swatch4: { color: this.randomColor(), isLocked: false},
            swatch5: { color: this.randomColor(), isLocked: false}
        }
    }

    // Returns a random color hex code
    randomColor() {
        return '#' + Math.floor(Math.random() * 16777215).toString(16);
    }

    randomize() {
        if(!this.state.swatch1.isLocked) this.setState({swatch1: {color: this.randomColor(), isLocked: this.state.swatch1.isLocked}})
        if(!this.state.swatch2.isLocked) this.setState({swatch2: {color: this.randomColor(), isLocked: this.state.swatch1.isLocked}})
        if(!this.state.swatch3.isLocked) this.setState({swatch3: {color: this.randomColor(), isLocked: this.state.swatch1.isLocked}})
        if(!this.state.swatch4.isLocked) this.setState({swatch4: {color: this.randomColor(), isLocked: this.state.swatch1.isLocked}})
        if(!this.state.swatch5.isLocked) this.setState({swatch5: {color: this.randomColor(), isLocked: this.state.swatch1.isLocked}})
    }

//Go back and watch the video to fix this part
    toggleLock(currentSwatch) {
        this.setState({currentSwatch: {color: this.state.swatch1.color, isLocked: !this.state.swatch1.isLocked}})
    }

    render() {
        return (
            <div className="text-center bg-dark fixed-top">
                <button className="btn btn-secondary m-1" onClick={ () => { this.randomize() } }>RANDOMIZE COLORS</button>  
                <div className="w-100 d-flex" style={{ height: "100vh"}}>
                    <Swatch color={this.state.swatch1.color} isLocked={this.state.swatch1.isLocked} toggle={ () => { this.toggleLock("swatch1") } } />
                    <Swatch color={this.state.swatch2.color} isLocked={this.state.swatch2.isLocked} toggle={ () => { this.toggleLock("swatch2") } } />
                    <Swatch color={this.state.swatch3.color} isLocked={this.state.swatch3.isLocked} toggle={ () => { this.toggleLock("swatch3") } } />
                    <Swatch color={this.state.swatch4.color} isLocked={this.state.swatch4.isLocked} toggle={ () => { this.toggleLock("swatch4") } } />
                    <Swatch color={this.state.swatch5.color} isLocked={this.state.swatch5.isLocked} toggle={ () => { this.toggleLock("swatch5") } } />
                </div>
            </div>
    )}
}

export default App
ReactDOM.render(<App />, document.getElementById('root'));