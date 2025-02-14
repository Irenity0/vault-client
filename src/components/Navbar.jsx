import { Link, useNavigate } from "react-router-dom";
import useAxiosPublic from "../hooks/useAxiosPublic";
import useAuth from "../hooks/useAuth";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useAuth(); // Manage login state
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();

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
  

  return (
    <div className="bg-[#d1b48c] text-[#7a0106] shadow-sm">
      <div className="w-11/12 navbar mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              <li><a>Item 1</a></li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li><a>Submenu 1</a></li>
                  <li><a>Submenu 2</a></li>
                </ul>
              </li>
              <li><a>Item 3</a></li>
            </ul>
          </div>
          <Link to={'/'} className="btn btn-ghost text-2xl hover:bg-[#7a0106] hover:text-[#d1b48c] hover:border-none border-none font-bold">Vault_</Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><a>Item 1</a></li>
            <li>
              <details>
                <summary>Parent</summary>
                <ul className="p-2">
                  <li><a>Submenu 1</a></li>
                  <li><a>Submenu 2</a></li>
                </ul>
              </details>
            </li>
            <li><a>Item 3</a></li>
          </ul>
        </div>

        <div className="navbar-end space-x-5 text-[#d1b48c]">
          {isLoggedIn ? (
            <>
              <Link to="/dashboard" className="btn bg-[#7a0106] border-none">Dashboard</Link>
              <button onClick={handleLogout} className="btn bg-[#7a0106] border-none">Logout</button>
            </>
          ) : (
            <>
              <Link className="btn bg-[#7a0106] border-none" to={'/login'}>Login</Link>
              <Link className="btn bg-[#7a0106] border-none" to={'/register'}>Register</Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
