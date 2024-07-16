import { Provider } from "react-redux";
import { CartItems } from "./component/CartItems";
import "./index.css";
import { UserContext } from "./Const/UserContext";
import appStore from "./Const/appStore";
import React, { lazy, Suspense, useState } from "react";
import { Header } from "./component/Header";
import { Body } from "./component/Body";
import { createBrowserRouter,  Outlet } from "react-router-dom";
import { ContactUs } from "./component/ContactUs";
import { Error } from "./component/Error";
import { RestroMenu } from "./component/RestroMenu";
import { Footer } from "./component/Footer";
import OrderSucess from "./smallComponents/OrderSucess";
const AboutUs = lazy(() => import("./component/AboutUs"));


export const AppLayout = () => {
  const [itemsSucess,setItemSucess]=useState()
  return (
    <div className="applayout">
      <UserContext.Provider value={{ itemsSucess,setItemSucess }}>
        <Provider store={appStore}>
          <Header />
          
          <Outlet />
          <Footer/>
        </Provider>
      </UserContext.Provider>
    </div>
  );
};

export const Approuter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "contact",
        element: <ContactUs />,
      },
      {
        path: "cart",
        element: <CartItems />,
      },
      {
        path: "aboutus",
        element: (
          <Suspense fallback={<h3>Loading...</h3>}>
            <AboutUs />
          </Suspense>
        ),
      },
      {
        path: "/restromenu/:resId",
        element: <RestroMenu />,
      },
      {
        path : "sucessfull",
        element: <OrderSucess/>
      },
      {
        path: "*", // This will catch all undefined routes and display the error component
        element: <Error />,
      },
    ],
    // errorElement: <Error />,
  },
]);
