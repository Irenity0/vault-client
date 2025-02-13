import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import HomePage from "../pages/HomePage";

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
        element: <h2>login page</h2>
      },
      {
        path: 'register',
        element: <h2>register page</h2>
      },
      {
        path: 'dashboard',
        element: <h2>dashboard</h2>
      }
    ]
  }
]);

export default router;