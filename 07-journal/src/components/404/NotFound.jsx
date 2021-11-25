import { useNavigate } from "react-router-dom"


export const NotFound = () => {

    const navigate = useNavigate();

    const irlogin = () => {
      navigate('/auth/login');
    }

    return (
        <div>
            <h1>Lo sentimos, no hemos podido encontrar la página que estás buscando</h1>
            <button
                onClick={irlogin}
            >
                Ir al login
            </button>
        </div>
    )
}
