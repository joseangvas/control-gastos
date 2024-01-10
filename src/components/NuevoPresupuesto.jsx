import React from 'react'

const NuevoPresupuesto = ({ presupuesto, setPresupuesto }) => {
  return (
    <div className="contenedor-presupuesto contenedor sombra">
      <form className="formulario">
        <div className="campo">
          <label>Definir Presupuesto</label>

          <input
            className="nuevo-presupuesto"
            type="text"
            placeholder="Ingresa tu Presupuesto"
          />
        </div>

        <input type="submit" value="Añadir" />
      </form>
    </div>
  );
};

export default NuevoPresupuesto