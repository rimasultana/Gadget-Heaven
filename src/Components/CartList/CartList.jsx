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
      return order === "asc" ? priceA - priceB : priceB - priceA;
    });
    setCart(sortedCart);
  };

  const handlePurchase = () => {
    setDisable(true);
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
      <div className="flex flex-wrap justify-between w-11/12 mx-auto mt-10">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold">Cart</h1>
        </div>
        <div className="flex flex-wrap items-center gap-4 md:gap-8">
          <h1 className="text-xl md:text-2xl">Total cost: ${totalCost.toFixed(2)}</h1>
          <button onClick={() => handleSortOrder("desc")} disabled={disable} className="btn">
            Sort by Price
          </button>
          <button onClick={handlePurchase} disabled={disable} className="btn">
            Purchase
          </button>
        </div>
      </div>
      <div className="w-11/12 md:w-2/3 mx-auto mt-8">
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
                className="flex flex-col md:flex-row justify-between items-center md:items-start p-4 my-4 shadow-lg rounded-lg"
              >
                <div className="flex gap-4 items-center md:items-start w-full">
                  <img
                    src={product_image}
                    alt={product_title}
                    className="w-24 h-28 rounded-xl"
                  />
                  <div className="space-y-2 w-full">
                    <h2 className="text-lg md:text-xl font-bold">{product_title}</h2>
                    <p className="text-sm md:text-base">{description}</p>
                    <p className="text-md md:text-lg font-bold">Price: ${price}</p>
                  </div>
                </div>
                <button
                  onClick={() => handleClickCart(product_id)}
                  className="text-red-500 text-2xl mt-2 md:mt-0"
                >
                  <IoIosCloseCircleOutline />
                </button>
              </div>
            );
          })
        ) : (
          <div className="flex items-center justify-center py-10">
            <p className="text-2xl md:text-4xl font-bold">Your cart is empty</p>
          </div>
        )}
      </div>
    </>
  );
};

export default CartList;
