import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <div>
          <label for='nameBox'>First and Last Name:</label>
          <input type='text' id='nameBox'></input>
        </div>
        <div>
          <label for='NPIBox'>NPI Number:</label>
          <input type='number' id='NPIBox'></input>
        </div>
        <div>
          <label for='addressBox'>Business Address:</label>
          <input type='text' id='addressBox'></input>
        </div>
        <div>
          <label for='telephoneBox'>Telephone Number:</label>
          <input type='tel' id='telephoneBox'></input>
        </div>
        <div>
          <label for='emailBox'>Email Address:</label>
          <input type='email' id='emailBox'></input>
        </div>

        <button onclick='submitData()' className='submit-button'>
          Submit
        </button>

        {/*
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
         */}
      </header>
    </div>
  );
}

function submitData() {}

export default App;
