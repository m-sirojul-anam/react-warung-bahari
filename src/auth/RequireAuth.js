import { Navigate } from "react-router-dom";

const RequireAuth = ({children, redirectTo}) => {
    if(sessionStorage.getItem('token')){
        return children
    } else {
        return <Navigate to={redirectTo}/>;
    }
}

export default RequireAuth;