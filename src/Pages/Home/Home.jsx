import { Helmet } from "react-helmet-async";
import Products from "../../Components/Products/Products";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Home | Gadget Heaven</title>
      </Helmet>
      <div className="py-20 px-10">
        <Products />
      </div>
    </>
  );
}
