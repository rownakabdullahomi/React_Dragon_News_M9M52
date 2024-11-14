/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../Pages/loading";

const PrivateRoute = ({children}) => {

    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    if(loading){
        return <Loading></Loading>
    }

    if(user && user?.email){
        return children;
    }

    return (
        <Navigate state={location} to={"/auth/login"}></Navigate>
    );
};

export default PrivateRoute;