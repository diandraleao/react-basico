import React from 'react';
import './Comentario.css';

// JSX -> html dentro do JS
const Comentario = props => {
    return ( 
        <div className="comentario">
            <h2>{props.nome}:</h2>
            <p>{props.email}</p>
            <p>{props.children}</p>
            <p>{props.data.toString()}</p>
            <button onClick={props.onRemove}>&times;</button>
        </div>
    )
};


export default Comentario