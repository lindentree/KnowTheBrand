import React, { useState, useEffect } from 'react';
import InfoGraphic from './InfoGraphic';

import axios from 'axios';


export default function TextInput(props) {

  const [brand, setBrand] = useState('');
  const [result, setResult] = useState('');
  const [served, setServed] = useState('');

  const handleChange = (event) => {

    setBrand(event.target.value);
  }

  const handleSubmit = (event) => {

    //alert('A name was submitted: ' + brand);
    searchQuery(brand);
    event.preventDefault();
  }

  const wolframQuery = (search_term) => {

    const appID = process.env['REACT_APP_APPID'];
    const formatStr = encodeURI(search_term)
    //console.log('firing', formatStr)

    axios.get(`http://api.wolframalpha.com/v2/query?appid=${appID}&input=${formatStr}`)
      .then(response => {

        setResult(response.data);
      });
  }


  const genericQuery = (search_term) => {

    axios.get(`api/food`)
      .then(response => {
        setResult(JSON.stringify(response.data));
      });
  }

  const searchQuery = (search_term) => {

    axios.get(`api/food/${search_term}`)
      .then(response => {
        let results = response.data[0].brands;
        setServed(JSON.stringify(results));
      });
  }

  useEffect(() => {
    genericQuery();
  }, [])

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Brand?
        <input type="text" name="name" onChange={handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>

      <div>
        <h4>Here are some of the brands affiliated with {brand.charAt(0).toUpperCase() + brand.slice(1)}: {served}</h4>
      </div>
    </div>

  )
}