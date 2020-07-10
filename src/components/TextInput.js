import React, { useState } from 'react';

export default function TextInput(props) {

  const [brand, setBrand] = useState('');

   const handleChange = (event) => {
     setBrand(event.target.value);
  }

  const handleSubmit =(event) => {

    alert('A name was submitted: ' + brand);
    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
     <label>
      Brand?
      <input type="text" name="name" onChange={handleChange}/>
     </label>
      <input type="submit" value="Submit"  />
    </form>

    )
}