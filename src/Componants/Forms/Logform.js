import React, {useState} from "react";


const Logform = () => {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");

    const [formdata, setFormdata] = useState([]);
        
    const formAlldata = (e) => {
        e.preventDefault();
        if (email && pass) {
            const newarry = { id: new Date().getTime().toString(), email: email, password: pass };
        setFormdata([...formdata, newarry]);

        setEmail("");
        setPass("");
        }else{
            alert("please fill all field")
        }
        

    }

    return (
        <div>
            <form onSubmit={formAlldata}>
                <h1>Login form</h1>
                <input 
                    type="email"
                    name="email" 
                    id="email"
                    placeholder='enter email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                /><br /><br />
                <input 
                    type="password"
                    name="password"
                    id="pass"
                    placeholder='enter password'
                    value={pass}
                    onChange={(e) => setPass(e.target.value)}
                /><br /><br />
                <button type='submit'>Login</button>
                {
                    formdata.map((currele) => {
                        return (
                            <div key={currele.id}>
                                <h1> email :- {currele.email} {currele.password} </h1>
                            </div>
                        )
                    })
                }
            </form>
        </div>
    );
}

export default Logform;
