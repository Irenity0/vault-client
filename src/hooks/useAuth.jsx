// hooks/useAuth.js
import { useState, useEffect } from 'react';

const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(null); // Initially null for loading state
  const [authLoading, setAuthLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');  // Retrieve token from localStorage
    setIsLoggedIn(!!token);  // Set true if token exists, false otherwise
    setAuthLoading(false)
  }, []);

  return [isLoggedIn, setIsLoggedIn, authLoading];  // Return both state and setter function
};

export default useAuth;