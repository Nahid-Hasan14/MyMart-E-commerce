import { createBrowserRouter, RouterProvider, ScrollRestoration } from "react-router-dom";
// import App from "../App";
import Home from "../Pages/Home";
import Contact from "../Pages/Contact";
import About from "../Pages/About";
import FAQs from "../Pages/FAQs";
import ErrorPage from "../Pages/ErrorPage";
import CartPage from "../Pages/CartPage";
import ProductsPage from "../Pages/ProductsPage";
// import Pages from "../Pages/Pages";
import SingleProducts from "../Pages/SingleProducts";
import Checkout from './../Pages/Checkout';
import DeliveryAddressForm from "../Pages/DeliveryAddress";
import SignInPage from "../Pages/SignInPage";
import PrivateRoute from "./PrivateRoute";
import OrderPage from "../Pages/OrderPage";
import { useState } from "react";
import Layout from "../LayOut/Layout";
import ThankYouPage from "../Pages/ThankYouPage";
import UpdateAddress from "../Pages/UpdateAddress";
import SearchCategoryProducts from "../Pages/SearchCategoryProducts";
import Dashboard from "../Pages/Dashboard";
import Profile from "../Pages/Profile";
import SignUpPage from "../Pages/SignUpPage";
import AdminLogin from "../Pages/AdminLogin";
import AdminSignUp from "../Pages/AdminSignUp";


export default function Router() {

    const [isAuthenticated, setIsAuthenticated] = useState(() => {
        // Check token on initial load
        return !!localStorage.getItem("token");
    });

    const handleLogout = () => {
        localStorage.removeItem("token");
        setIsAuthenticated(false);
    };
    const handleLogin = ()=> setIsAuthenticated(true)

 const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <>
                <ScrollRestoration />
                <Layout isAuthenticated= {isAuthenticated} onLogout = {handleLogout}/>
            </>
        ),
        errorElement: <ErrorPage />,
        children: [
            {
                path:"/",
                element: <Home />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/faqs",
                element: <FAQs />
            },
            {
                path: "/cart-page",
                element: <CartPage />
            },
            {
                path: "/products-page",
                element: <ProductsPage />
            },
            {
                path: "/product-details/:id",
                element: <SingleProducts />
            },
            {
                path: "/checkout-page",
                element: (
                    <PrivateRoute isAuthenticated={isAuthenticated}>
                        <Checkout />
                    </PrivateRoute>
                )
            },
            {
                path: "/thanks-page",
                element: <ThankYouPage />
            },
            {
                path: "/address",
                element: (
                    <PrivateRoute>
                        <DeliveryAddressForm />
                    </PrivateRoute>
                )
            },
            {
                path: "/update-address",
                element: <UpdateAddress />
            },
            {
                path: "/dashboard",
                element: (
                    <PrivateRoute isAuthenticated={isAuthenticated}>
                        <Dashboard />
                    </PrivateRoute>
                ),
                children: [
                    {
                        path: "",
                        element: <Profile />
                    },
                    {
                        path: "order-page",
                        element: <OrderPage />
                    }
                ]
            },
            {
                path: "/signin-page",
                element: <SignInPage  onLogin= {handleLogin}/>
            },
            {
                path: "/signUp-page",
                element: <SignUpPage />
            },
            {
                path: "/category/:category",
                element: <SearchCategoryProducts />
            },
            {
                path: "/admin-login",
                element: <AdminLogin />
            },
            {
                path: "/admin-signup",
                element: <AdminSignUp />
            }
        ]
    }
])
return <RouterProvider router= {router}/>
}
