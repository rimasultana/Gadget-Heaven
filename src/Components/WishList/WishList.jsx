import { useContext } from "react";
import { ListProvider } from "../../Provider/Provider";

const WishList = () => {
    const {wish, setWish} = useContext(ListProvider)
    console.log(wish, "wish");
  return (
    <div>
      <h1>This Is WishList</h1>
    </div>
  );
};

export default WishList;
