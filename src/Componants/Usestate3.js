import React, { useState } from 'react'

const Usestate3 = () => {
    let time = new Date().toLocaleTimeString();
    
    const date = new Date().toLocaleDateString();

    const [ctime, setCtime] = useState(time);

    const update = () =>{
        time = new Date().toLocaleTimeString();
        setCtime(time);
    }
    setInterval (update, 1000);

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <h1>{date}</h1>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <h1>{ctime}</h1>
        </div>
        </div>

    )
}

export default Usestate3
