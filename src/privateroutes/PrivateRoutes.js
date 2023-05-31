import React from 'react'
import { Navigate } from 'react-router-dom'

const PrivateRoutes = ({children}) => {
    const click=localStorage.getItem("click")
  return (
    <div>
    {click=="true" ? children : <Navigate to="/"/>}
    </div>
  )
}

export default PrivateRoutes
