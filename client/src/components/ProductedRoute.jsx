import React from 'react'
import { useAuth } from './utils/AuthProvider'
import { Navigate, Outlet } from 'react-router-dom';



const ProductedRoute = () => {

    const auth = useAuth();

    if (!auth && !auth.user) return <Navigate to={'/login'} />

    return <Outlet />

}

export default ProductedRoute