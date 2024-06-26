import React from "react";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { Loader } from "./Loader";
import Home from "./home/Home";
import Contactusinfos from "./otherpages/contactinfos";
import Contactus from "./otherpages/contactus";
import OrderStatus from "./otherpages/orderStatus";
import Privacypolicy from "./otherpages/pp";
import Refund from "./otherpages/refund";
import Shipping from "./otherpages/shipping";
import Tos from "./otherpages/tos";
import Product from "./catalog/Product";
import Catalog from "./catalog/catalog";
import Cart from "./catalog/Cart";
import Billing from "./catalog/Billing";
import Payment from "./catalog/Payment";
import Success from "./catalog/Success";

export default function MainRouter() {
  const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/contact-us", element: <Contactus /> },
    { path: "/contact-information", element: <Contactusinfos /> },
    { path: "/privacy-policy", element: <Privacypolicy /> },
    { path: "/refund-policy", element: <Refund /> },
    { path: "/shipping-policy", element: <Shipping /> },
    { path: "/terms-of-service", element: <Tos /> },
    { path: "/order-status", element: <OrderStatus /> },
    { path: "/catalog/:id", element: <Product /> },
    { path: "/cart", element: <Cart /> },
    { path: "/billing", element: <Billing /> },
    { path: "/payment", element: <Payment /> },
    { path: "/success", element: <Success /> },
    {
      path: "/catalog",
      element: <Catalog />,
    },
    { path: "*", element: <Navigate to="/" replace /> },
  ]);
  return (
    <React.Suspense fallback={<Loader />}>
      <RouterProvider router={router} />
    </React.Suspense>
  );
}
