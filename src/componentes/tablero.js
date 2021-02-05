import React, {Component} from 'react';
import Casilla from './casilla';
import CasillaGrande from './casillaGrande'
import '../estilos/tablero.css'
import CasillaEmpresa from './casillaEmpresas';
import Usuario from './usuario';
import Menu from './menujuego';


class Tablero extends Component{

    constructor(props){
        super(props);
        this.state={
            numero:0
        }
        this.asignarposiciones=this.asignarposiciones.bind(this);
    }

    asignarposiciones(numerodado){
        this.setState({
            numero:numerodado
        })
        //console.log(this.state);
    }

    render(){
        const casillas =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18'];
        return(
        <div className= "contenedor">
        {casillas.map((value,index)=>{
            return <div className = {'casilla'+value} key={index}><Casilla/></div>
        })}
        <CasillaGrande funcion={this.asignarposiciones}/>
        <Usuario numero={this.state.numero}/>
        {/* <div className="empresa1"><CasillaEmpresa/></div>
        <div className="empresa2"><CasillaEmpresa /></div>
        <div className="empresa3"><CasillaEmpresa /></div>
        <div className="empresa4" ><CasillaEmpresa /></div> */}
        {/* <div className = "casilla1"><Casilla/></div>
        <div className = "casilla2"><Casilla/></div>
        <div className = "casilla3"><Casilla/></div>
        <div className = "casilla4"><Casilla/></div>
        <div className = "casilla5"><Casilla/></div>
        <div className = "casilla6"><Casilla/></div>
        <div className = "casilla7"><Casilla/></div>
        <div className = "casilla8"><Casilla/></div>
        <div className = "casilla9"><Casilla/></div>
        <div className = "casilla10"><Casilla/></div>
        <div className = "casilla11"><Casilla/></div>
        <div className = "casilla12"><Casilla/></div>
        <div className = "casilla13"><Casilla/></div>
        <div className = "casilla14"><Casilla/></div> */}
        </div>)
    }
}

export default Tablero;