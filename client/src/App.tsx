import React from 'react'
import logo from './logo.svg'
import './App.css'
import axios from 'axios'
import {decodeFirst} from 'cbor'

const getData = async () => {
  const response = await  axios.get('http://localhost:3000/image', {responseType:'arraybuffer'})
  console.log(response.data)
  const decoded = await decodeFirst(response.data)
  console.log(decoded)
  }


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          click button to see error
        </p>
        <button onClick={getData}></button>
      </header>
    </div>
  );
}

export default App;
