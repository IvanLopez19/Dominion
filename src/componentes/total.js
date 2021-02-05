import React,{Component} from 'react';
import Tablero from './tablero';
import Menu from './menujuego';
import '../estilos/total.css'

class Total extends Component{
    render(){
        return(
            <div className='total'>
                <Tablero/>
                
                <Menu/>
            </div>
        )
    }
}

export default Total