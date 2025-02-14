import { Navigate, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useRole from "../hooks/useRole";
import useAxiosPublic from "../hooks/useAxiosPublic";

const AdminRoute = ({children}) => {
    const [setIsLoggedIn, isLoggedIn, authLoading] = useAuth();
    const [role, loading] = useRole();
    const navigate = useNavigate();
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

    if(loading && authLoading){
        return <div>loading...</div>
      }
    
    if (!role && !isLoggedIn) {
      return <Navigate to="/login" replace />;
    }

    if(role !== 'admin'){
        handleLogout();
        navigate('/login');
    }
    
    return children; 
    
}

export default AdminRoute;