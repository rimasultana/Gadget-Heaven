import bgImg from "../../assets/banner.jpg";
// import animation from "../../../public/animation.json"
// import Lottie from "lottie-react";
import NavBar from "../NavBar/NavBar";
export default function Banner() {
  return (
    <>
      <div className="text-center rounded-lg bg-[#9538E2] w-full mb-24">
        <NavBar />
        <div className="text-white space-y-5 p-10">
          <h1 className="text-5xl">
            Upgrade Your Tech Accessorize with <br /> Gadget Heaven Accessories
          </h1>
          <p>
            Explore the latest gadgets that will take your experience to the
            next level. <br /> From smart devices to the coolest accessories, we
            have it all!
          </p>
          <button className="btn bg-white text-[#9538E2] rounded-[32px] px-10">
            Shop Now
          </button>
        </div>
        <div className="w-2/3 mx-auto relative -bottom-20 border-4 border-white rounded-lg p-1">
          <div className="border-2 border-[#9538E2] rounded-lg overflow-hidden">
            <img className="rounded-lg" src={bgImg} alt="" />
            {/* <Lottie animationData={animation} height={200} width='50px' loop={false} /> */}

          </div>
        </div>
      </div>
    </>
  );
}
