import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import HomePage from "../pages/HomePage";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";
import SendMoneyPage from "../pages/SendMoneyPage";
import CashOutPage from "../pages/CashOutPage";
import UserDashboard from "../pages/Dashboards/UserDashboard";
import AgentDashboard from "../pages/Dashboards/AgentDashboard";
import AdminDashboard from "../pages/Dashboards/AdminDashboard";
import UserTransactions from "../pages/Transaction_Pages/UserTransactions";
import AgentTransactions from "../pages/Transaction_Pages/AgentTransactions";
import CashInPage from "../pages/CashInPage";
import RechargeTable from "../pages/Dashboards/AdminPages/RechargeTable";
import AgentApprovalPage from "../pages/Dashboards/AdminPages/AgentApprovalPage";
import UserManagement from "../pages/Dashboards/AdminPages/UserManagement";

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
        element: <AdminDashboard/>
      },
      {
        path: 'send-money',
        element: <SendMoneyPage/>
      },
      {
        path: 'cash-in',
        element: <CashInPage/>
      },
      {
        path: 'cash-out',
        element: <CashOutPage/>
      }, 
      {
        path: 'user-transactions',
        element: <UserTransactions/>
      },
      {
        path: 'agent-transactions',
        element: <AgentTransactions/>
      }, 
      {
        path: 'recharge-agents',
        element: <RechargeTable/>
      },
      {
        path: 'approve-agents',
        element: <AgentApprovalPage/>
      },
      {
        path: 'user-management',
        element: <UserManagement/>
      }
    ]
  }
]);

export default router;