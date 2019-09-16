import React from 'react';
import Cita from './Cita'
import PropTypes from 'prop-types';

const ListaCitas = (props) => {

    //imprimir un mensaje condiconal en base a si hay citas o no
    const mensaje = Object.keys(props.citas).length === 0 ? 'No hay citas todavía' : 'Administra las citas'

    return(
        <div className="card mt-2 py-5">
            <div className="card-body">
                <h2 className="card-title text-center">
                    {mensaje}
                </h2>

                <div className="Lista-citas">
                    {props.citas.map(cita => {
                        return(
                            <Cita
                                key={cita.id}
                                cita={cita}
                                eliminarCita={props.eliminarCita}
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

ListaCitas.propTypes = {
    citas: PropTypes.array.isRequired,
    eliminarCita: PropTypes.func.isRequired
}

export default ListaCitas;