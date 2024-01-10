import {useState} from 'react'
import Mensaje from './Mensaje'


const NuevoPresupuesto = ({presupuesto, setPresupuesto}) => {
  const [mensaje, setMensaje] = useState('');

  const HandlePresupuesto = (e) => {
    e.preventDefault()

    if(!Number(presupuesto) || Number(presupuesto) < 0) {
      setMensaje('No es un Presupuesto Válido');
    } else {
      console.log('Si es Válido');
      
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

        {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
      </form>
    </div>
  );
};

export default NuevoPresupuesto