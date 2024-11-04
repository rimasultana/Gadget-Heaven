import { useContext } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { ListProvider } from "../../Provider/Provider";

const ViewDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const { cart, wish, setCart, setWish } = useContext(ListProvider);


  const singleProduct = data.find((p) => p.product_id === id);
  const {
    product_title,
    product_image,
    category,
    price,
    availability,
    rating,
    specification,
    description,
  } = singleProduct;

  const handleClickCart = () => {
    setCart([...cart, singleProduct]);
  };
  const handleClickWish = () =>{
    setWish([...wish, singleProduct])
  }
  console.log(wish);
  console.log(cart);
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <img src={product_image} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">{product_title}</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button onClick={handleClickCart} className="btn btn-primary">Add To Cart</button>
            <button onClick={handleClickWish} className="btn btn-primary">Love</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
