import React, { useState } from 'react'

export const ThemeContext = React.createContext();

const Share = (props) => {

    const [nombre, setNombre] = useState('Manuel');
    const [apellido, setApellido] = useState('Hernández');
    const [texto, setTexto] = useState('');


    return (
        <ThemeContext.Provider value={[nombre, setNombre, apellido, setApellido, texto, setTexto]}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export default Share
