import React from 'react';
import PropTypes from 'prop-types';

const Cita = (props) => {
    return(
        <div className="media mt-3">
            <div className="media-body">
                <h3 className="mt-0"> {props.cita.nombre} </h3>
                <p className="card-text"><span>Facultad: </span>{props.cita.facultad}</p>
                <p className="card-text"><span>Fecha: </span>{props.cita.fecha}</p>
                <p className="card-text"><span>Hora: </span>{props.cita.hora}</p>
                <p className="card-text"><span>Síntomas: </span></p>
                <p className="card-text">{props.cita.sintomas}</p>
            
                <button className="btn btn-warning" onClick={ () => props.eliminarCita(props.cita.id) }>
                    Borrar &times;
                </button>

            </div>
        </div>
    )
}


Cita.propTypes = {
    cita: PropTypes.object.isRequired,
    eliminarCita: PropTypes.func.isRequired
}

export default Cita;