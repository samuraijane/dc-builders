import React from 'react';

class Address extends React.Component {

  componentDidMount() {
    // When do I run?
    console.log("I run when the component shows up on the page; runs once")
  }

  componentDidUpdate() {
    // When do I run?
    console.log("Every time I re-rerender; run multiple times when props and state change")
  }

  componentWillUnmount() {
    // When do I run?
    console.log("I run before a component is about to be removed from the page")
  }

  render() {
    return (
        <div className="card" style={{ width: this.props.width, padding: "20px" }}>
          <h1>{this.props.name}</h1>
          <h3>{this.props.street}</h3>
          <h3>{this.props.phone}</h3>
        </div>
    )
  }

}

export default Address;