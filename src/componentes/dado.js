import React, {Component} from 'react';
import '../estilos/dado.css';

class Dado extends Component{

    constructor(){
        super();
        this.state={
            translateY: 100,
            rotateX: 0,
            rotateY: 0,
            rotateZ: 0
        }
        this.mover = this.mover.bind(this);
    }
    
    numeroaleatorio(){
        const num = Math.floor((Math.random() * 6) +1);
        return num;
    }


    mover(e){
        e.preventDefault();
        var numo= this.numeroaleatorio();
        console.log(numo);
        switch(numo){
            case 1:
                this.setState({
                    translateY: 100,
                    rotateX: 3600,
                    rotateY: 3600,
                    rotateZ: 3600
                })
                break;
            case 2: 
            this.setState({
                translateY: 100,
                rotateX: 4410,
                rotateY: 3600,
                rotateZ: 3600
            })
            case 3:
                this.setState({
                    translateY: 100,
                    rotateX: 3600,
                    rotateY: 4410,
                    rotateZ: 3600
                })
                break;
            case 4: 
            this.setState({
                translateY: 100,
                rotateX: 3600,
                rotateY: 2430,
                rotateZ: 3600
            })
            break;
            case 5: 
            this.setState({
                translateY: 100,
                rotateX: 2430,
                rotateY: 3600,
                rotateZ: 3600
            })
            break;
            case 6:
                this.setState({
                    translateY: 100,
                    rotateX: 3600,
                    rotateY: 1980,
                    rotateZ: 3600
                })
                break;
        }
        this.props.funcion(numo);
    }
    
    render(){
        const caras =['top','front','back','bottom','left','right'];
        var {translateY, rotateX, rotateY, rotateZ}= this.state,
        cubestyle={transform:`translateY(${translateY}px) rotateX(${rotateX}deg)
        rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`}
        return(
            <div className = 'container2'>
            <div className = 'container'>
            <div className ='dado' style = {cubestyle} onClick={this.mover}>
                {caras.map((value,index)=>{
                return <div className = {'cara'+' '+value} key={index}>{index}</div>
                })}
            </div>
            </div>
            </div>
        )
    }
}

export default Dado;