import React from 'react'

const NuevoPresupuesto = ({presupuesto, setPresupuesto}) => {
  const HandleSubmit = () => {

  }

  return (
    <div className="contenedor-presupuesto contenedor sombra">
      <form onSubmit={HandleSubmit} className="formulario">
        <div className="campo">
          <label>Definir Presupuesto</label>

          <input
            className="nuevo-presupuesto"
            type="text"
            placeholder="Ingresa tu Presupuesto"
            value={presupuesto}
            onChange={e => setPresupuesto(e.target.value)}
          />
        </div>

        <input type="submit" value="Añadir" />
      </form>
    </div>
  );
};

export default NuevoPresupuesto