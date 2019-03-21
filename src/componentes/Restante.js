import React,{Component} from 'react';

class Restante extends Component{
    render(){
        return(
            <div className="alert alert-success">
            Presupuesto: {this.props.restante}
        </div>
        )
    }
}

export default Restante;