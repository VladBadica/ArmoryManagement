import { Navigate, Outlet, useLocation } from 'react-router-dom';

const AuthWrapper = () => {
    const location = useLocation();

    const userLogged = localStorage.getItem("authToken");

    return userLogged
        ? <Outlet />
        : (
            <Navigate
                to="/auth"
                replace
                state={{ from: location }}
            />
        );
};

export default AuthWrapper