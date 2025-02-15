import { Navigate, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useRole from "../hooks/useRole";
import useAxiosPublic from "../hooks/useAxiosPublic";
import useUserInfo from "../hooks/useUserInfo";

const UserRoute = ({ children }) => {
  const [setIsLoggedIn, isLoggedIn, authLoading] = useAuth();
  const [role, loading] = useRole();
  const { user, loading: userLoading, error } = useUserInfo();
  console.log(user);
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();

  const handleLogout = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        console.log("No token found!");
        return;
      }

      await axiosPublic.post(
        "/logout",
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      localStorage.removeItem("token");
      setIsLoggedIn(false);
      navigate("/");
    } catch (err) {
      console.error("Error logging out:", err);
    }
  };

  if (loading || authLoading || userLoading) {
    return <div className="h-[34rem]">Loading...</div>;
  }

  if (!role || !isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  if (role !== "user") {
    handleLogout();
    return <Navigate to="/login" replace />;
  }

  if (user?.status === "pending") {
    return <div className="text-yellow-500 text-center h-[34rem] p-4">Your account is pending approval.</div>;
  }

  if (user?.status === "blocked") {
    return <div className="text-red-500 text-center h-[34rem] p-4">Your account has been blocked.</div>;
  }

  return children;
};

export default UserRoute;