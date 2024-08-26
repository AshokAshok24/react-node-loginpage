import React, { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);

    useEffect(() => {
        const isLoginedIn = localStorage.getItem('logineduser') === 'true';

        if (isLoginedIn) {
            setUser({ id: 1, name: "user" });
        } else {
            // Only navigate if not already on the login page
            if (window.location.pathname !== '/login') {
                navigate('/login');
            }
        }
    }, [navigate]);

    const loginAction = async (data) => {
        try {
            const response = await fetch('http://localhost:4000/auth', {
                method: "POST",
                headers: {
                    'content-type': "application/json"
                },
                body: JSON.stringify(data)
            });

            const responseData = await response.json();

            if (responseData.status === 1) {
                setUser(responseData.data);
                localStorage.setItem('logineduser', 'true');
                navigate('/home');
            } else if (responseData.status === 0) {
                alert(responseData.message);
            }
        } catch (error) {
            console.log(error);
        }
    };

    const logOut = () => {
        setUser(null);
        localStorage.removeItem('logineduser');
        navigate('/login');
    };

    return (
        <AuthContext.Provider value={{ loginAction, user, logOut }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

export const useAuth = () => {
    return useContext(AuthContext);
};
