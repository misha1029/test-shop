import React from "react";
import ReactDOM from "react-dom";
import AppContext from "../../Context";


export const useCart = () => {
    const { cartItems, setCardItems } = React.useContext(AppContext);
    const totalPrice = cartItems.reduce((sum, obj) => obj.price + sum, 0);

    return {cartItems, setCardItems, totalPrice}
}

