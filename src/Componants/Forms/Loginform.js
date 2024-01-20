import React, { useState } from 'react'

const Loginform = () => {

    const [fullName, setFullName] = useState({
        fname: "",
        lname: "",
        email: "",
        phone: "",
    });
    
    const inputEvent = (event) => {
        //console.log(event.target.value);
        //console.log(event.target.name);
        
        const {value,name} = event.target;

        setFullName((prevalue) =>{
            return{
                ...prevalue,
                [name]: value,
            };

            // if(name === 'fname'){
            //     return{
            //         fname: value,
            //         lname: prevalue.lname, 
            //         email: prevalue.email,
            //         phone: prevalue.phone,
            //     }
            // }else if(name === 'lname'){
            //     return{
            //         fname: prevalue.fname,
            //         lname: value, 
            //         email: prevalue.email,
            //         phone: prevalue.phone,
            //     }
            // }else if(name === 'email'){
            //     return{
            //         fname: prevalue.fname,
            //         lname: prevalue.email, 
            //         email: value,
            //         phone: prevalue.phone,
            //     }
            // }else if(name === 'phone'){
            //     return{
            //         fname: prevalue.fname,
            //         lname: prevalue.phone, 
            //         email: prevalue.email,
            //         phone: value,
            //     }
            // }
        })
       
    }

    const onSubmit = (e) => {
        e.preventDefault();
        alert('form submited successfully')
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <h1>Hello {fullName.fname} {fullName.lname}  </h1>
                <p>
                {fullName.email} {fullName.phone}
                </p>
                <input
                    type='text'
                    placeholder='Enter FName'
                    name='fname'
                    onChange={inputEvent}
                    Value={fullName.fname}
                />
                <br /><br />
                <input
                    type='text'
                    placeholder='Enter LName'
                    name='lname'
                    onChange={inputEvent}
                    Value={fullName.lname}
                />
                <br /><br />
                <input
                    type='email'
                    placeholder='Enter email'
                    name='email'
                    onChange={inputEvent}
                    Value={fullName.email}
                />
                <br /><br />
                <input
                    type='number'
                    placeholder='Enter phone number'
                    name='phone'
                    onChange={inputEvent}
                    Value={fullName.phone}
                />
                <br /><br />

                <button type='submit'>Click me!</button>
            </form>
        </div>
    )
}

export default Loginform
