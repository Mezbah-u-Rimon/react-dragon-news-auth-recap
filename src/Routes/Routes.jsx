import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import News from "../Pages/News/News";
import PrivateRoute from "../Provider/PrivateRoute";


const routes = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch("/news.json"),
            },
            {
                path: "/news/:id",
                element: <PrivateRoute> <News></News></PrivateRoute>,
                loader: () => fetch("/news.json"),
            },
            {
                path: "/about",
                element: <p></p>
            },
            {
                path: "/career",
                element: <p></p>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
        ]
    }
]);

export default routes;
