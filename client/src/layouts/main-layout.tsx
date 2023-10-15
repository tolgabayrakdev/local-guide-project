import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function MainLayout() {
    return (
        <section>
            <Navbar />
            <Outlet />
        </section>
    )
}