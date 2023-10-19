import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import Loading from "../components/Loading";


function AuthWrapper(WrapperComponent: any) {
    const Wrapper = (props: any) => {
        const [loading, setLoading] = useState(true);
        const [loggedIn, setLoggedIn] = useState(false);
        const [sessionExpired, setSessionExpired] = useState(false);
        const [accessDenied, setAccessDenied] = useState(false);

        const navigate = useNavigate();

        useEffect(() => {
            const verifyToken = async () => {
                try {
                    const res = await fetch("", {
                        method: "POST",
                        credentials: "include"
                    });
                    if (res.ok) {
                        setLoggedIn(true);
                        setLoading(false);
                    } else if (res.status === 403) {
                        navigate("authentication")
                    } else if (res.status === 401) {
                        setLoading(false);
                        setSessionExpired(true);
                    } else {
                        setLoading(false);
                        setAccessDenied(true);
                    }
                } catch (err) {
                    setAccessDenied(true);
                    setLoading(false);
                    navigate("authentication")
                }
            }
            verifyToken();
        }, [])

        if (loading) {
            return (
                <Loading />
            );
        }
        if (accessDenied) {
            return (
                <section>
                    <p>Access denied</p>
                </section>
            )
        }
        if (sessionExpired) {
            return (
                <section>
                    <p>Sorry, your session has expired.</p>
                </section>
            )
        }
        return (
            <section>
                <WrapperComponent loggedIn={loggedIn} {...props} />
            </section>
        );
    }
    return Wrapper;
}

export default AuthWrapper;