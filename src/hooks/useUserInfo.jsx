import { useState, useEffect } from "react";
import {jwtDecode} from "jwt-decode";
import useAxiosSecure from "./useAxiosSecure";

const useUserInfo = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const axiosSecure = useAxiosSecure(); // Use secure Axios instance

  useEffect(() => {
  
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          console.error("🚨 No token found in localStorage!");
          return;
        }
  
        const decoded = jwtDecode(token);
  
        const email = decoded.email;
        if (!email) {
          console.error("❌ Token missing email field!");
          return;
        }
  
        const response = await axiosSecure.get(`/users/${email}`);  
        setUser(response.data);
      } 
      
      catch (err) {
        console.error("❌ Error fetching user data:", err);
        setError(err.message);
      } 
      
      finally {
        setLoading(false);
      }
    };
  
    fetchUserData();
  }, []);
  
  
  return { user, loading, error };
};

export default useUserInfo;
