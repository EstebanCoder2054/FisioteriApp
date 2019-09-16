import React,{Component} from 'react';
import uuid from 'uuid';
import PropTypes from 'prop-types';

const stateInicial = {
    cita: {
        nombre: '',
        facultad: '',
        fecha: '',
        hora: '',
        sintomas: ''
    },
    error: false
}

class NuevaCita extends Component{
    constructor(props){
        super(props); 
        this.state = {
            cita: {
                nombre: '',
                facultad: '',
                fecha: '',
                hora: '',
                sintomas: ''
            },
            error: false
        }
    }

    //lugar para crear código JS

    //cuando se detecte un cambio en los campos del formulario
    handleChange = (e) => {
        
        //colocar lo que el usuario en el form dentro del state
        this.setState({
            cita: {
                ...this.state.cita, //creando una copia del state
                [e.target.name] : e.target.value
            }      
        })
    }

    //cuando se haga click en el botón de agregar cita
    handleSubmit = (e) => {
        e.preventDefault();

        //extraer los valores del state
        const {nombre,facultad,fecha,hora,sintomas} = this.state.cita;

        //validar que ningún campo haya quedado vacío
        if(nombre==='' || facultad==='' || fecha==='' || hora==='' || sintomas===''){
            this.setState({
                error: true
            });
            //si hay error entonces se fuerza a detener la ejecución 
            return;
        }

        //agregar la cita al state de App (componente Raíz)
        //estos datos solo se mandan cuando ya están validados
        //crearNuevaCita es la función que se creó en el componente Raíz y por medio de props se puede acceder
        //a ella desde esta otra pestaña
        const nuevaCita = {...this.state.cita};
        nuevaCita.id = uuid();

        //agregar esta cita al state del app
        this.props.crearNuevaCita(nuevaCita);

        //colocar en el state el stateInicial
        this.setState({
            ...stateInicial
        })
    }

    render(){

        const {error} = this.state;

        return(
            <div className="card mt-5 py-5">
                <div className="card-body">
                    <h2 className="card-title text-center mb-5">
                        Llena el formulario
                    </h2>

                    {/* manejo de error en la validación */}
                    {error ? <div className="alert alert-warning mt-2 mb-5 text-center">
                        Todos los campos son obligatorios</div> : null}

                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Nombre del paciente</label>
                            <div className="col-sm-8 col-lg-10">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre del paciente"
                                    name="nombre"
                                    onChange={this.handleChange}
                                    value={this.state.cita.nombre}
                                />
                            </div>
                        </div>  {/*   cierre del form group */}
                    
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Facultad</label>
                            <div className="col-sm-8 col-lg-10">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Facultad (ej: Ingeniería, Ciencias Exactas, Artes, etc)"
                                    name="facultad"
                                    onChange={this.handleChange}
                                    value={this.state.cita.facultad}
                                />
                            </div>
                        </div>  {/*   cierre del form group */}

                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Fecha</label>
                            <div className="col-sm-8 col-lg-4">
                                <input
                                    type="date"
                                    className="form-control"
                                    name="fecha"
                                    onChange={this.handleChange}
                                    value={this.state.cita.fecha}
                                />
                            </div>
                       
                        {/*acá ya no hay form-group porque se necesita que vayan los dos campos seguidos (fecha-hora) */}

                            <label className="col-sm-4 col-lg-2 col-form-label">Hora</label>
                            <div className="col-sm-8 col-lg-4">
                                <input
                                    type="time"
                                    className="form-control"
                                    name="hora"
                                    onChange={this.handleChange}
                                    value={this.state.cita.hora}
                                />
                            </div>
                        </div>  {/*   cierre del form group */}

                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Síntomas</label>
                            <div className="col-sm-8 col-lg-10">
                              <textarea 
                                className="form-control" 
                                name="sintomas" 
                                placeholder="describe los síntomas"
                                onChange={this.handleChange}
                                value={this.state.cita.sintomas}       
                            ></textarea>
                            </div>
                        </div>  {/*   cierre del form group */}
                    
                        <input type="submit" className="py-3 mt-2 btn btn-primary btn-block" value="Solicitar Cita" />

                    </form>

                </div>
            </div>
        )
    }
}

//documentando
NuevaCita.propTypes = {
    crearNuevaCita : PropTypes.func.isRequired
}

export default NuevaCita