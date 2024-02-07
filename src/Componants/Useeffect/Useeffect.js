import React, { useState } from 'react'
import { useEffect } from 'react';

const Useeffect = () => {
  const [widthCount, setWidthCount] = useState(window.screen.width);

  const actualWidth = () =>{
    setWidthCount(window.innerWidth);
  }

  useEffect(() =>{
    window.addEventListener("resize", actualWidth);

    return () =>{
      window.removeEventListener("resize", actualWidth);

    }
  })
  return (
    <div>
      <h1>Screen size</h1>
      <h2>{widthCount}</h2>
    </div>
  )
}

export default Useeffect
