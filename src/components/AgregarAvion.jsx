import { useState } from "react"
import AvionService from "../services/AvionService"
import { useNavigate } from "react-router-dom"

export const AgregarAvion = () => {
    const [nombre, setNombre] = useState('')
    const [modelo, setModelo] = useState('')
    const [capacidad, setCapacidad] = useState('')
    const [fabricante, setFabricante] = useState('')
    const navigate = useNavigate()

    const agregarAvion = e => {
        e.preventDefault()
        const avion = {
            nombre,
            modelo,
            capacidad,
            fabricante
        }
        AvionService.agregarAvion(avion).then(response => {
            navigate('/aviones')
        }).catch(error => {
            console.log(error)
        })
    }
    return (
        <>
            <div className="card shadow  p-5 mx-auto mt-5 w-25">
                <h3 className="mb-3">Nuevo Avion</h3>
                <form onSubmit={agregarAvion}>
                    <div className="input-group mb-3">
                        <input type="text" placeholder="Nombre" value={nombre} onChange={e => setNombre(e.target.value)} className="form-control" />
                    </div>
                    <div className="input-group mb-3">
                        <input type="text" placeholder="Modelo" value={modelo} onChange={e => setModelo(e.target.value)} className="form-control" />
                    </div>
                    <div className="input-group mb-3">
                        <input type="text" placeholder="Capacidad" value={capacidad} onChange={e => setCapacidad(e.target.value)} className="form-control" />
                    </div>
                    <div className="input-group mb-3">
                        <input type="text" placeholder="Fabricante" value={fabricante} onChange={e => setFabricante(e.target.value)} className="form-control" />
                    </div>
                    <div className="input-group">
                        <input type="submit" value="Agregar Avion" className="btn btn-primary w-100" />
                    </div>
                </form>
            </div>
        </>
    )
}

export default AgregarAvion