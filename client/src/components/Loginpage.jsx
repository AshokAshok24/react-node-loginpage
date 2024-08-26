import React, { useState } from 'react'
import "../App.css"
import { useNavigate } from 'react-router-dom'
import { useAuth } from './utils/AuthProvider'
const Loginpage = () => {

    const auth = useAuth();

    const [inputs, setInputs] = useState({
        email: "",
        password: ""
    })

    const handleChange = (e) => {

        setInputs({
            ...inputs,
            [e.target.id]: e.target.value
        })

    }

    const handleSubmit = async () => {

        console.log("inpits", inputs);


        auth.loginAction(inputs);
        return

    }


    return (
        <>
            <div className="login-container">

                <div className="wrapper">

                    <div className='form-field'>
                        <label htmlFor="email">Email</label>
                        <input type="text" id='email' onChange={handleChange} />
                    </div>

                    <div className='form-field'>
                        <label htmlFor='password'>Password</label>
                        <input type="text" id='password' onChange={handleChange} />

                    </div>

                    <div className='form-field'>
                        <button onClick={handleSubmit}>Submit</button>
                    </div>

                </div>

            </div>

        </>
    )
}

export default Loginpage