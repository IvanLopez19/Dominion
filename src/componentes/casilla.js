import React, {Component} from 'react';

//import styled from 'styled-components';
//import '../estilos/tablero.css'


class Casilla extends Component{

    constructor(props){
        super(props);

        this.state ={
            valid: true,
        }
    }

    render(){
        return(
        <div className='casilla'></div>)
    }
}

export default Casilla;