import {useState} from 'react'

const ControlPresupuesto = ({
  presupuesto,
  setPresupuesto,
  setIsValidPresupuesto
}) => {
  const formatearCantidad = (cantidad) => {
    return cantidad.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD'
    })
  }

  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
      <div>
        <p>Grafica Aquí</p>
      </div>

      <div className="contenido-presupuesto">
        <p>
          <span>Presupuesto: </span> {formatearCantidad(presupuesto)}
        </p>
      </div>
    </div>
  );
}

export default ControlPresupuesto