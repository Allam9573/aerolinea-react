import AgregarAvion from './components/AgregarAvion'
import Aviones from './components/Aviones'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Content from './components/Content'
import Login from './components/Login'

function App() {

  return (
    <>
      <div>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route exact path='/aviones' element={<Aviones />} ></Route>
            <Route exact path='/nuevo-avion' element={<AgregarAvion />} ></Route>
            <Route exact path='/login' element={<Login />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
