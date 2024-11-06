import animation from "../../../public/animation.json";
import animation2 from "../../../public/animation-2.json";
import { Player } from "@lottiefiles/react-lottie-player";
import useTitle from "../../Hook/useTitle";

export default function Contact() {
  useTitle("Contact");
  return (
    <>
      {/* <div className="text-center bg-[#9538E2]  w-full py-10 flex flex-col items-center ">
        <h1 className="text-3xl font-bold text-white ">Blog😉</h1>
        <p className="text-white">
          you will find a variety of blog posts. From technology and coding tips
          to personal experiences and <br /> lifestyle topics, there is a wide
          range of content available. Whether you're new to programming or
          looking for fresh ideas, this space is for you <br />. Keep coming
          back for regular updates and feel free to explore the different
          sections at your leisure!
        </p>
        <div className="w-52">
          <Player autoplay loop src={animation2} />
        </div>
      </div> */}

      <div className="">
        <div className=" w-1/3 mx-auto rounded-full text-center ">
          <Player autoplay loop src={animation} />
        </div>
      </div>
    </>
  );
}
