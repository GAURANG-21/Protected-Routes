import { Navigate, Outlet } from "react-router-dom"
import PropTypes from 'prop-types'

const ProtectedRoute = ({isAuthenticated,children}) => {
  if(!isAuthenticated) return <Navigate to={"/login"}/>
  return children?children:<Outlet/>
}

export default ProtectedRoute


ProtectedRoute.propTypes = { 
    isAuthenticated: PropTypes.bool,
    children: PropTypes.any
}


//A component that renders the next match in a set of matches