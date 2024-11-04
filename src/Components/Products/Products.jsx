import { useEffect } from "react";
import { useState } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("AllProduct");
  useEffect(() => {
    fetch("fackData.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
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
    <>
      <div className="w-4/5 mx-auto flex">
        <div className="w-[20%] flex flex-col  text-center gap-3">
          {categories.map((category) => (
            <div key={category} className=" text-center">
              <button
                onClick={() => handleCategoryClick(category)}
                className="btn w-40 bg-[#9538E2] rounded-full"
              >
                {category}
              </button>
            </div>
          ))}
        </div>
        <div className="w-[80%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filterProduct.slice(0, 9).map((product) => (
            <div
              key={product.product_id}
              className="card card-compact bg-base-100 shadow-xl p-4"
            >
              <figure className="h-48 overflow-hidden">
                <img
                  className="object-cover w-full rounded-lg h-full"
                  src={product.product_image}
                  alt={product.name}
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{product.product_title}</h2>
                <p>Price: {product.price}K</p>
                <div>
                  <button className="btn hover:bg-[#9538E2] hover:text-white btn-[#9538E2] border-2 text-[#9538E2] border-[#9538E2]">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;
