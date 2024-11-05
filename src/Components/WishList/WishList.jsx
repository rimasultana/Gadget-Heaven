import { useContext } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { ListProvider } from "../../Provider/Provider";

const WishList = () => {
  const { wish, setWish } = useContext(ListProvider);
  
  const handleClickWish = (id) => {
    const updatedWishList = wish.filter(item => item.product_id !== id);
    setWish(updatedWishList);
  };

  return (
    <div className="w-2/3 mx-auto">
      {wish.length > 0 ? (
        wish.map((item) => {
          const { product_id, product_image, product_title, description, price } = item;
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
              <button onClick={() => handleClickWish(product_id)} className="text-red-500 text-2xl">
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
  );
};

export default WishList;
