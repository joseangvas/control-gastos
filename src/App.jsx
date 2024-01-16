import {useState, useEffect} from 'react'
import Header from './components/Header'
import ListadoGastos from './components/ListadoGastos'
import Modal from './components/Modal'
import {generarId} from './helpers'
import IconoNuevoGasto from './img/nuevo-gasto.svg'

function App() {
  const [gastos, setGastos] = useState([])
  const [presupuesto, setPresupuesto] = useState(0)
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false)

  const [modal, setModal] = useState(false)
  const [animarModal, setAnimarModal] = useState(false)

  const [gastoEditar, setGastoEditar] = useState({})

  useEffect(() => {
    if(Object.keys(gastoEditar).length > 0) {
      handleNuevoGasto()
    }
  }, [gastoEditar])
  


  const handleNuevoGasto = () => {
    setModal(true)
    setGastoEditar({})

    setTimeout(() => {
      setAnimarModal(true);
    }, 500);
  };

  const guardarGasto = gasto => {
    gasto.id = generarId()
    gasto.fecha = Date.now()
    setGastos([...gastos, gasto])

    // Cerrar Ventana Modal
    setModal(false);
    setTimeout(() => {
      setAnimarModal(false);
    }, 500);
  }
  
  return (
    <div className={modal ? "fijar" : ""}>
      <Header
        gastos={gastos}
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isValidPresupuesto={isValidPresupuesto}
        setIsValidPresupuesto={setIsValidPresupuesto}
      />

      {isValidPresupuesto && (
        <>
          <main>
            <ListadoGastos gastos={gastos} setGastoEditar={setGastoEditar} />
          </main>
          <div className="nuevo-gasto">
            <img
              src={IconoNuevoGasto}
              alt="Icono Nuevo Gasto"
              onClick={handleNuevoGasto}
            />
          </div>
        </>
      )}

      {modal && (
        <Modal
          setModal={setModal}
          animarModal={animarModal}
          setAnimarModal={setAnimarModal}
          guardarGasto={guardarGasto}
          gastoEditar={gastoEditar}
          setGastoEditar={setGastoEditar}
        />
      )}
    </div>
  );
}

export default App
