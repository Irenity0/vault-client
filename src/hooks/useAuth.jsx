// hooks/useAuth.js
import { useState, useEffect } from 'react';

const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(null); // Initially null for loading state

  useEffect(() => {
    const token = localStorage.getItem('token');  // Retrieve token from localStorage
    setIsLoggedIn(!!token);  // Set true if token exists, false otherwise
  }, []);

  return [isLoggedIn, setIsLoggedIn];  // Return both state and setter function
};

export default useAuth;