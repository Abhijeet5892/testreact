import React, { useState } from 'react'
import './Todolist.css'

const Todolist = () => {
  const [list, setList] = useState();
  const [item, setItem] = useState([]);

  const iteamevent = (e) => {
    setList(e.target.value);
  }

  const changevalue = () => {
    setItem((oldArray) => {
      return [...oldArray, list]
    })
    setList("")
  }

  const deleteitem = (id) => {
    console.log('deleted');
    setItem((olditems) => {
      return olditems.filter((arrElem, index) => {
        return index !== id;
      })
    })
  }
  return (
    <div className="container">
      <h1>TODO LIST</h1>
      <input
        type='text'
        placeholder='Enter value'
        onChange={iteamevent}
        value={list}
      />
      <button onClick={changevalue}>+</button>
  
      <ol>
        {item.map((itemval, index) => (
          <li key={index}>
            {itemval}
            <span onClick={() => deleteitem(index)}>❌</span> {/* Changed the button color */}
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Todolist
