import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";


export default function PrivateRoute({ children }) {
    const isLoggedIn = useAuth();
    const location=useLocation()
    console.log(isLoggedIn)

    return isLoggedIn ? children : <Navigate to="/login" state={{from:location}} replace={true} />;
}