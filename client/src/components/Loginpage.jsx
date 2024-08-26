import React, { useEffect, useState } from 'react'
import "../App.css"
import { Navigate, useNavigate } from 'react-router-dom'
import { useAuth } from './utils/AuthProvider'


const Loginpage = () => {

    const auth = useAuth();

    const [inputs, setInputs] = useState({
        email: "",
        password: ""
    })


    // If the user is already authenticated, redirect to the home page
    if (auth && auth.user) {
        return <Navigate to="/home" />;
    }

    const handleChange = (e) => {

        setInputs({
            ...inputs,
            [e.target.id]: e.target.value
        })

    }

    const handleSubmit = async () => {

        auth.loginAction(inputs);
        return;

    }


    return (
        <>

            <form className='login-container containe1r'>

                <div className="wrapper row">

                    <div className="col-12">

                        <div class="form-group mb-3">
                            <label for="email">Email address</label>
                            <input type="email" class="form-control" id="email" onChange={handleChange} aria-describedby="emailHelp" />
                            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div class="form-group mb-3">
                            <label for="password">Password</label>
                            <input type="password" class="form-control" id="password" onChange={handleChange} />
                        </div>

                        <button type="submit" class="btn btn-primary" onClick={handleSubmit} >Submit</button>

                    </div>
                </div>

            </form>

        </>
    )
}

export default Loginpage