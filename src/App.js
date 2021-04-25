import React, { Component } from 'react';
import './App.css';
import Comentario from './components/Comentario';


class App extends Component {

  state = {
    comentarios: [
      {
        nome: 'Joao',
        email: 'joao@mail.com',
        data: new Date(2021, 3, 19),
        mensagem: 'Ola'
      },
      {
        nome: 'Maria',
        email: 'maria@mail.com',
        data: new Date(2021, 3, 19),
        mensagem: 'Ola'
      },
    ]
  }

  render() {
    return (
      <div className="App">
        <h1>Meu projeto</h1>

        {this.state.comentarios.map((comentario, idx) => (
          <Comentario 
            key={idx}
            nome={comentario.nome} 
            email={comentario.email} 
            data={comentario.data}>
            {comentario.mensagem}
          </Comentario>
        ))}

      </div>
    );
  }

}

export default App;
