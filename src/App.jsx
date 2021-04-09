import React, { Fragment } from 'react';
import Saludo from './components/Saludo';
import Listado from './components/Listado';
import ThemeContext from './context/Share';


function App() {
  return (
    <div className='container'>
      <ThemeContext>
        <Saludo></Saludo>
        <br/>
        <Listado></Listado>
      </ThemeContext>
    </div>
  );
}

export default App;
