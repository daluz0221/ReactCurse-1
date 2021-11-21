import { useNavigate, useLocation } from "react-router-dom";
import queryString from 'query-string';
import { GetHeroByName } from "../../helpers/GetHeroByName";
import { useForm } from "../../hooks/useForm";
import { HeroCard } from "../hero/HeroCard";
import { useMemo } from "react";






export const SearchScreen = () => {
    
    const navigate = useNavigate();

    // Con esto leo la localización actual, la url actual, trae un objeto, una de sus propiedades es la url completa
    // usando el paquete query-sting se faclta el proceso, video 183 del curso 1 react
    const locaton = useLocation();

    const { q = '' } = queryString.parse(locaton.search);
   
    
    const [ values, change ] = useForm( {
        buscarhero: q
    } );

    const {buscarhero} = values

    const heroesFiltered = useMemo(()=> GetHeroByName(q), [q]);

    

    const hsubmit = (e) => {
        e.preventDefault();
        // console.log(buscarhero);
        navigate(`?q=${buscarhero}`)

    };

    
    return (
        <>
            <h1>Buscar Heroe</h1>
            <hr />

            <div className="row">
                <div className="col-5">
                    <h4>formulario de busqueda</h4>
                    <hr />

                    <form onSubmit={hsubmit}>
                        <input type="text" 
                            placeholder="Buscar héroe"
                            className="form-control"
                            name="buscarhero"
                            autoComplete="off"
                            onChange={change}
                            value={buscarhero}
                        />

                        <button 
                            type="submit"
                            className="btn btn-outline-primary mt-3" 
                             
                        >
                            Buscar
                        </button>
                    </form>
                </div>

                <div className="col-7">
                    <h4>Resultados</h4>
                    <hr />


                    {
                        (q === '')
                        ? <div className="alert alert-info">Buscar un Héroe</div>
                        : (heroesFiltered.length === 0) && <div className="alert alert-danger">No hay resultados coincidentes para: {q}</div>
                    }

                    {
                         
                            
                        
                        heroesFiltered.map(hero => (
                            <HeroCard 
                                key={hero.id}
                                {...hero}
                            />
                        ))
                    }

                </div>
            </div>

        </>
    )
}
