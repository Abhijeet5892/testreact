import React, { useState, useEffect } from 'react';

function Useeffectdatetime() {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  const date = new Date().toLocaleDateString();
  const time = new Date().toLocaleTimeString();

  const style = {
    color: "red"
  }
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000); // Update every second

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <div>
      <p>Current Date and Time:</p>
      <h1> <span style={style}>{date}</span></h1>
      <h1>{time}</h1>
      <p>{currentDateTime.toLocaleString()}</p>

    </div>
  );
}

export default Useeffectdatetime;
