import React from 'react'
import { useAuth } from './utils/AuthProvider'

const Home = () => {

    const auth = useAuth()

    const handleLogout = () => {
        auth.logOut()

    }
    return (
        <>
            <div className='container m-5'>

                <div className='mb-3'>Home</div>

                <button className='btn btn-primary' onClick={handleLogout}>Logout</button>
            </div>
        </>
    )
}

export default Home