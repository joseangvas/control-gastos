import {useState} from 'react'
import Mensaje from './Mensaje'
import CerrarBtn from '../img/cerrar.svg'

const Modal = ({ setModal, animarModal, setAnimarModal }) => {
  const [mensaje, setMensaje] = useState('')
  const [nombre, setNombre] = useState('')
  const [cantidad, setCantidad] = useState('')
  const [categoria, setCategoria] = useState('')

  const ocultarModal = () => {
    setAnimarModal(false)
    
    setTimeout(() => {
      setModal(false)
    }, 500);
  }

  const handleSubmit = e => {
    e.preventDefault()

    if([nombre, cantidad, categoria].includes('')) {
      setMensaje('Todos los Campos son Obligatorios')
      return
    }
  }

  return (
    <div className="modal">
      <div className="cerrar-modal">
        <img src={CerrarBtn} alt="Botón Cerrar Modal" onClick={ocultarModal} />
      </div>

      <div>
        <form 
          onSubmit={handleSubmit}
          className={`formulario ${animarModal ? "animar" : "cerrar"}`}
          >
          <legend>Nuevo Gasto</legend>

          <div className="campo">
            <label htmlfor="nombre">Descripción Gasto</label>
            <input
              id="nombre"
              type="text"
              placeholder="Ingrese Descripción del Gasto"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </div>

          <div className="campo">
            <label htmlfor="cantidad">Cantidad</label>
            <input
              id="cantidad"
              type="number"
              placeholder="Ingrese Cantidad del Gasto"
              value={cantidad}
              onChange={(e) => setCantidad(Number(e.target.value))}
            />
          </div>

          <div className="campo">
            <label htmlfor="categoria">Categoria</label>

            <select
              id="categoria"
              value={categoria}
              onChange={(e) => setCategoria(e.target.value)}
            >
              <option value="">-- Seleccione Categoria --</option>
              <option value="ahorro">Ahorro</option>
              <option value="comida">Comida</option>
              <option value="casa">Casa</option>
              <option value="gastos">Gastos Varios</option>
              <option value="ocio">Ocio</option>
              <option value="salud">Salud</option>
              <option value="suscripciones">Suscripciones</option>
            </select>
          </div>

          <input type="submit" value="Añadir Gasto" />
        </form>
      </div>
    </div>
  );
};

export default Modal