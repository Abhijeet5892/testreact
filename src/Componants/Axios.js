import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Axios = () => {
    const [num, setNum] = useState();
    const [name, setName] = useState();
    const [moves, setMoves] = useState();

    useEffect(() => {
        const getdata = async () =>{
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
            console.log(res);
            setName(res.data.name);
            setMoves(res.data.moves.length);
        }
        getdata();
    },[num])
    return (
        <div>
            <h1>your choise <span style={{color: 'red'}}>{num} </span> value </h1>
            <h1>Name is <span style={{color: 'red'}}>{name} </span> </h1>
            <h1>Moves is <span style={{color: 'red'}}>{moves} </span></h1>


            <select onChange={(e) => {
                setNum(e.target.value)
            }}>
                <option>1</option>
                <option>25</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
            </select>
        </div>
    )
}

export default Axios
