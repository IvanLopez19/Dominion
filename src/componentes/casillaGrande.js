import React, {Component} from 'react';
import Dado from './dado';
import '../estilos/espaciocentral.css'
//import '../estilos/tablero.css'

class CasillaGrande extends Component{

    constructor(props){
        super(props);

        this.state ={}
    }

    render(){
        return(
        <div className = "imagen" >
            <div className='dado'><Dado funcion={this.props.funcion}/></div></div>)
    }
}

export default CasillaGrande;