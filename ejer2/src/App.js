import React, { useState } from 'react';
import AgregarCiudad from './components/AgregarCiudad';
import ListaCiudades from './components/ListaCiudades';
import './App.css';
import './style/AgregarCiudad.css';
import './style/ListaCiudades.css';

const App = () => {
  const [ciudades, setCiudades] = useState([]);

  const agregarCiudad = (nuevaCiudad) => {
    setCiudades([...ciudades, nuevaCiudad]);
  };

  const eliminarCiudad = (indice) => {
    const nuevasCiudades = [...ciudades];
    nuevasCiudades.splice(indice, 1);
    setCiudades(nuevasCiudades);
  };

  return (
    <div className="App">
      <AgregarCiudad alAgregarCiudad={agregarCiudad} />
      <ListaCiudades ciudades={ciudades} eliminarCiudad={eliminarCiudad} />
    </div>
  );
};

export default App;