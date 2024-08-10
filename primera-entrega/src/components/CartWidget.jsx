import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { NavLink } from "react-router-dom"

const CartWidget = () => {
    const {totalProductos, cart} = useContext(CartContext);
    return (
        <NavLink to={"/cart"}>
            <button type="button" className="btn position-relative">
                < i className="fa-solid fa-cart-shopping"></i >
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill color-item-carrito">{cart.length}</span>
            </button>
        </NavLink>
    )

}

export default CartWidget 