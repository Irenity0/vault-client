import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import HomePage from "../pages/HomePage";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";
import SendMoneyPage from "../pages/SendMoneyPage";
import CashOutPage from "../pages/CashOutPage";

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
        element: <h2>balance inquiry</h2>
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
      }
    ]
  }
]);

export default router;