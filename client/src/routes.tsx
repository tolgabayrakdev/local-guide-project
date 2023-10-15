import { createBrowserRouter } from "react-router-dom";
import NotFound from "./pages/NotFound";
import MainLayout from "./layouts/main-layout";
import Home from "./pages/Home";
import Authentication from "./pages/auth/Authentication";


const routes = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            { element: <Home />, index: true }
        ]
    },
    {
        path: "authentication",
        element: <Authentication />
    },
    {
        path: "*",
        element: <NotFound />
    }
])

export default routes;