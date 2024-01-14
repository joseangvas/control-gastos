import React from 'react'

const Gasto = ({gasto}) => {
  const {categoria} = gasto

  return (
    <div className="gasto sombra">
      <div className="contenido-gasto">

        <div className="descripcion-gasto">
          <p className="categoria">
            {categoria}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Gasto