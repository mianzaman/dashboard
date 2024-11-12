import Home from "./pages/home/Home";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Users from "./pages/users/Users";
import Products from "./pages/menus/Products";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Menu from "./components/menu/Menu";
import Login from "./pages/login/Login";
import "./styles/global.scss";
import User from "./pages/user/User";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import Orders from "./pages/orders/orders";
import Setting from "./pages/setting/setting";
import DayOrders from "./pages/DayOrders/dayOrders";
import OrdersSummary from "./pages/oderSummary/ordersSummary";
import Companies from "./pages/Company/company";
import GenerateLabels from "./pages/generateLabels/generateLabels";
import Signup from "./pages/signup/Signup";


const queryClient = new QueryClient();

function App() {
  const Layout = () => {
    return (
      
      <div className="main">
        <Navbar />
        <div className="containers">
          <div className="menuContainer">
            <Menu />
          </div>
          <div className="contentContainer">
            <QueryClientProvider client={queryClient}>
              <Outlet />
              
            </QueryClientProvider>
          </div>
        </div>
        <Footer />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/users",
          element: <Users />,
        },
        {
          path: "/menu",
          element: <Products />,
        }, {
          path: "/oderSummary",
          element: <OrdersSummary />,
        },
        {
          path: "/companies",
          element: <Companies />,
        },
        {
          path: "/orders",
          element: <Orders />,
        },
        {
          path: "/dayOrders",
          element: <DayOrders />,
        },
        {
          path: "/users/:id",
          element: <User />,
        },
        
        {
          path: "/generateLabels",
          element: <GenerateLabels />,
        },

        {
          path: "/setting",
          element: <Setting />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/sign-up",
      element: <Signup/>,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
