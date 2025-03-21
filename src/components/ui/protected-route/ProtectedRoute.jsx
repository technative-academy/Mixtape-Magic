import React from 'react'
import { Route } from 'react-router-dom'

const ProtectedRoute = ({ component: Component, ...rest }) => {
    return <Route {...rest} render={(props) => <Component {...props} />} />
}

export default ProtectedRoute
