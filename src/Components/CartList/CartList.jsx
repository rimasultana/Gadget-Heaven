import { useContext, useState } from "react";
import { ListProvider } from "../../Provider/Provider";
import { IoIosCloseCircleOutline } from "react-icons/io";
import groupImg from "../../assets/Group.png";
import Swal from "sweetalert2";

const CartList = () => {
  const { cart, setCart } = useContext(ListProvider);
  const [disable, setDisable] = useState(false);
  const handleClickCart = (id) => {
    const updataCartData = cart.filter(
      (cartItem) => cartItem.product_id !== id
    );
    setCart(updataCartData);
  };

  const totalCost = cart.reduce((sum, item) => sum + item.price, 0);

  const handleSortOrder = (order = "desc") => {
    const sortedCart = [...cart]; 
     sortedCart.sort((a, b) => {
      const priceA = a.price ?? 0;
      const priceB = b.price ?? 0;

      if (order === "asc") {
        return priceA - priceB;
      } else {
        return priceB - priceA;
      }
    });
    setCart(sortedCart)
  };

  const handlePurchase = () => {
   setDisable(true)
    Swal.fire({
      title: "Payment successful!",
      html: `Thanks for your purchase!<br>Total: $${totalCost.toFixed(2)}`,
      imageUrl: groupImg,
      imageWidth: 200,
      imageHeight: 100,
      imageAlt: "Custom image",
      cancelButtonText: "Close",
      cancelButtonColor: "#d33",
      showCancelButton: true,
      showConfirmButton: false,
    }).then(() => {
      setCart([]);
    });
  };

  return (
    <>
      <div className="flex justify-between w-4/5 mx-auto mt-14">
        <div>
          <h1 className="text-3xl font-bold">Cart</h1>
        </div>
        <div className="flex items-center gap-8">
          <h1 className="text-2xl">Total cost: {totalCost.toFixed(2)}</h1>
          <button onClick={() => handleSortOrder("desc")} disabled={disable} className="btn">Sort by Price</button>
          <button onClick={handlePurchase} disabled={disable} className="btn">
            Purchase
          </button>
        </div>
      </div>
      <div className="w-2/3 mx-auto">
        {cart.length > 0 ? (
          cart.map((item) => {
            const {
              product_id,
              product_image,
              product_title,
              description,
              price,
            } = item;
            return (
              <div
                key={product_id}
                className="flex justify-between p-3 my-4 shadow-lg"
              >
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
                  onClick={() => handleClickCart(product_id)}
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
