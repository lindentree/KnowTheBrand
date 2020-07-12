import React from 'react';
import logo from './logo.svg';

import TextInput from './components/TextInput';
import ImageUpload from './components/ImageUpload';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1> Know Your Brand </h1>
      
      </header>
          <TextInput />
          <ImageUpload />
      
    </div>
  );
}

export default App;
