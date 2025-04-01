import { useState } from 'react';
import './App.css';

const App = () => {
  const frases = [
    '¡Hola Reacteacher!',
    '¡Vamos allá!',
    '¡Sigue así, crack!',
    '¡A por el siguiente reto!',
    '¡React es una pasada!',
    '¡No pares de aprender!',
  ];

  const [mensaje, setMensaje] = useState(frases[0]);

  const cambiarMensaje = () => {
    const frasesSinRepetir = frases.filter((frase) => frase !== mensaje);

    const nuevaFrase =
      frasesSinRepetir[Math.floor(Math.random() * frasesSinRepetir.length)];

    setMensaje(nuevaFrase);
  };

  return (
    <div className="container">
      <h1>{mensaje}</h1>
      <button onClick={cambiarMensaje}>Cambiar mensaje</button>
    </div>
  );
};

export default App;
