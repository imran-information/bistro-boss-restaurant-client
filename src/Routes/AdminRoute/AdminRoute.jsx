import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../../hooks/useAdmin";
import useAuth from "../../hooks/useAuth";


const AdminRoute = ({ children }) => {
    const { user, loading } = useAuth()
    const [isAdmin, isLoading] = useAdmin()
    const location = useLocation()

    if (user && isAdmin) return children;
    if (loading || isLoading) return <span className="loading loading-ring loading-lg"></span>

    return <Navigate to="/signIn" state={{ from: location }} replace></Navigate>

};

export default AdminRoute;