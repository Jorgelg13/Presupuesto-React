import React, { Component } from 'react';
import '../css/App.css';
import Header from './Header';
import Formulario from './Formulario';
import Listado from './Listado';

class App extends Component {

  constructor(props){
    super(props);
    this.state ={
      presupuesto :'',
      restante: '',
      gastos: {}
    }
  }

  //agregar un nuevo gasto al state
  agregarGasto = gasto => {
    //tomar copia del state actual
    const gastos = {...this.state.gastos}
    //agregar al gasto al objeto del state
    gastos [`Gasto${Date.now()}`] = gasto;
    //ponerlo en state
    this.setState({
      gastos
    })
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
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
