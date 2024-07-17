import { useEffect, useState } from "react"

const ItemCount = ({ stock }) => {

    const [contador, setContador] = useState(1);
    const [itemStock, setItemStock] = useState(stock);


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

    const onAdd = () => {
        if (contador <= itemStock) {
            setItemStock (itemStock - contador);
            setContador(1);
        }
    }

    useEffect (() => {
        setItemStock(stock)
    }, [stock])

    return (
        <>
            <div className="container-botones">
                <div className="btn-group" role="group" aria-label="Basic outlined example">
                    <button type="button" className="btn btn-custom" onClick={decrementar}>-</button>
                    <p className="contador-size">{contador}</p>
                    <button type="button" className="btn btn-custom" onClick={incrementar}>+</button>
                </div>
                <button type="button" className="btn btn-custom" onClick={onAdd}>Agregar al Carrito</button>
            </div>
        </>
    )
}

export default ItemCount