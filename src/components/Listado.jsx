import React, { useState, useContext } from "react";
import {ThemeContext} from "../context/Share.jsx";


const Listado = () => {

    // const [texto, setTexto] = useState('');
    const [nombre, setNombre, apellido, setApellido, texto, setTexto] = useContext(ThemeContext);

    return (

        <div>
            <p>{texto}</p>
            {/* <input onChange={(e) => {setTexto(e.target.value)}} type="text" placeholder="Introduce algo" value={texto} /> */}
            <input onChange={(e) => {setTexto(e.target.value)}} type="text" placeholder="Introduce algo" value={texto} />
        </div>

    )

}

export default Listado