import React, { Component} from "react";
import "./bootstrap.min.css";
import Header from "./components/Header";
import NuevaCita from "./components/NuevaCita";
import ListaCitas from "./components/ListaCitas";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      citas: []
    };
  }

  //cuando la apilicación carga
  componentDidMount(){
    const citasLocalStorage = localStorage.getItem('citas');
    if(citasLocalStorage){
      this.setState({
        citas: JSON.parse(citasLocalStorage)
      })
    }
  }

  //cuando eliminamos o agregamos una nueva cita el componentDidUpdate() lo adjunta en el localstorage
  componentDidUpdate(){
    localStorage.setItem('citas', JSON.stringify(this.state.citas));
  }

  crearNuevaCita = (datos) => {
    //copiar el state actual
    const citas = [...this.state.citas, datos];

    //agregarel nuevo state
    this.setState({
      citas: citas
    })
  }

  //eliminar las cotas del state
  eliminarCita = (id) => {
    //tomar una copia del state
    const citasActuales = [...this.state.citas];

    //utilizar el array method filter para sacar el elemento @id del arreglo
    const citas = citasActuales.filter(cita => cita.id !== id);

    //actualizar el state
    this.setState({
      citas: citas
    })
  }

  render() {
    return (
      <div className="container">
        <Header titulo="Software de Citas de Fisioterapia" />

        <div className="row">
          <div className="col-md-10 mx-auto">
            <NuevaCita
              crearNuevaCita = {this.crearNuevaCita}
            />
          </div>

          <div className="mt-5 col-md-10 mx-auto">
            <ListaCitas
              citas = {this.state.citas}
              eliminarCita={this.eliminarCita}
            />
          </div>

        </div>

        

      </div>
    );
  }
}

export default App;
