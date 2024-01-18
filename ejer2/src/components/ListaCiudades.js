import React from 'react';

const ListaCiudades = ({ ciudades, eliminarCiudad }) => {
  return (
    <ul>
      {ciudades.map((ciudad, indice) => (
        <li key={indice}>
          {ciudad} <button onClick={() => eliminarCiudad(indice)}>X</button>
        </li>
      ))}
    </ul>
  );
};

export default ListaCiudades;
