import { Link } from "react-router-dom"
import ItemCount from "./ItemCount"

const Item = ({ item }) => {
    return (
        <>
            <div className="col">
                <div className="card mt-4 mb-4" style={{ width: '18rem' }}>
                    <p className="card-text text-center mt-2 border-bottom">{item.genero.toUpperCase()}</p>
                    <div id={`carouselExample${item.id}`} className="carousel slide">
                        <Link to={"/item/" + item.id}>
                            <div>
                                <div className="carousel-inner border-bottom">
                                    <div className="carousel-item active">
                                        <img src={item.imagen1} className="d-block w-100" alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                        <img src={item.imagen2} className="d-block w-100" alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                        <img src={item.imagen3} className="d-block w-100" alt="..." />
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <button className="carousel-control-prev" type="button" data-bs-target={`#carouselExample${item.id}`} data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target={`#carouselExample${item.id}`} data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                    <div className="card-body text-center">
                        <h5 className="card-title">{item.nombre}</h5>
                        <p className="card-text">$ {item.precio}</p>
                        <ItemCount stock={item.stock} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Item