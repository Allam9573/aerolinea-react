import Logo from '../assets/images/logo.png'

export const Login = () => {

    return (
        <>
            <div className="container d-flex justify-content-center mt-5">
                <div className="card shadow w-50">
                    <img src={Logo} className="mx-auto" width="150px" alt="" />
                    <h3 className="text-center text-secondary my-3">Inicio de Sesion</h3>
                    <form action="">
                        <div className="input-group mb-3">
                            <input type="text" name="usuario" placeholder="Usuario" className="form-control rounded-pill mx-3" />
                        </div>
                        <div className="input-group mb-3">
                            <input type="password" name="" placeholder="Contrasenia" className="form-control rounded-pill mx-3" />
                        </div>
                        <div className="input-group mb-3">
                            <input type="submit" value="Iniciar Sesion" className="btn btn-primary rounded-pill w-100 mx-3" />
                        </div>
                        <div className="input-group mb-3">
                            <a href="" className="text-center mx-auto">No tengo una cuenta</a>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
export default Login;