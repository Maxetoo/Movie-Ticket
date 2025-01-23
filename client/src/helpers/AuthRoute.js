import React from 'react'
import {
  Navigate,
  useLocation,
} from 'react-router-dom'
import { useSelector } from 'react-redux'

const AuthRoute = ({ children }) => {
  const { token } = useSelector((store) => store.auth);
  const location = useLocation()

  if (Object.keys(token).length === 0) {
    return <Navigate to='/login' state={{ from: location }} replace />
  }

  return children
}

export default AuthRoute