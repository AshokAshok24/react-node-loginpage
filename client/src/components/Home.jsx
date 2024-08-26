    import React from 'react'
    import { useAuth } from './utils/AuthProvider'

    const Home = () => {

        const auth = useAuth()

        const handleLogout = () => {
            auth.logOut()

        }
        return (
            <>
                <div>Home</div>

                <button onClick={handleLogout}>Logout</button>

            </>
        )
    }

    export default Home