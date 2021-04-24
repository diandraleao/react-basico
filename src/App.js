import './App.css';
import Comentario from './components/Comentario'

function App() {
  return (
    <div className="App">
      <h1>Meu projeto</h1>
      <Comentario nome="Diandra" email="diandra@gmail.com" data={new Date(2021, 3, 21)}>
        Olá, tudo bem?
      </Comentario>

      <Comentario nome="Maria" email="maria@gmail.com" data={new Date(2021, 3, 24)}>
        Olá, sim.
      </Comentario>
    </div>
  );
}

export default App;
