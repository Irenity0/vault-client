import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";
import useAxiosPublic from "./useAxiosPublic";

const axiosSecure = axios.create({
  baseURL: 'http://localhost:5000'
});

const useAxiosSecure = () => {
  const navigate = useNavigate();
  const [setIsLoggedIn] = useAuth();
  const axiosPublic = useAxiosPublic();
    
  const handleLogout = async () => {
    try {
      // Get the token from localStorage
      const token = localStorage.getItem('token');
      if (!token) {
        console.log('No token found!');
        return;
      }

      // Call the logout API, sending the token for authentication
      await axiosPublic.post('/logout', {}, {
        headers: {
          Authorization: `Bearer ${token}`, // Send token in the Authorization header
        }
      });

      // Remove the token from localStorage
      localStorage.removeItem('token');

      // Update the frontend state to reflect logged-out status
      setIsLoggedIn(false);

      navigate('/');
    } catch (err) {
      console.error('Error logging out:', err);
    }
  };

  axiosSecure.interceptors.request.use(
    function (config) {
      const token = localStorage.getItem("token");
      if (!token) {
        console.warn("🚨 No token found in request interceptor!");
        return config;
      }

      config.headers.Authorization = `Bearer ${token}`;
      return config;
    },
    function (error) {
      console.error("❌ Request Interceptor Error:", error);
      return Promise.reject(error);
    }
  );

  axiosSecure.interceptors.response.use(
    function(response){
      return response;
    }, 
    async (error) => {
      const status = error.response.status;
      console.log(`Status error in the interceptor`, status);
      
      // Only log out on 401 or 403 errors
      if (status === 401 || status === 403) {
        await handleLogout();
        navigate('/login');
      }
      
      // Do not log out for 404 errors, just return the error for handling in the frontend
      if (status === 404) {
        // Return the error for frontend handling
        return Promise.reject(error);
      }
      
      // Handle other cases if needed

      return Promise.reject(error);
    }
  );

  return axiosSecure;
};

export default useAxiosSecure;
