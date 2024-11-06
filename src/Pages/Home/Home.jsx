import Products from "../../Components/Products/Products";
import useTitle from "../../Hook/useTitle";

export default function Home() {
   useTitle('Home') 
  return (
    <div className="py-20 px-10">
      <Products/>
    </div>
  );
}
