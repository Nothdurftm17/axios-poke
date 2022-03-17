import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useEffect, useState} from 'react'
import './App.css';
import axios from 'axios'
import Pokemon from './components/Pokemon';

function App() {

  return (
    <div className="App">
      <Pokemon/>
    </div>
  );
}

export default App;
