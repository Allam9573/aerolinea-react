import Logo from '../assets/images/logo.png'
export const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-primary bg-dark">
                <div className="container">
                    <a className="navbar-brand d-flex align-items-center" href="/">
                        <img src={Logo} className="me-2" alt="" width="70px" />
                        <h3 className="text-white">Mayan Airlines</h3>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse text-white d-flex justify-content-between align-items-center"
                        id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="btn btn-outline-primary rounded-pill text-white border-0 me-3"
                                    href="#">Vuelos</a>
                            </li>
                            <li className="nav-item">
                                <a className="btn btn-outline-primary rounded-pill text-white border-0 me-3"
                                    href="/aviones">Aviones</a>
                            </li>
                            <li className="nav-item">
                                <a className="btn btn-outline-primary rounded-pill text-white border-0 me-3"
                                    href="/nuevo-avion">Nuevo Avion</a>
                            </li>
                            <li className="nav-item">
                                <a className="btn btn-outline-primary rounded-pill text-white border-0 me-3" href="/">Comprar
                                    Ticket</a>
                            </li>
                        </ul>
                        <ul>
                            <a href="/login" className="btn btn-outline-light me-2">Iniciar Sesion</a>
                            <a href="" className="btn btn-primary">Crear Cuenta</a>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
export default Navbar;