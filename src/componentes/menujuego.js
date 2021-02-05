import React,{Component} from 'react';

class Menujuego extends Component{

    onclick=(e)=>{
        console.log(e);
    }
    render(){
        return(
            <div>
            <nav className='navbar' onClick={this.onclick}></nav>
            <div className='Menu'></div>
            </div>
        )
    }
}

export default Menujuego;