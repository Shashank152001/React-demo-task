import React from 'react'
import { Outlet,Navigate } from 'react-router-dom'
const ProtectRoute=()=>{
    const authenticationData = JSON.parse(localStorage.getItem('loggedInUser'))
    const auth = authenticationData.isLoggedIn
    console.log(authenticationData)
    return auth? <Outlet/>:<Navigate to={'/login'}/>
}
export default ProtectRoute