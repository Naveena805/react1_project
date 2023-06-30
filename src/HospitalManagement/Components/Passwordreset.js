

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SharedContext } from './SharedContext';
import { useContext } from 'react';
import './Style2.css';
const Passwordreset = () => {
  const sharedData = useContext(SharedContext);
  const [inputValue, setInputValue] = useState('');
  const [inputClicked, setInputClicked] = useState(false);
  const navigate4 = useNavigate();

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleInputClick = () => {
    setInputClicked(true);
  };

  const handleSendData = () => {
    
    if (
      inputValue.length >= 5 &&
      /[A-Z]/.test(inputValue) &&
      /[0-9]/.test(inputValue)
    ) {
      sharedData.setData(inputValue);
    navigate4('/');
    } else {
      // Password does not meet the criteria
      alert(
        'Password must contain at least one uppercase letter, at least one number, and be a minimum of 5 characters long.'
      );
    }
  };

  const back = () => {
    navigate4('/');
  };

  return (
    <div className='bodymain container-fluid'>
      <div className='bodymain12 container-fluid'>
      <h1 style={{ color: 'white' }}>
          <u>Reset Password</u>         </h1><br/><br/><br/>

        <input
          type='password'
          value={inputValue}
          style={{ borderRadius: '25px' }}
          placeholder='Type new password'
          onChange={handleInputChange}
          onClick={handleInputClick}
        />

        <button
          type='submit'
          style={{ color: 'white', backgroundColor: 'black', marginLeft: '25px', borderRadius: '25px' }}
          onClick={handleSendData}
        >
          Reset
        </button>

        <button
          type='submit'
          style={{ color: 'white', backgroundColor: 'black', marginLeft: '25px', borderRadius: '25px' }}
          onClick={back}
        >
          Back
        </button><br/><br/>
        {inputClicked && (
          <p className='message' >
         <span style={{color:'red',fontSize:'larger'}}>   Instruction : </span><span style={{color:'black'}}>Password must contain at least one uppercase letter, at least one number, and be a minimum of 5 characters long.
         </span></p>
        )}
      </div>
    </div>
  );
};

export default Passwordreset;


