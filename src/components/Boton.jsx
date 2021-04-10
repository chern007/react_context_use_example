import React, {useContext} from "react";
import {ThemeContext} from "../context/Share.jsx";

const Boton = () => {

    const [nombre, setNombre, apellido, setApellido, texto, setTexto] = useContext(ThemeContext);

    const pulsar = (e) => {
        console.log("--->");
        console.log("Me has pulsado!");
        console.log(nombre);
        console.log(apellido);
        console.log(texto);
        console.log("--->");
        
    }

    return (
        <div>
            <button
                className="btn btn-dark"
                onClick={(e) => pulsar(e)}
            >
                Pulsame
            </button>
            <p>{nombre}</p>
            <p>{apellido}</p>
        </div>
    )
}

export default Boton;