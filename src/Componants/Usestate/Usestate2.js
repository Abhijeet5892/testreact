import React, { useState } from 'react';

const Usestate2 = () => {
  let time = new Date().toLocaleTimeString();
  
  const [ctime, setCtime] = useState(time);
  const update = () =>{
    time = new Date().toLocaleTimeString();
    setCtime(time)
  }

  const buttonStyle = {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#3498db',
    color: '#ffffff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '20px',
    transition: 'background-color 0.3s ease-in-out',
  };

  const containerStyle = {
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
    color: '#2c3e50',
  };

  return (
    <div style={containerStyle}>
      <h1 style={{ color: '#3498db' }}>{ctime}</h1>
      <div>
        <button style={buttonStyle} onClick={update}>
          Display current Date
        </button>
      </div>
    </div>
  );
};

export default Usestate2;
