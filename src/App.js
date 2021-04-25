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
    ],
    novoComentario:{
      nome: '',
      email: '',
      mensagem: ''
    }
  }

  addComentario = (e) => {
    e.preventDefault();
    console.log('add comentario...')

    const novoComentario = {...this.state.novoComentario, data: new Date()}
    this.setState({ 
      comentarios: [...this.state.comentarios, novoComentario],
      novoComentario: { nome: '', email: '', mensagem: '' }
    });

  }

  digitando = (e) => {
    const {name, value} = e.target;
    this.setState({ novoComentario: {...this.state.novoComentario, [name]: value} })
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

        <form method="post" onSubmit={this.addComentario}>
          <h2>Adicionar Comentário</h2>

          <div>
            <input 
              type="text" 
              name="nome" 
              value={this.state.novoComentario.nome}
              onChange={this.digitando}
              placeholder="Digite seu nome" />
          </div>
          <div>
            <input 
              type="email" 
              name="email"
              value={this.state.novoComentario.email} 
              onChange={this.digitando}
              placeholder="Digite seu email" />
          </div>
          <div>
            <textarea 
              name="mensagem"
              value={this.state.novoComentario.mensagem}
              onChange={this.digitando} 
              rows="4" />
          </div>

          <button type="submit">Adicionar Comentário</button>
        </form>
      </div>
    );
  }

}

export default App;
