import { createBrowserRouter } from "react-router-dom";

import { AppLayout } from "../layouts/AppLayout";

import { Home } from "../pages/Home/Home";
import { Search } from "../pages/Search/Search";
import { Menu } from "../pages/Menu/Menu";
import { AskAI } from "../pages/AskAI/AskAI";
import { NotFound } from "../pages/NotFound/NotFound";
import { Checkout } from "../pages/Checkout/Checkout";
import { ProtectedRoute } from "./ProtectedRoute";
import { FoodDetails } from "../pages/FoodDetails/FoodDetails";
import { OrderSuccess } from "../pages/OrderSuccess/OrderSuccess";
import { ProfilePage } from "../pages/ProfilePage/ProfilePage";
import { MyOrder } from "../components/ProfilePage/MyOrder";
import { OrderDetail } from "../components/ProfilePage/OrderDetail";
import { AboutPage } from "../pages/About/AboutPage";
import { SavedAddresses } from "../components/ProfilePage/SavedAddresses";
import { HelpSupport } from "../components/ProfilePage/HelpSupport";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "search",
        element: <Search />,
      },
      {
        path: "menu",
        element: <Menu />,
      },
      {
        path: "ask-ai",
        element: <AskAI />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "menu/food/:foodId",
        element: <FoodDetails />,
      },
      {
        path: "help",
        element: <HelpSupport />,
      },
      {
        element: <ProtectedRoute />,
        children: [
          {
            path: "checkout",
            element: <Checkout />,
          },
          {
            path: "profile",
            element: <ProfilePage />,
          },
          {
            path: "profile/orders",
            element: <MyOrder />,
          },
          {
            path: "profile/my-addresses",
            element: <SavedAddresses />,
          },
          {
            path: "profile/orders/:orderId",
            element: <OrderDetail />,
          },
          {
            path: "/order-success/:orderId",
            element: <OrderSuccess />,
          },
        ],
      },
    ],
  },

  {
    path: "*",
    element: <NotFound />,
  },
]);
