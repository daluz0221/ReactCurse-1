import React, {useEffect} from 'react'

const Mensaje = () => {

    useEffect(() => {


        const mouse = (e) => {
            // const coors = {x: e.x, y:e.y};
            //  console.log(coors);
            console.log(':D');
        };

        window.addEventListener('mousemove', mouse);

        return () => {
            window.removeEventListener('mousemove', mouse);
        }
    }, [])
    return (
        <div>
            <h3>Eres genial</h3>
        </div>
    )
}

export default Mensaje
