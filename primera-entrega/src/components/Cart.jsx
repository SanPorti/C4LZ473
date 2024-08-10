import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import EmptyCart from "./EmptyCart";
import { Link } from "react-router-dom";

const Cart = () => {
    const { cart, removeItem, clear, sumaProductos } = useContext(CartContext);
    const total = sumaProductos();

    

    return (
        <div className="contenedor-carrito">
            {cart.length > 0 ? (
                <>
                    <h1 className="titulo-carrito">Tu Carrito</h1>
                    <button className="btn btn-custom" onClick={clear}>Vaciar Carrito</button>
                    {cart.map(item => (
                        <div className="contenedor-producto-carrito" key={item.id}>
                            <img src={item.imagen1} alt={item.nombre} className="imagen-carrito" />
                            <h3 className="nombre-carrito">{item.nombre} ({item.quantity})</h3>
                            <p className="precio-cantidades">(${item.precio}) </p>
                            <p className="precio-carrito">${(item.precio * item.quantity)}</p>
                            <button className="btn btn-custom" onClick={() => removeItem(item.id)}>Eliminar del Carrito</button>
                        </div>
                    ))}
                    <div className="total-carrito">
                        <h3>TOTAL</h3>
                        <p>${total}</p>
                    </div>
                    <div>
                        <Link to={"/checkout"} className="btn btn-custom">Finalizar Compra</Link>
                    </div>
                </>
            ) : (
                <EmptyCart />
            )}
        </div>
    );
};

export default Cart;

