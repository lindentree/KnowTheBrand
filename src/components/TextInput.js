import React, { useState } from 'react';
import InfoGraphic from './InfoGraphic';

import axios from 'axios';


export default function TextInput(props) {

  const [brand, setBrand] = useState('');
  const [result, setResult] = useState('');

   const handleChange = (event) => {
     setBrand(event.target.value);
  }

  const handleSubmit = (event) => {

    //alert('A name was submitted: ' + brand);
    wolframQuery(brand);
    event.preventDefault();
  }

  const wolframQuery = (search_term) => {
    
    const appID = process.env['REACT_APP_APPID'];
    const formatStr = encodeURI(search_term)
    console.log('firing', formatStr)

    axios.get(`http://api.wolframalpha.com/v2/query?appid=${appID}&input=${formatStr}`)
      .then(response => {
       
        setResult(response.data);
      });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
       <label>
        Brand?
        <input type="text" name="name" onChange={handleChange}/>
        </label>
        <input type="submit" value="Submit"  />
      </form>

      <InfoGraphic wolfram={result}/>
    </div>

    )
}