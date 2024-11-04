import { useContext } from "react";
import { ListProvider } from "../../Provider/Provider";

const CartList = () => {
    const {cart, setCart} = useContext(ListProvider)
    console.log(cart ,"cart");
    return (
        <div>
            <h1>This is cart List</h1>
        </div>
    );
};

export default CartList;