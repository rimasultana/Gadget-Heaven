export default function Footer() {
  return (
    <div className="bg-[#FFFFFF] mt-20  shadow-md">
      <div className="text-center py-6">
        <h1 className="text-3xl font-bold text-black">Gadget Heaven</h1>
        <p className="text-gray-600">
          Leading the way in cutting-edge technology and innovation.
        </p>
      </div>
      <div className="divider"></div>

      <footer className="footer flex flex-col lg:flex-row items-center justify-around text-black p-10">
        <nav>
          <h6 className="font-bold text-black">Services</h6>
          <a className="link link-hover">Product Support</a>
          <a className="link link-hover">Order Tracking</a>
          <a className="link link-hover">Shipping & Delivery</a>
          <a className="link link-hover">Returns</a>
        </nav>
        <nav>
          <h6 className="font-bold text-black">Company</h6>
          <a className="link link-hover">About Us</a>
          <a className="link link-hover">Careers</a>
          <a className="link link-hover">Contact</a>
        </nav>
        <nav>
          <h6 className="font-bold text-black">Legal</h6>
          <a className="link link-hover">Terms of Service</a>
          <a className="link link-hover">Privacy Policy</a>
          <a className="link link-hover">Cookie Policy</a>
        </nav>
      </footer>
    </div>
  );
}
