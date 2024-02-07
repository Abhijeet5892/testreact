import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button } from '@mui/material';
import 'bootstrap/dist/css/bootstrap.min.css';


const Usestate = () => {
    const [myname, setMyname] = useState('Abhi');
    const [count, setCount] = useState(0);

    const [studunt, setStudent] = useState({
        name: "Abhijeet",
        age: 25,
        address: "Sangli"
    });

    const updateInfo = () => {
        setStudent(previousState => {
            return { ...previousState, name: "akash" }
        })

    }

    const incr = () => {
        setCount(count + 1)
    }

    const dec = () => {
        if (count > 0) {
            setCount(count - 1)
        } else {
            alert('Sorry this is 0 limit')
            setCount(0)
        }

    }
    const valupdate = () =>{
        let val = myname;

        (val === 'abhi')? setMyname('Akash'): setMyname('abhi');

    }

    //const time = new Date();
    return (
        <div>
            {/* {time.toString()} */}

            <h1>
                My name is {studunt.name} And my Age is {studunt.age} And address {studunt.address}
            </h1>
            <button type='button' onClick={updateInfo}>
                On Click
            </button>

            {/* count incr, dec */}
            <h1 style={{margin: '100px', fontSize: '70px'}}>{count}</h1>
            <Button onClick={incr} style={{margin: '20px', padding: '20px'}} >
                <AddIcon />
            </Button>
            <Button onClick={dec} style={{margin: '20px', padding: '20px'}}>
                <DeleteIcon />
            </Button>


            <button type="button" class='btn btn-danger'>Primary</button>





         <h1>hi {myname}</h1>
         <button onClick={valupdate}>clike me </button>

        </div>


    );
};

export default Usestate;
