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
import ScrollToTop from "./ScrollTop";

export default function MainRouter() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ScrollToTop>
          <Home />
        </ScrollToTop>
      ),
    },
    {
      path: "/contact-us",
      element: (
        <ScrollToTop>
          <Contactus />
        </ScrollToTop>
      ),
    },
    {
      path: "/contact-information",
      element: (
        <ScrollToTop>
          <Contactusinfos />
        </ScrollToTop>
      ),
    },
    {
      path: "/privacy-policy",
      element: (
        <ScrollToTop>
          <Privacypolicy />
        </ScrollToTop>
      ),
    },
    {
      path: "/refund-policy",
      element: (
        <ScrollToTop>
          <Refund />
        </ScrollToTop>
      ),
    },
    {
      path: "/shipping-policy",
      element: (
        <ScrollToTop>
          <Shipping />
        </ScrollToTop>
      ),
    },
    {
      path: "/terms-of-service",
      element: (
        <ScrollToTop>
          <Tos />
        </ScrollToTop>
      ),
    },
    {
      path: "/order-status",
      element: (
        <ScrollToTop>
          <OrderStatus />
        </ScrollToTop>
      ),
    },
    {
      path: "/catalog/:id",
      element: (
        <ScrollToTop>
          <Product />
        </ScrollToTop>
      ),
    },
    {
      path: "/cart",
      element: (
        <ScrollToTop>
          <Cart />{" "}
        </ScrollToTop>
      ),
    },
    {
      path: "/billing",
      element: (
        <ScrollToTop>
          <Billing />
        </ScrollToTop>
      ),
    },
    {
      path: "/payment",
      element: (
        <ScrollToTop>
          <Payment />
        </ScrollToTop>
      ),
    },
    {
      path: "/success",
      element: (
        <ScrollToTop>
          <Success />
        </ScrollToTop>
      ),
    },
    {
      path: "/catalog",
      element: (
        <ScrollToTop>
          <Catalog />
        </ScrollToTop>
      ),
    },
    { path: "*", element: <Navigate to="/" replace /> },
  ]);
  return (
    <React.Suspense fallback={<Loader />}>
      <RouterProvider router={router} />
    </React.Suspense>
  );
}
