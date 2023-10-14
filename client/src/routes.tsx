import { createBrowserRouter } from "react-router-dom";
import NotFound from "./pages/NotFound";
import MainLayout from "./layouts/main-layout";
import Home from "./pages/Home";


const routes = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            { element: <Home />, index: true}
        ]
    },
    {
        path: "*",
        element: <NotFound />
    }
])

export default routes;