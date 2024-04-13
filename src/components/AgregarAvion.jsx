import { useState } from "react"
import AvionService from "../services/AvionService"
import { useNavigate } from "react-router-dom"

export const AgregarAvion = () => {

    const [marca, setMarca] = useState('')
    const [asientosPrimeraClase, setPrimeraClase] = useState('')
    const [asientosPremium, setPremium] = useState('')
    const [asientosBasico, setBasico] = useState('')
    const navigate = useNavigate()

    const agregarAvion = e => {
        e.preventDefault()
        const avion = {
            marca,
            asientosPrimeraClase,
            asientosPremium,
            asientosBasico
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
                        <input type="text" placeholder="Marca" value={marca} onChange={e => setMarca(e.target.value)} className="form-control" />
                    </div>
                    <div className="input-group mb-3">
                        <input type="text" placeholder="Primera clase" value={asientosPrimeraClase} onChange={e => setPrimeraClase(e.target.value)} className="form-control" />
                    </div>
                    <div className="input-group mb-3">
                        <input type="text" placeholder="Premuim" value={asientosPremium} onChange={e => setPremium(e.target.value)} className="form-control" />
                    </div>
                    <div className="input-group mb-3">
                        <input type="text" placeholder="Basico" value={asientosBasico} onChange={e => setBasico(e.target.value)} className="form-control" />
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