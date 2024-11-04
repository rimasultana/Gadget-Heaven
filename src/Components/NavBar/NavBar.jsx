import { NavLink, useLocation } from "react-router-dom";
import { MdOutlineShoppingCart } from "react-icons/md";
import { GiSelfLove } from "react-icons/gi";

export default function NavBar() {
  const location = useLocation();
  const navs = [
    { id: 1, path: "/home", name: "Home" },
    { id: 2, path: "/statistics", name: "Statistics" },
    { id: 3, path: "/dashboard", name: "Dashboard" },
  ];
  const links = (
    <>
      {navs.map(({ id, path, name }) => (
        <li key={id}>
          <NavLink
            style={({ isActive }) =>
              isActive ? { backgroundColor: "purple" } : {}
            }
            to={path}
          >
            {name}
          </NavLink>
        </li>
      ))}
    </>
  );

  return (
    <div className="navbar w-4/5 mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a
          className={`btn btn-ghost text-3xl font-bold hidden lg:block ${
            location.pathname === "/home" ? "text-white" : ""
          }`}
        >
          Gadget Heaven
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className={`menu menu-horizontal px-1 ${
            location.pathname === "/home" ? "text-white" : ""
          }`}>{links}</ul>
      </div>
      <div className="navbar-end gap-3">
        <a className="btn text-xl">
          <MdOutlineShoppingCart />{" "}
        </a>
        <a className="btn text-xl">
          <GiSelfLove />
        </a>
      </div>
    </div>
  );
}
