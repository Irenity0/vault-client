import React from 'react';
import useAuth from '../hooks/useAuth';
import { Navigate } from 'react-router-dom';
import useRole from '../hooks/useRole';

const PrivateRoute = ({ children }) => {
  const [isLoggedIn, authLoading] = useAuth();
  const [role, loading] = useRole();
  
  if(loading && authLoading){
    return <div className='h-[34rem]'>loading...</div>
  }

  if (!role && !isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  return children; 
};

export default PrivateRoute;