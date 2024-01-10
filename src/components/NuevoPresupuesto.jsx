import {useState} from 'react'


const NuevoPresupuesto = ({presupuesto, setPresupuesto}) => {
  const [mensaje, setMensaje] = useState('');

  const HandlePresupuesto = (e) => {
    e.preventDefault()

    if(!Number(presupuesto) || Number(presupuesto) < 0) {

    } else {

    }
    
  }

  return (
    <div className="contenedor-presupuesto contenedor sombra">
      <form onSubmit={HandlePresupuesto} className="formulario">
        <div className="campo">
          <label>Definir Presupuesto</label>

          <input
            className="nuevo-presupuesto"
            type="text"
            placeholder="Ingresa tu Presupuesto"
            value={presupuesto}
            onChange={(e) => setPresupuesto(e.target.value)}
          />
        </div>

        <input type="submit" value="Añadir" />

        {mensaje}
      </form>
    </div>
  );
};

export default NuevoPresupuesto