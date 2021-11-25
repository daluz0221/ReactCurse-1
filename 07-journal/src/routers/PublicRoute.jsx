
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";


export const PublicRoute = ({state, children}) => {

    const stated = useSelector(state => state)

    console.log(state);

    const { auth } = stated;

    // const location = useLocation();

    // localStorage.setItem('lastPath', `${location.pathname}${location.search}`);

    return !auth.uid ? children : <Navigate to="/" />


}
