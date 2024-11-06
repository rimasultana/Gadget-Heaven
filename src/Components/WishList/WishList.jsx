import { useContext } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { ListProvider } from "../../Provider/Provider";
import toast from "react-hot-toast";

const WishList = () => {
  const { wish, setWish } = useContext(ListProvider);

  const handleClickWish = (id) => {
    const updatedWishList = wish.filter((item) => item.product_id !== id);
    setWish(updatedWishList);
    toast.success("Wish list item removed!")
  };

  return (
    <div className="w-full max-w-4xl mx-auto mt-10 px-4">
      <div className="text-start mb-10">
        <h1 className="font-bold text-3xl md:text-4xl">WishList</h1>
      </div>
      {wish.length > 0 ? (
        wish.map((item) => {
          const { product_id, product_image, product_title, description, price } = item;
          return (
            <div
              key={product_id}
              className="flex flex-col md:flex-row justify-between px-5 py-4 my-4 rounded-md shadow-lg"
            >
              <div className="flex gap-4 items-center rounded-lg">
                <img
                  src={product_image}
                  alt={product_title}
                  className="w-24 h-28 md:w-32 md:h-36 rounded-xl object-cover"
                />
                <div className="space-y-2">
                  <h2 className="text-xl md:text-2xl font-bold">{product_title}</h2>
                  <p className="text-sm md:text-base">{description}</p>
                  <p className="text-lg font-bold">Price: ${price}</p>
                  <button className="btn bg-[#9538E2] text-white mt-2">
                    Add to cart
                  </button>
                </div>
              </div>
              <button
                onClick={() => handleClickWish(product_id)}
                className="text-red-500 mt-4 md:mt-0"
              >
                <IoIosCloseCircleOutline className="text-4xl font-bold" />
              </button>
            </div>
          );
        })
      ) : (
        <div className="flex items-center justify-center py-10">
          <p className="text-2xl md:text-4xl font-bold">
            Your wish list is empty
          </p>
        </div>
      )}
    </div>
  );
};

export default WishList;
