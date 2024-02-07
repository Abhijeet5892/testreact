import React, { useState } from 'react'

const Usestate4 = () => {
    const test = [
        {
            id: 0, name:'Abhi', age: 24
        }, {
            id: 1, name:'Akash', age: 24
        }, {
            id: 2, name:'vishal', age: 24
        }, {
            id: 3, name:'rohit', age: 24
        }
    ];
    let maindata = { name: 'Abhi', age: 25 };

    const [mydata, setMydata] = useState(maindata);
    console.log(mydata);
    const [data, setData] = useState(test);
    const clearData = () => {
         setData([]);
    }

    const update = () => {
       setMydata({...mydata,name: 'Akash'}); 
    }
    const deletedata = (id) => {
        const newarray = data.filter((currele) => currele.id !== id);
        setData(newarray);
      };
      
  return (
    <div>
    {
        data.map((currele) => {
            return (
                <h1> {currele.id}name {currele.name} And age is  {currele.age} <button onClick={() => deletedata(currele.id)}>remove</button></h1>
                
            )
        })
    }
    <button onClick={clearData}>clear </button>

    <h1> {mydata.id}My Name is {mydata.name} wahmmare And may age is {mydata.age}</h1>
    <button onClick={update}>update Name</button>
     
    </div>
  )
}

export default Usestate4
