import animation from "../../../public/animation.json";
import animation2 from "../../../public/animation-2.json";
import { Player } from "@lottiefiles/react-lottie-player";
import useTitle from "../../Hook/useTitle";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

export default function Contact() {
  useTitle("Contact");
  return (
    <>
      <div className="w-2/3 mx-auto  bg-[#ecf0f1] rounded-md ">
        <div className="grid grid-cols-1 md:grid-cols-2 py-10 px-10">
          <div className="flex flex-col gap-3 ">
            <h3>Name</h3>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
            <div className="">
              <div>
                <p>Email</p>
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="input input-bordered w-full max-w-xs"
                />
              </div>
              <div>
                <p>Phone Number</p>
                <input
                  type="text"
                  placeholder="Enter Your Phone Number"
                  className="input input-bordered w-full max-w-xs"
                />
              </div>
            </div>
            <textarea
              placeholder="Bio"
              className="textarea textarea-bordered textarea-lg w-full max-w-xs"
            ></textarea>
            <div>
              <input
                className="btn text-white bg-green-600"
                type="submit"
                placeholder="Submit"
              />
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <h1 className="text-3xl font-bold">
              Contact <span className="text-[#9538E2]">Us</span>
            </h1>
            <p className="">
              The "Contact Us" page serves as a welcoming space where customers
              can easily connect with the support team for inquiries assistance.
            </p>
            <div className="flex items-center gap-3 ">
              <p className="btn rounded-full text-white bg-green-700">
                <FaPhoneAlt />
              </p>
              <p className="">+123-2457-487</p>
            </div>
            <div className="flex items-center gap-3">
              <p className="btn rounded-full text-white bg-green-700">
                <MdEmail />
              </p>
              <p>hello@gmail.com</p>
            </div>
            <div className="flex items-center gap-3">
              <p className="btn rounded-full text-white bg-green-700">
                <FaLocationDot />
              </p>
              <p>90 C.K Road, Mymensingh</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <div className="w-1/3 mx-auto rounded-full text-center">
          <Player autoplay loop src={animation} />
        </div>
        <div className="w-1/3 mx-auto text-center mt-5">
          <Player autoplay loop src={animation2} />
        </div>
      </div>
    </>
  );
}
