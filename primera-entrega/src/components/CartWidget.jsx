const CartWidget = () => {
    return (
        <button type="button" className="btn position-relative">
            < i className="fa-solid fa-cart-shopping"></i >
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill color-item-carrito">1</span>
        </button>
    )
}

export default CartWidget 