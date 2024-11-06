import { Outlet, useLocation } from "react-router-dom";
import Banner from "./Components/BannerWithNav/Banner";
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";

function App() {
  const location = useLocation();

  return (
    <>
      {location.pathname === "/" ? <Banner /> : <NavBar />}
      <div className="min-h-screen">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default App;
