import { Link } from "react-router-dom"

const EmptyCart = () => {
    return (
        <>
            < i className="fa-solid fa-cart-shopping imagen-carrito-vacio"></i >
            <h1 className="titulo-carrito-vacio">Tu carrito esta vacio, por favor asegurate de agregar un producto primero.</h1>
            <Link to={"/"}>
                <button className="btn btn-custom">Pagina Principal</button>
            </Link>
        </>
    )
}

export default EmptyCart;