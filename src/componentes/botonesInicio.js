import React, {Component} from 'react';
import '../estilos/pantallaPrincipal.css';


class Botones extends Component{
    
    render(){
        return(
            <div className='botones'>
            <button className='boton'>Iniciar Partida</button>
            <button className='boton'>Unirse a partida</button>
            <button className='boton'>Reglas</button>
            </div>
        )
    }
}

export default Botones;