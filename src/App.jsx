import AgregarAvion from './components/AgregarAvion'
import Aviones from './components/Aviones'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route exact path='/aviones' element={<Aviones />} ></Route>
            <Route exact path='/nuevo-avion' element={<AgregarAvion />} ></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
