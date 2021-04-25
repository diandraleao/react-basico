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

  addComentario = () => {
    console.log('add comentario...')

    const novoComentario = {
      nome: 'Pedro',
      email: 'pedro@mail.com',
      data: new Date(2021, 3, 19),
      mensagem: 'Ola pessoal!'
    }

    // let lista = this.state.comentarios;
    // lista.push(novoComentario);
    // this.setState({ comentarios: lista });

    this.setState({ comentarios: [...this.state.comentarios, novoComentario] });

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

        <button onClick={this.addComentario}>Add comentário</button>
      </div>
    );
  }

}

export default App;
