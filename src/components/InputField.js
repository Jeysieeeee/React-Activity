import React, { useEffect, useState } from "react";

export const InputField = ()  => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const labelStyle ={
    color: 'white',  
    lineHeight: 2,  
    padding: '10px',

  }
  const divStyle ={
    background: 'darkgray',
    width: '50%'
  }
  const buttonStyle = {
    background: '#4f6166',
    border: '10px',
    padding: '8px',
    margin: '20px',
    color: 'white'

  }
  const handleClick = () => {
    alert(`Welcome to React ${firstName} ${lastName} !`);
    setFirstName("");
    setLastName("");
  };

  useEffect(() => {
    console.log('First Name',firstName)
  }, [firstName])

  const isSubmitDisabled =   firstName === '' || lastName === '';

  return (
    <div style= {divStyle}>
      <h1 style={{textAlign:'left', textIndent: '20px'}}>
        Please input your complete name:</h1>
     
      <label style={labelStyle}>
        First Name: 
        <input
          type="text"
          value={firstName}
          onChange={(e) => {
            setFirstName(e.target.value)
          }}
        />
      </label>
      <br />
      <label style={labelStyle}>
        Last Name:
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </label>
      <br />
      <button style={buttonStyle} onClick={handleClick} disabled={isSubmitDisabled}>
        Submit
      </button>
    </div>
  );
}

export default InputField;
