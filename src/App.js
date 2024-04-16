import { Provider } from "react-redux";
import "./App.css";
import { CartItems } from "./component/CartItems";
import "./index.css";
import { UserContext } from "./Const/UserContext";
import appStore from "./Const/appStore";
import React, { lazy, Suspense, useEffect, useState, useContext } from "react";
import { Header } from "./component/Header";
import { Body } from "./component/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { ContactUs } from "./component/ContactUs";
import { Error } from "./component/Error";
import { RestroMenu } from "./component/RestroMenu";
const AboutUs = lazy(() => import("./component/AboutUs"));


export const AppLayout = () => {
  const [username, setusername] = useState();
  useEffect(() => {
    //Api call
    const data = {
      name: "Brijesh Singh",
    };
    setusername(data.name);
  }, []);
  return (
    <div className="applayout">
      <UserContext.Provider value={{ userloggedin: username, setusername }}>
        <Provider store={appStore}>
          <Header />
          <Outlet />
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
    ],
    errorElement: <Error />,
  },
]);
