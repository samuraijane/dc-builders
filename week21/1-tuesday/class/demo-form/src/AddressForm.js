import React from 'react';

class AddressForm extends React.Component {

    state = {
        name: "",
        street: "",
        phone: ""
    }

    onSubmit = (e) => {
        e.preventDefault()
        this.props.onSubmit(this.state.name, this.state.street, this.state.phone)
    }

    handleChange = (e) => {
        console.log(e.target.value)
        console.log(e.target.name)
        this.setState({[e.target.name]: e.target.value})
    }

    render() {
        return (
            <form onSubmit={ this.onSubmit } >
                <label htmlFor="name">Name</label>
                <input type="text" name="name" value={this.state.name} onChange={this.handleChange}/><br />
                <label htmlFor="address">Street</label>
                <input type="text" name="street" value={this.state.street} onChange={this.handleChange}/><br />
                <label htmlFor="phone">Phone</label>
                <input type="text" name="phone" value={this.state.phone} onChange={this.handleChange}/><br />
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default AddressForm;