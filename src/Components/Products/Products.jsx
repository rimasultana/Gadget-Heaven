import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Skelton from "../Skilaton/Skilaton";

const Products = () => {
  const [loader, setLoader] = useState(false);
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("AllProduct");

  useEffect(() => {
    setLoader(true);
    fetch("fackData.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoader(false);
      });
  }, []);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const categories = [
    "AllProduct",
    "Laptops",
    "Smart Watches",
    "Accessories",
    "Phones",
    "MacBook",
    "iPhone",
  ];

  const filterProduct = products.filter((product) =>
    selectedCategory === "AllProduct"
      ? true
      : product.category === selectedCategory
  );

  return (
    <div className="w-full lg:w-4/5 mx-auto">
      <h1 className="text-2xl md:text-3xl text-center font-bold my-4">
        Explore Cutting-Edge Gadgets
      </h1>
      {loader ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 w-[90%] mt-5 mx-auto">
          {[...Array(8)].map((_, i) => (
            <Skelton key={i} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col md:flex-row w-full mx-auto">
          <div className="w-full md:w-[20%] flex flex-col text-center gap-3 p-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryClick(category)}
                className={`btn w-full sm:w-auto md:w-40 rounded-full ${
                  selectedCategory === category
                    ? "bg-[#9538E2] text-white"
                    : "bg-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="w-full md:w-[80%] p-4">
            {filterProduct.length === 0 ? (
              <div className="flex justify-center items-center min-h-96">
                <h1 className="font-bold text-3xl">
                  No Data Available in this Category
                </h1>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {filterProduct.slice(0, 10).map((product) => (
                  <div
                    key={product.product_id}
                    className="card card-compact bg-base-100 shadow-xl p-4 w-full sm:w-[320px] lg:w-[280px]"
                  >
                    <figure className="h-48 overflow-hidden">
                      <img
                        className="object-cover w-full rounded-lg h-full"
                        src={product.product_image}
                        alt={product.product_title}
                      />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title">{product.product_title}</h2>
                      <p>Price: {product.price}K</p>
                      <Link to={`/view/${product.product_id}`}>
                        <button className="btn hover:bg-[#9538E2] hover:text-white text-[#9538E2] border-2 border-[#9538E2]">
                          View Details
                        </button>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;
