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
          <h3> 
            Mission: We want users to understand where you are putting your money. Search a brand and learn more about the brand. You are, what you buy. Normally, we just know the brand name, but do we ever question who the brand is and who is behind it?

          </h3>
          <TextInput />
          <ImageUpload />
      
    </div>
  );
}

export default App;
