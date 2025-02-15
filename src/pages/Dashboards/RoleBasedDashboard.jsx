import React from "react";
import { Navigate } from "react-router-dom";
import UserDashboard from "./UserDashboard";
import AgentDashboard from "./AgentDashboard";
import AdminDashboard from "./AdminDashboard";
import useRole from "../../hooks/useRole";
import useUserInfo from "../../hooks/useUserInfo";

const RoleBasedDashboard = () => {
  const [role, loading] = useRole();
  const { user, loading: userLoading} = useUserInfo();

  if (loading, userLoading) {
    return <div className="h-[34rem]">Loading...</div>;
  }

  if (!role) {
    return <Navigate to="/login" replace />; // Redirect to login if no role
  }

  if (user?.status === "pending") {
    return <div className="text-yellow-500 text-center p-4 h-[34rem]">Your account is pending approval.</div>;
  }

  if (user?.status === "blocked") {
    return <div className="text-red-500 text-center p-4 h-[34rem]">Your account has been blocked.</div>;
  }

  switch (role) {
    case "user":
      return <UserDashboard />;
    case "agent":
      return <AgentDashboard />;
    case "admin":
      return <AdminDashboard />;
    default:
      return <Navigate to="/login" replace />;
  }
};

export default RoleBasedDashboard;
