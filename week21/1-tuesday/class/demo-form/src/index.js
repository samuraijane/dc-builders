import React from 'react';
import ReactDOM from 'react-dom';

import Address from './Address'
import AddressForm from './AddressForm'

class App extends React.Component {

  state = {addresses: [
    {street: "123 Main street", name: "IC Weiner", phone: "555-5555"},
    {street: "1000 Pennsylvania Ave", name: "Seymour Butts", phone: "867-5309"},
    {street: "9 3/4 Street", name: "Blarry Plotter", phone: "111-867-5309"}
  ]}

  addAddress = (name, street, phone) => {
    const addresses = this.state.addresses;
    addresses.push({street: street, name: name, phone: phone})
    this.setState({addresses: addresses})
  }

  render() {

    return (
      <div className="container">
        <AddressForm onSubmit={this.addAddress} />
        {this.state.addresses.map( ({phone, name, street}) => <Address key={phone} name={name} street={street} phone={phone} />)}
      </div>
    )
    
  }

}

ReactDOM.render(<App />,
  document.getElementById('root')
);