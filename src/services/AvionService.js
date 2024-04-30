import axios from "axios";

class AvionService {

    getAviones() {
        return axios.get('http://localhost:8080/api/aviones/obtener')
    }

    agregarAvion(avion) {
        return axios.post('http://localhost:8080/api/aviones/crear', avion)
    }
}

export default new AvionService();