import { Link } from "react-router-dom";

const CompraRealizada = ({orderId}) => {
    return (
            <div className="compra-realizada">
                <i className="fa-regular fa-circle-check"></i>
                <h1 className="titulo-carrito-vacio">¡Gracias por tu compra!</h1>
                <h3>Tu operacion fue realizada con exito, gracias por elegirnos.</h3>
                <p>Tu codigo de pedido es: <span className="numero-orden">{orderId}</span></p>
                <Link to={"/"}>
                    <button className="btn btn-custom">Pagina Principal</button>
                </Link>
            </div>
    )
}

export default CompraRealizada;