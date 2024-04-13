import { useEffect, useState } from "react";
import AvionService from "../services/AvionService";
import Logo from '../assets/images/logo.png'

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
            {
                aviones.map(
                    avion =>
                        <p key={avion.idAvion}>{avion.idAvion} - {avion.marca}</p>
                )
            }
        </>
    )
}

export default Aviones;