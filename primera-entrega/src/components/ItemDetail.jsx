import { useContext } from "react"
import ItemCount from "./ItemCount"
import { CartContext } from "../context/CartContext"

const ItemDetail = ({item}) => {
    const {addItem} = useContext(CartContext);

    const onAdd = (quantity) => {
        addItem(item, quantity);
    }

    return (
        <div className="flex-item-detail">
            <div className="item-detail-size">
                <div className="container">
                    <div className="row card-item-detail">
                        <div className="col">
                        <div id={`carouselExample${item.id}`} className="carousel slide border-end">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src={item.imagen1} className="d-block w-100" alt={item.nombre} />
                                    </div>
                                    <div className="carousel-item">
                                        <img src={item.imagen2} className="d-block w-100" alt={item.nombre} />
                                    </div>
                                    <div className="carousel-item">
                                        <img src={item.imagen3} className="d-block w-100" alt={item.nombre} />
                                    </div>
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target={`#carouselExample${item.id}`} data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target={`#carouselExample${item.id}`} data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                        <div className="col detail-text">
                            <h1>{item.nombre}</h1>
                            <p className="item-detail-precio">$ {item.precio}</p>
                            <ItemCount item={item} className="contador-item" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail