import logo from './logo.svg';
import './App.css';
import reactDom from 'react-dom';
import React from 'react';

const initialState = {
  name: '',
  NPInumber: null,
  address: '',
  telephone: '',
  email: '',
};

export default class AvailityPage extends React.Component {
  constructor(props) {
    super(props);
    this.submitData = this.submitData.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleNPIChange = this.handleNPIChange.bind(this);
    this.handleAddressChange = this.handleAddressChange.bind(this);
    this.handleTelephoneChange = this.handleTelephoneChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);

    this.state = initialState;
  }
  render() {
    return (
      <form className='App' onSubmit={this.submitData}>
        <header className='App-header'>
          <div>
            <label for='nameBox'>First and Last Name:</label>
            <input
              type='text'
              id='nameBox'
              value={this.state.name}
              onChange={this.handleNameChange}
            ></input>
          </div>
          <div>
            <label for='NPIBox'>NPI Number:</label>
            <input
              type='number'
              id='NPIBox'
              value={this.state.NPInumber}
              onChange={this.handleNPIChange}
            ></input>
          </div>
          <div>
            <label for='addressBox'>Business Address:</label>
            <input
              type='text'
              id='addressBox'
              value={this.state.address}
              onChange={this.handleAddressChange}
            ></input>
          </div>
          <div>
            <label for='telephoneBox'>Telephone Number:</label>
            <input
              type='tel'
              id='telephoneBox'
              value={this.state.telephone}
              onChange={this.handleTelephoneChange}
            ></input>
          </div>
          <div>
            <label for='emailBox'>Email Address:</label>
            <input
              type='email'
              id='emailBox'
              value={this.state.email}
              onChange={this.handleEmailChange}
            ></input>
          </div>
          <input type='submit' className='submit-button' value='Submit' />
        </header>
      </form>
    );
  }

  submitData(event) {
    // create an alert
    const { name, NPInumber, address, telephone, email } = this.state;
    let string = '';
    string += 'submitting data....\n';

    string += `Name: ${name}\n`;
    string += `NPI Number: ${NPInumber}\n`;
    string += `Business Address: ${address}\n`;
    string += `Telephone Number: ${telephone}\n`;
    string += `Email Address: ${email}\n`;

    string += 'data sent.';

    window.alert(string);
    event.preventDefault();

    // clear out the text fields

    this.setState(initialState);
  }
  handleNameChange(event) {
    this.setState({ name: event.target.value });
  }
  handleNPIChange(event) {
    this.setState({ NPInumber: event.target.value });
  }
  handleAddressChange(event) {
    this.setState({ address: event.target.value });
  }
  handleTelephoneChange(event) {
    this.setState({ telephone: event.target.value });
  }
  handleEmailChange(event) {
    this.setState({ email: event.target.value });
  }
}
