import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addItem = (item, quantity) => {
        if (isInCart(item.id)) {
            const product = cart.find(prod => prod.id === item.id); 
            product.quantity += quantity;
            setCart([...cart]);
        } else {
            setCart([...cart, { ...item, quantity }]);
        }
    }

    const removeItem = (id) => {
        const items = cart.filter(item => item.id !== id);
        setCart([...items]);
    }

    const clear = () => {
        setCart([]);
    }

    const isInCart = (id) => {
        return cart.some(item => item.id === id); 
    }

    const totalProductos = () => {
        return cart.reduce((acumulador, item) => acumulador + item.quantity, 0);
    }

    const sumaProductos = () => {
        return cart.reduce((acumulador, item) => acumulador + item.quantity * item.precio, 0);
    }

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, clear, totalProductos, sumaProductos }}>
            {children}
        </CartContext.Provider>
    );
}


