import { useContext, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { ListProvider } from "../../Provider/Provider";
import { FaSquare } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { GiSelfLove } from "react-icons/gi";
import { Rating } from "@smastrom/react-rating";
import toast from "react-hot-toast";

const ViewDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const { cart, wish, setCart, setWish } = useContext(ListProvider);

  const [isWishClicked, setIsWishClicked] = useState(false);

  const singleProduct = data.find((p) => p.product_id === id);
  const {
    product_title,
    product_image,
    price,
    availability,
    rating,
    specification,
    description,
  } = singleProduct;

  const handleClickCart = () => {
    const isInCart = cart.some(
      (item) => item.product_id === singleProduct.product_id
    );

    if (isInCart) {
      toast.error("This item is already added to the cart");
    } else {
      setCart([...cart, singleProduct]);
      toast.success("Successfully added item to cart");
    }
  };

  const handleClickWish = () => {
    if (!isWishClicked) {
      toast.success("Added to Wish List");
      setWish([...wish, singleProduct]);
      setIsWishClicked(true);
    }
  };

  return (
    <>
      <div className="text-center bg-[#9538E2] w-full mb-24 h-80 flex flex-col items-center pt-10">
        <h1 className="text-3xl font-bold text-white">Product Details</h1>
        <p className="text-white">
          This typically includes details like product specifications, features,
          materials, dimensions, weight, and unique benefits.
        </p>
      </div>

      <div className="w-full lg:w-2/3 mx-auto shadow-2xl h-[280px]">
        <div className="hero bg-white relative -top-[250px] p-3 rounded-lg ">
          <div className="hero-content flex-col lg:flex-row">
            <img
              src={product_image}
              className="max-w-sm h-[400px] rounded-lg"
              alt={product_title}
            />
            <div className="">
              <h1 className="text-4xl font-bold">{product_title}</h1>
              <p className="font-bold py-2">Price: ${price}</p>
              <button className="btn bg-green-200 text-green-600 rounded-full py-3">
                {availability ? "In Stock" : "Out of Stock"}
              </button>
              <p>{description}</p>
              <div className="flex flex-col">
                <span className="font-bold">Specification:</span>
                <ol type="1" className="ml-5 list-decimal">
                  {specification && specification.length > 0 ? (
                    specification.map((spec, index) => (
                      <li key={index}>{spec}</li>
                    ))
                  ) : (
                    <li>No specifications available.</li>
                  )}
                </ol>
              </div>

              <div className="flex items-center gap-2">
                <span className="font-bold">Rating</span> <FaSquare />
              </div>
              <div className="flex items-center gap-6">
                <Rating
                  style={{ maxWidth: 180 }}
                  value={Math.floor(rating)}
                  readOnly
                />
                <span className="btn"> {rating}</span>
              </div>
              <div className="flex items-center gap-5 py-2">
                <button
                  onClick={handleClickCart}
                  className="btn bg-[#9538E2] text-white"
                >
                  Add To Cart
                  <FiShoppingCart className="text-white text-2xl font-bold" />
                </button>
                <button
                  onClick={handleClickWish}
                  className={`btn bg-white rounded-full ${
                    isWishClicked ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                  disabled={isWishClicked}
                >
                  <GiSelfLove className="text-red-600 font-bold text-2xl" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewDetails;
