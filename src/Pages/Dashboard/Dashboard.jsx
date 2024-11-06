import { useState } from "react";
import CartList from "../../Components/CartList/CartList";
import WishList from "../../Components/WishList/WishList";
import useTitle from "../../Hook/useTitle";
import animation from "../../../public/animation.json"

export default function Dashboard() {
  useTitle("Dashboard")

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
      <div className="text-center  bg-[#9538E2] w-full flex flex-col py-10 items-center">
        <h1 className="text-3xl text-white font-bold py-3">DashBord</h1>
        <p className="text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident,
          officiis? Minus aliquid optio fuga repudiandae.
        </p>
        <div className="flex gap-3 py-5">
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
