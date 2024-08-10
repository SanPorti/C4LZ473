import { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const ItemCount = ({item}) => {

    const [contador, setContador] = useState(1);
    const [itemStock, setItemStock] = useState(item.stock);
    const {addItem} = useContext(CartContext);

    const incrementar = () => {
        if (contador < itemStock) {
            setContador(contador + 1)
        }
    }

    const decrementar = () => {
        if (contador > 1) {
            setContador(contador - 1)
        }
    }

    useEffect (() => {
        setItemStock(item.stock)
    }, [item.stock])

    return (
        <>
            <div className="container-botones">
                <div className="btn-group" role="group" aria-label="Basic outlined example">
                    <button type="button" className="btn btn-custom" onClick={decrementar}>-</button>
                    <p className="contador-size">{contador}</p>
                    <button type="button" className="btn btn-custom" onClick={incrementar}>+</button>
                </div>
                <button type="button" className="btn btn-custom" onClick={() => addItem(item, contador)}>Agregar al Carrito</button>
            </div> 
        </>
    )
}

export default ItemCount