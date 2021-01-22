import React, {Component} from 'react';
import '../estilos/usuario.css'
//import '../estilos/tablero.css'

class Usuario extends Component{

    constructor(props){
        super(props);

        this.state ={
            x:1,
            y:5
        }
    }

    mover(x,y){
        
        if(x==1){
            if(y==1){
                /* this.setState({
                    x:x+1
                }) */
                x++;
            }
            else if(y<=4){
                /* this.setState({
                    y:y-1
                }) */
                y--;
            }

        }
        if(x==5){
            if(y==5){
                /* this.setState({
                    x:x-1
                }) */
                x--;
            }
            else if(y>=2){
                /* this.setState({
                    y:y+1
                }) */
                y++;
            }
        }
        if(y==1){
            if(x==5){
                /* this.setState({
                    y:y+1
                }) */
                y++;
            }
            else if(x>=2){
               /* this.setState({
                    y:y+1
                }) */
                x++;
        }
        }
        if(y==5){
            if(x==1){
               /*  this.setState({
                    y:y+1
                }) */
                y++;
                //console.log(y);
            }
            else if(x<=4){
                /* this.setState({
                    x:x-1
                }) */
                x--;
            }
        }
        //console.log(x,y);
    }

    mover2(numero){
        var {x,y}=this.state
        //console.log('hola');
        for(var i=0; i<=numero-1; i++){
            /* console.log(v)
            this.mover(g,v); */
            if(x==1){
                if(y==1){
                    /* this.setState({
                        x:x+1
                    }) */
                    x++;
                }
                else if(y<=4){
                    /* this.setState({
                        y:y-1
                    }) */
                    y--;
                }
    
            }
            if(x==5){
                if(y==5){
                    /* this.setState({
                        x:x-1
                    }) */
                    x--;
                }
                else if(y>=2){
                    /* this.setState({
                        y:y+1
                    }) */
                    y++;
                }
            }
            if(y==1){
                if(x==5){
                    /* this.setState({
                        y:y+1
                    }) */
                    y++;
                }
                else if(x>=2){
                   /* this.setState({
                        y:y+1
                    }) */
                    x++;
            }
            }
            if(y==5){
                if(x==1){
                   /*  this.setState({
                        y:y+1
                    }) */
                    y--;
                    //console.log(y);
                }
                else if(x<=4){
                    /* this.setState({
                        x:x-1
                    }) */
                    x--;
                }
            }
        }
        
        this.setState({
            x:x,
            y:y
        })
    }

    componentWillReceiveProps(){
        //console.log(this.props.numero);
        this.mover2(this.props.numero);
    }
    
    render(){
        var{x,y}=this.state,
        userstyle={gridColumn:`${x}/${x+1}`,
    gridRow: `${y}/${y+1}`}
        return(
    <div className="usuario" style={userstyle}></div>)
    }

}

export default Usuario;