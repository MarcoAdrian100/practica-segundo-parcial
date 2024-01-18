import React, { useState } from 'react';
import '../style/BotonMostrarOcultar.css';

const BotonMostrarOcultar = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="contenedor">
      <button onClick={() => setVisible(!visible)} className="boton">
        {visible ? 'Show/Hide' : 'Show/Hide'}
      </button>
      {visible && <p className="texto">Welcome to React Challenges</p>}
    </div>
  );
};

export default BotonMostrarOcultar;
