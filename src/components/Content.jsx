export const Content = () => {
    return (
        <>
            <div className="container">
                <div className="card mt-5 shadow my-auto">
                    <div className="card-header bg-primary text-white">
                        Proximo vuelo
                    </div>
                    <div className="card-body">

                        <a href="" className="btn btn-primary rounded-pill" data-bs-toggle="modal" data-bs-target="#exampleModal">Comprar Vuelo</a>
                    </div>
                </div>
            </div>


            {/* Modal */}
            <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <img src="" alt="" />
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Content;