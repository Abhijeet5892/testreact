import React, { useState } from 'react'
import Sresult from './Sresult';
import './Search.css';

const Search = () => {
    const [img, setImg] = useState('');

    const inputEvent = (e) =>{
        const data = e.target.value;
        console.log(data);
        setImg(data);
    }
  return (
    <div>
      <h2>SEARCH HERE</h2>
      <input type='text' placeholder='search here' value={img} onChange={inputEvent} />
      <div>
        <Sresult name = {img} />
      </div>
    </div>
  )
}

export default Search
