import React from 'react';

class GifSearchForm extends React.Component {

    // Make some sensible defaults here
    state = {
        term: "",
        rating: "all",
        limit: "20"
    }
    
    // This is the onSubmit for THIS COMPONENT
    // running `props.onSubmit` is the getGifs function passed down for the PARENT COMPONENT as onSubmit (GifSearch)
    onSubmit = (e) => {
        e.preventDefault()
        this.props.onSubmit(this.state.term, this.state.rating, this.state.limit)
    }

    // NEW!!!
    // I wrote a helper function here to return whether or not a checkbox w/ `value` is currently selected.
    isChecked(value) {
        return String(value) === this.state.limit
    }

    // Standard function that work for all state changes that correspond to an input's name.
    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    render() {
        return (
            <form onSubmit={ this.onSubmit } style={{paddingBottom: "50px"}} >
                <div className="form-group">
                    {/* We covered this binding state to value in class */}
                    <label htmlFor="name">Search Term</label>
                    <input className="form-control" type="text" name="term" value={this.state.term} onChange={this.handleChange}/>
                </div>
                <div className="form-group">
                    <div>Limit</div>
                    <div className="form-check form-check-inline">
                        {/* Don't forget the two way bind for these items too. Plus there is an onChange FOR EACH RADIO BUTTON */}
                        <input className="form-check-input" type="radio" id="five" name="limit" value="5" checked={this.isChecked(5)} onChange={this.handleChange} />
                        <label className="form-check-label" htmlFor="five">5</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" id="twenty" name="limit" value="20" checked={this.isChecked(20)} onChange={this.handleChange} />
                        <label className="form-check-label" htmlFor="twenty">20</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" id="fifty" name="limit" value="50" checked={this.isChecked(50)} onChange={this.handleChange} />
                        <label className="form-check-label" htmlFor="fifty">50</label>
                    </div>
                </div>


                <div className="form-group">
                    <label htmlFor="rating">Rating</label>
                    {/* I only need one onChange for this component. The value here set the value of the whole control and can change the selected item */}
                    <select className="form-control" name="rating" value={this.state.rating} onChange={this.handleChange}>
                        {/* These values only apply WHEN THIS OPTION IS SELECTED */}
                        <option value="all">All</option>
                        <option value="g">G</option>
                        <option value="pg">PG</option>
                        <option value="pg-13">PG-13</option>
                        <option value="r">R</option>
                    </select>
                </div>
                <button className="btn btn-primary" type="submit">Submit</button>
            </form>
        )
    }
}

export default GifSearchForm;