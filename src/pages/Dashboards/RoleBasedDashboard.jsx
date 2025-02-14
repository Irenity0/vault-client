import React from "react";
import { Navigate } from "react-router-dom";
import UserDashboard from "./UserDashboard";
import AgentDashboard from "./AgentDashboard";
import AdminDashboard from "./AdminDashboard";
import useRole from "../../hooks/useRole";

const RoleBasedDashboard = () => {
  const [role, loading] = useRole();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!role) {
    return <Navigate to="/login" replace />; // Redirect to login if no role
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
