import { useState } from "react";
import CartList from "../../Components/CartList/CartList";
import WishList from "../../Components/WishList/WishList";

export default function Dashboard() {
  const [actives, setActives] = useState({
    available: true,
    status: "cartList",
  });

  const handleActivesButton = (status) => {
    if (status == "cartList") {
      setActives({
        available: true,
        status: "cartList",
      });
    } else {
      setActives({
        available: false,
        status: "wishList",
      });
    }
  };

  return (
    <>
      <div className="text-center  bg-[#9538E2] w-full mb-24 h-32 p-5 flex flex-col items-center justify-center">
        <h1 className="text-3xl text-white">DashBord</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident,
          officiis? Minus aliquid optio fuga repudiandae.
        </p>
        <div className="flex gap-3">
          <div
            onClick={() => handleActivesButton("cartList")}
            className={`${
              actives.available
                ? "btn bg-white text-[#9538E2]"
                : "btn border-2 border-white bg-[#9538E2]"
            }`}
          >
            Cart
          </div>
          <div
            onClick={() => handleActivesButton("wishList")}
            className={`${
              actives.available
                ? "btn border-2 border-white bg-[#9538E2]"
                : "btn bg-white text-[#9538E2]"
            }`}
          >
            Wishlist
          </div>
        </div>
      </div>
      <div>{actives.available ? <CartList /> : <WishList />}</div>
    </>
  );
}
