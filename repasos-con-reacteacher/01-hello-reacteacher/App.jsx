const App = () => {
  const [mensaje, setMensaje] = React.useState('¡Hola, Reacteacher!');

  const cambiarMensaje = () => {
    setMensaje('¡Vamos allá!');
  };

  return (
    <div className="container">
      <h1>{mensaje}</h1>
      <button onClick={cambiarMensaje}>Cambiar mensaje</button>
    </div>
  );
};

export default App;
