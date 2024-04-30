import { useEffect, useState } from "react";
import AvionService from "../services/AvionService";

export const Aviones = () => {
    const [aviones, setAviones] = useState([])
    useEffect(() => {
        AvionService.getAviones().then(response => {
            setAviones(response.data)
        }).catch(error => {
            console.log(error)
        })
    }, [])
    return (
        <>
            <h3>Lista de aviones:</h3>
            <div className="d-flex justify-content-center align-items-center flex-wrap">
                {
                    aviones.map(
                        avion =>
                            <div className="card p-5 m-3">
                                <h4>Aeronave: {avion.fabricante} - {avion.modelo}</h4>
                                <h5>Capacidad: {avion.capacidad} </h5>
                            </div>
                    )
                }
            </div>

        </>
    )
}

export default Aviones;