import { createBrowserRouter } from "react-router";
import HomePage from "@/pages/HomePage";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import DashboardLayout from "@/layouts/DashboardLayout";
import BooksPage from "@/pages/BooksPage";
import AuthLayout from "@/layouts/AuthLayout";
import CreateBook from "./pages/CreateBook";
import EditBook from "./pages/EditBook";
import Profile from "./pages/Profile";
import UpgradePage from "./pages/UpgradePage";
import BillingPage from "./pages/BillingPage";

const router = createBrowserRouter([
  {
    path: "dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "home",
        element: <HomePage />
      },
      {
        path: "books",
        element: <BooksPage />
      },
      {
        path: "books/create",
        element: <CreateBook/>
      },
      {
        path: "books/:bookId",
        element: <EditBook/>
      },
      {
        path: "me",
        element: <Profile/>
      },
      {
        path: "upgrade",
        element: <UpgradePage/>
      },
      {
        path: "billing",
        element: <BillingPage/>
      }
    ]
  },
  {
    path: "auth",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <Login />
      },
      {
        path: "register",
        element: <Register />
      },
    ]
  }
]);

export default router;