import logo from './logo.svg';
import './App.css';
import reactDom from 'react-dom';
import React from 'react';

const initialState = {
  name: '',
  NPInumber: '',
  address: '',
  telephone: '',
  email: '',
};

export default class AvailityPage extends React.Component {
  constructor(props) {
    super(props);
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
              name='name'
              value={this.state.name}
              onChange={this.handleChange}
            ></input>
          </div>
          <div>
            <label for='NPIBox'>NPI Number:</label>
            <input
              type='number'
              id='NPIBox'
              name='NPInumber'
              value={this.state.NPInumber}
              onChange={this.handleChange}
            ></input>
          </div>
          <div>
            <label for='addressBox'>Business Address:</label>
            <input
              type='text'
              id='addressBox'
              name='address'
              value={this.state.address}
              onChange={this.handleChange}
            ></input>
          </div>
          <div>
            <label for='telephoneBox'>Telephone Number:</label>
            <input
              type='tel'
              id='telephoneBox'
              name='telephone'
              value={this.state.telephone}
              onChange={this.handleChange}
            ></input>
          </div>
          <div>
            <label for='emailBox'>Email Address:</label>
            <input
              type='email'
              id='emailBox'
              name='email'
              value={this.state.email}
              onChange={this.handleChange}
            ></input>
          </div>
          <input type='submit' className='submit-button' value='Submit' />
        </header>
      </form>
    );
  }

  submitData = (event) => {
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
  };

  handleChange = (event) =>
    this.setState({ [event.target.name]: event.target.value });
}
