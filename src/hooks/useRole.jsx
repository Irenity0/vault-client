import { useState, useEffect } from "react";
import {jwtDecode} from "jwt-decode";

const useRole = () => {
  const [role, setRole] = useState(null);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const fetchRoleFromToken = () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          setLoading(false);
          return null;
        }

        const decoded = jwtDecode(token); // Decode the token
        setRole(decoded.role || null); // Set the role
      } 
      
      catch (error) {
        console.error("Failed to decode token:", error);
        setRole(null); // Reset the role on error
      }
      
      finally {
        setLoading(false); 
      }
    };

    fetchRoleFromToken();
  }, []);

  return [role, loading];
};

export default useRole;
