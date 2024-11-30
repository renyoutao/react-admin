import {lazy} from "react"
import {Navigate} from "react-router-dom"

const Login = lazy(() => import("@/components/login"));
const Home = lazy(() => import("@/components/home"));
const User = lazy(() => import("@/components/user"));
const Category = lazy(() => import("@/components/category"));

const routes = [
    {
        path: "/",
        element: <Navigate to="/user"/>
    },
    {
        path: "/",
        element: <Home/>,
        children: [{
            path: "/user",
            element: <User/>,
        }, {
            path: "/category",
            element: <Category/>,
        }
        ]
    },
    {
        path: "/login",
        element: <Login/>
    }
]

export default routes