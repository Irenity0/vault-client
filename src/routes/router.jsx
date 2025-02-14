import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import HomePage from "../pages/HomePage";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";
import SendMoneyPage from "../pages/SendMoneyPage";
import CashOutPage from "../pages/CashOutPage";
import UserTransactions from "../pages/Transaction_Pages/UserTransactions";
import AgentTransactions from "../pages/Transaction_Pages/AgentTransactions";
import CashInPage from "../pages/CashInPage";
import RechargeTable from "../pages/Dashboards/AdminPages/RechargeTable";
import AgentApprovalPage from "../pages/Dashboards/AdminPages/AgentApprovalPage";
import UserManagement from "../pages/Dashboards/AdminPages/UserManagement";
import UserNotifications from "../pages/Dashboards/UserNotifications";
import PrivateRoute from "./privateRoute";
import RoleBasedDashboard from "../pages/Dashboards/RoleBasedDashboard";
import UserRoute from "./userRoute";
import AgentRoute from "./agentRoute";
import AdminRoute from "./adminRoute";

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <HomePage />
      },
      {
        path: 'login',
        element: <LoginPage/>
      },
      {
        path: 'register',
        element: <RegisterPage/>
      },
      {
        path: 'dashboard',
        element: <PrivateRoute><RoleBasedDashboard/></PrivateRoute>
      },
      {
        path: 'send-money',
        element: <UserRoute><SendMoneyPage/></UserRoute>
      },
      {
        path: 'cash-in',
        element: <AgentRoute><CashInPage/></AgentRoute>
      },
      {
        path: 'cash-out',
        element: <UserRoute><CashOutPage/></UserRoute>
      }, 
      {
        path: 'user-transactions',
        element: <UserRoute><UserTransactions/></UserRoute>
      },
      {
        path: 'agent-transactions',
        element: <AgentRoute><AgentTransactions/></AgentRoute>
      }, 
      {
        path: 'recharge-agents',
        element: <AdminRoute><RechargeTable/></AdminRoute>
      },
      {
        path: 'approve-agents',
        element: <AdminRoute><AgentApprovalPage/></AdminRoute>
      },
      {
        path: 'user-management',
        element: <AdminRoute><UserManagement/></AdminRoute>
      },
      {
        path: 'user-notifications',
        element: <UserRoute><UserNotifications/></UserRoute>
      }
    ]
  }
]);

export default router;