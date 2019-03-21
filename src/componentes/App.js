import React, { Component } from 'react';
import '../css/App.css';
import Header from './Header';
import Formulario from './Formulario';
import Listado from './Listado';
import {validarPresupuesto,revisarPresupuesto} from '../helper';
import ControlPresupuesto from './ControlPresupuesto';

class App extends Component {

  constructor(props){
    super(props);
    this.state ={
      presupuesto :'',
      restante: '',
      gastos: {}
    }
  }

  componentDidMount(){
    this.obtenerPresupuesto();
  }

  obtenerPresupuesto(){
    let presupuesto = prompt('Cual es el presupuesto');
    let resultado = validarPresupuesto(presupuesto);
    if(resultado){
      this.setState({
        presupuesto:presupuesto,
        restante :presupuesto
      })

    }else{
      this.obtenerPresupuesto();
    }
  }

  //agregar un nuevo gasto al state
  agregarGasto = gasto => {
    //tomar copia del state actual
    const gastos = {...this.state.gastos}
    //agregar al gasto al objeto del state
    gastos [`Gasto${Date.now()}`] = gasto;

    //restar al presupuesto
   // this.restarPresupuesto(gasto.cantidadGasto);
    //ponerlo en state
    this.setState({
      gastos
    })
  }

  //restar del presupuesto cuando un gasto se crea
  restarPresupuesto = cantidad => {
    let restar = Number(cantidad);
    //tomar copia del state actual
    let restante = this.state.restante;
    //lo restamos
    restante -= restar;
    //agregamos el nuevo state
    console.log(restante);
  }

  render() {
    return (
      <div className="App container">
        <Header
          titulo='Gastos Semanales'
        />
        <div className="contenido-principal contenido">
          <div className="row">
            <div className="one-half column">
              <Formulario
                agregarGasto={this.agregarGasto}
              />
            </div>
            <div className="one-half column">
              <Listado
                gastos = {this.state.gastos}
              />
              <ControlPresupuesto
                presupuesto ={this.state.presupuesto}
                restante ={this.state.restante}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
