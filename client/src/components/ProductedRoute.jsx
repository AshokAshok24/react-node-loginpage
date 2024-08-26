import React from 'react'
import { useAuth } from './utils/AuthProvider'
import { Navigate, Outlet } from 'react-router-dom';



const ProductedRoute = () => {

    const user = useAuth();

    if (!user) return <Navigate to={'/login'} />

    return <Outlet />

}

export default ProductedRoute