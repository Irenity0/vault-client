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
        element: <h2>cash in</h2>
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
      }
    ]
  }
]);

export default router;