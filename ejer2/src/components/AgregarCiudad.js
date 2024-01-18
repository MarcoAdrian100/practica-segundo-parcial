import React, { useState } from 'react';

const AgregarCiudad = ({ alAgregarCiudad }) => {
  const [ciudad, setCiudad] = useState('');

  const manejarEnvio = (e) => {
    e.preventDefault();
    if (!ciudad) return;
    alAgregarCiudad(ciudad);
    setCiudad('');
  };

  return (
    <form onSubmit={manejarEnvio}>
      <input
        type="text"
        placeholder="Add City"
        value={ciudad}
        onChange={(e) => setCiudad(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AgregarCiudad;
