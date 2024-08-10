import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import CompraRealizada from "./CompraRealizada";

const Checkout = () => {
    const { cart, sumaProductos, clear } = useContext(CartContext);
    const total = sumaProductos();
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [telefono, setTelefono] = useState("");
    const [orderId, setOrderId] = useState("");

    const generarOrden = () => {
        if (nombre === "") {
            console.error("Campo sin completar")
            return false;
        }

        if (email === "") {
            console.error("Campo sin completar")
            return false;
        }

        if (telefono === "") {
            console.error("Campo sin completar")
            return false;
        }

        const order = {
            buyer: { name: nombre, email: email, phone: telefono },
            items: cart.map(item => ({ id: item.id, title: item.nombre, price: item.precio, totalprice: (item.precio * item.quantity) })),
            total: total,
        }

        const db = getFirestore();
        const orderCollection = collection(db, "orders");
        addDoc(orderCollection, order).then(response => {
            setOrderId(response.id);
            clear();
        })

    }

    return (
        <>
        <>
            {orderId ? (
                <CompraRealizada orderId={orderId} />
            ) : (
                <div className="container container-checkout">
                    <div className="row">
                        <div className="col">
                            {cart.map(item => (
                                <div className="contenedor-producto-carrito" key={item.id}>
                                    <img src={item.imagen1} alt={item.nombre} className="imagen-carrito" />
                                    <h3 className="nombre-carrito">{item.nombre} ({item.quantity})</h3>
                                    <p className="precio-cantidades">(${item.precio}) </p>
                                    <p className="precio-carrito">${(item.precio * item.quantity)}</p>
                                </div>
                            ))}
                            <div className="total-carrito">
                                <h3>TOTAL</h3>
                                <p>${total}</p>
                            </div>
                        </div>
                        <div className="col">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="nombre" className="form-label">Nombre</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Nombre y Apellido"
                                        onInput={(e) => { setNombre(e.target.value) }}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        placeholder="Email"
                                        onInput={(e) => { setEmail(e.target.value) }}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="telefono" className="form-label">Telefono</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Telefono"
                                        onInput={(e) => { setTelefono(e.target.value) }}
                                    />
                                </div>
                                <button type="button" className="btn btn-custom" onClick={generarOrden}>Generar Orden</button>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </>
        </>
    )
}

export default Checkout;