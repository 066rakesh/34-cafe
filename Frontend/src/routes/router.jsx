import { createBrowserRouter } from "react-router-dom";

import { AppLayout } from "../layouts/AppLayout";

import { Home } from "../pages/Home/Home";
import { Contact } from "../pages/Contact/Contact";
import { Search } from "../pages/Search/Search";
import { Menu } from "../pages/Menu/Menu";
import { AskAI } from "../pages/AskAI/AskAI";
import { NotFound } from "../pages/NotFound/NotFound";
import { Checkout } from "../pages/Checkout/Checkout";
import { ProtectedRoute } from "./ProtectedRoute";
import { Payment } from "../pages/Payment/Payment";
import  {FoodDetails}  from "../pages/FoodDetails/FoodDetails";

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
        path: "contact",
        element: <Contact />,
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
        path: "payment",
        element: <Payment />,
      },
      {
        path: "menu/food/:slugId",
        element: <FoodDetails />
      },
      {
        element: <ProtectedRoute />,
        children: [
          {
            path: "checkout",
            element: <Checkout />,
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
