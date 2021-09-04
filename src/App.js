import './App.css';
import Mensaje from './Mensaje.js'

function Description() {
  return <p>Esta es la App que estoy haciendo con midu xdxd</p>
}

function App() {
  return (
    <div className="App">
      <h1>Hola mundo</h1>
      <h1>Hola mundo</h1>
      <Mensaje color='green' mensaje='hola'/>
      <Mensaje color='red' mensaje='como'/>
      <Mensaje color='yellow' mensaje='estan'/>
      <Description/>
    </div>
  );
}

export default App;
