import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = ({ isAuthenticated }) => {
    return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;

// import React from 'react'
// import { Route } from 'react-router-dom'

// const ProtectedRoute = ({ component: Component, ...rest }) => {
//     return <Route {...rest} render={(props) => <Component {...props} />} />
// }

// export default ProtectedRoute

