import { useContext } from "react";
import { ListProvider } from "../../Provider/Provider";
import { IoIosCloseCircleOutline } from "react-icons/io";

const CartList = () => {
  const { cart, setCart } = useContext(ListProvider);
  const handleClickCart =(id)=>{
    const updataCartData = cart.filter((cartItem) => cartItem.product_id !== id)
    setCart(updataCartData)
  }

  return (
    <>
      <div className="flex justify-between w-4/5 mx-auto">
        <div>
          <h1 className="text-3xl font-bold">Cart</h1>
        </div>
        <div className="flex items-center gap-8">
          <h1 className="text-2xl">Total cost:{}</h1>
          <button className="btn">Sort by Price</button>
          <button className="btn">Purchase</button>
        </div>
      </div>
      <div className="w-2/3 mx-auto">
        {cart.length > 0 ? (
          cart.map((item) => {
            const {product_id, product_image, product_title, description, price } =
              item;
            return (
              <div key={product_id} className="flex justify-between p-3 my-4 shadow-lg">
                <div className="flex gap-4 items-center rounded-lg">
                  <img
                    src={product_image}
                    alt={product_title}
                    className="w-24 h-28 rounded-xl"
                  />
                  <div className="space-y-2">
                    <h2 className="text-xl font-bold">{product_title}</h2>
                    <p>{description}</p>
                    <p className="text-lg font-bold">Price: ${price}</p>
                  </div>
                </div>
                <button
                  onClick={()=>handleClickCart(product_id)}
                  className="text-red-500 text-2xl"
                >
                  <IoIosCloseCircleOutline />
                </button>
              </div>
            );
          })
        ) : (
          <div className="flex items-center justify-center py-10">
            <p className="md:text-4xl text-2xl font-bold">Your cart is empty</p>
          </div>
        )}
      </div>
    </>
  );
};

export default CartList;
