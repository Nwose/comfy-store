// import { BsCart3, BsMoonFill, BsSunFill } from "react-icons/bs";
// import { FaBarsStaggered } from "react-icons/fa6";
// import { NavLink } from "react-router-dom";
// import NavLinks from "./NavLinks";
// import { useEffect, useState } from "react";

// const themes = {
//   cupcake: "cupcake",
//   forest: "forest",
// };

// const getThemeFromLocalStorage = () => {
//   return localStorage.getItem("theme") || themes.forest;
// };

// const Navbar = () => {
//   const [theme, setTheme] = useState(getThemeFromLocalStorage());
//   const handleTheme = () => {
//     const { cupcake, forest } = themes;
//     const newTheme = theme === cupcake ? forest : cupcake;

//     setTheme(newTheme);
//   };

//   useEffect(() => {
//     document.documentElement.setAttribute("data-theme", theme);
//     localStorage.setTheme("theme", theme);
//   }, [theme]);
//   return (
//     <nav className="bg-base-200">
//       <div className="navbar align-element">
//         <div className="navbar-start">
//           <NavLink
//             to="/"
//             className="hidden lg:flex btn btn-primary text-3xl items-center"
//           >
//             C
//           </NavLink>

//           <div className="dropdown">
//             <label tabIndex={0} className="btn btn-ghost lg:hidden">
//               <FaBarsStaggered className="h-6 w-6" />
//             </label>
//             <ul
//               tabIndex={0}
//               className="menu menu-sm dropdown-content mt-6 z-[1] p-2 shadow bg-base-200 rounded-box w-52"
//             >
//               <NavLinks className="active" />
//             </ul>
//           </div>
//         </div>
//         <div className="navbar-center hidden lg:flex">
//           <ul className="menu menu-horizontal">
//             <NavLinks className="active" />
//           </ul>
//         </div>
//         <div className="navbar-end">
//           <label className="swap swap-rotate">
//             <input type="checkbox" onChange={handleTheme} />
//             <BsSunFill className="swap-on h-4 w-4" />
//             <BsMoonFill className="swap-off h-4 w-4" />
//           </label>
//           <NavLink to="/cart" className="btn btn-ghost btn-circle btn-md ml-4">
//             <div className="indicator">
//               <BsCart3 className="h-6 w-6" />
//               <span className="badge badge-sm badge-primary indicator-item">
//                 8
//               </span>
//             </div>
//           </NavLink>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

// import { BsCart3, BsMoonFill, BsSunFill } from "react-icons/bs";
// import { FaBarsStaggered } from "react-icons/fa6";
// import { NavLink } from "react-router-dom";
// import NavLinks from "./NavLinks";
// import { useEffect, useState } from "react";

// const themes = {
//   cupcake: "cupcake",
//   forest: "forest",
// };

// const getThemeFromLocalStorage = () => {
//   return localStorage.getItem("theme") || themes.forest;
// };

// const Navbar = () => {
//   const [theme, setTheme] = useState(getThemeFromLocalStorage());

//   const handleTheme = () => {
//     const { cupcake, forest } = themes;
//     const newTheme = theme === cupcake ? forest : cupcake;
//     setTheme(newTheme);
//   };

//   useEffect(() => {
//     document.documentElement.setAttribute("data-theme", theme);
//     localStorage.setItem("theme", theme); // ✅ Fixed: correct localStorage usage
//   }, [theme]);

//   return (
//     <nav className="bg-base-200">
//       <div className="navbar align-element">
//         <div className="navbar-start">
//           <NavLink
//             to="/"
//             className="hidden lg:flex btn btn-primary text-3xl items-center"
//           >
//             C
//           </NavLink>

//           <div className="dropdown">
//             <label tabIndex={0} className="btn btn-ghost lg:hidden">
//               <FaBarsStaggered className="h-6 w-6" />
//             </label>
//             <ul
//               tabIndex={0}
//               className="menu menu-sm dropdown-content mt-6 z-[1] p-2 shadow bg-base-200 rounded-box w-52"
//             >
//               {/* ✅ NavLinks must return <li> elements inside */}
//               <NavLinks />
//             </ul>
//           </div>
//         </div>

//         <div className="navbar-center hidden lg:flex">
//           <ul className="menu menu-horizontal">
//             <NavLinks />
//           </ul>
//         </div>

//         <div className="navbar-end">
//           <label className="swap swap-rotate">
//             <input type="checkbox" onChange={handleTheme} />
//             <BsSunFill className="swap-on h-4 w-4" />
//             <BsMoonFill className="swap-off h-4 w-4" />
//           </label>

//           <NavLink to="/cart" className="btn btn-ghost btn-circle btn-md ml-4">
//             <div className="indicator">
//               <BsCart3 className="h-6 w-6" />
//               <span className="badge badge-sm badge-primary indicator-item">
//                 8 {/* You can replace this with a dynamic cart count later */}
//               </span>
//             </div>
//           </NavLink>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import { BsCart3, BsMoonFill, BsSunFill } from "react-icons/bs";
import { FaBarsStaggered } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import NavLinks from "./NavLinks";
import { useEffect, useState } from "react";

const themes = {
  emerald: "emerald",
  forest: "forest",
};

const getThemeFromLocalStorage = () => {
  return localStorage.getItem("theme") || themes.forest;
};

const Navbar = () => {
  const [theme, setTheme] = useState(getThemeFromLocalStorage());

  const handleTheme = () => {
    const { emerald, forest } = themes;
    const newTheme = theme === emerald ? forest : emerald;
    setTheme(newTheme);
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <nav className="bg-base-200">
      <div className="navbar align-element">
        <div className="navbar-start">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `hidden lg:flex btn btn-primary text-3xl items-center ${
                isActive ? "border-b-2 border-primary font-bold" : ""
              }`
            }
          >
            C
          </NavLink>

          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <FaBarsStaggered className="h-6 w-6" />
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-6 z-[1] p-2 shadow bg-base-200 rounded-box w-52"
            >
              <NavLinks />
            </ul>
          </div>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal">
            <NavLinks />
          </ul>
        </div>

        <div className="navbar-end">
          <label className="swap swap-rotate">
            <input type="checkbox" onChange={handleTheme} />
            <BsSunFill className="swap-on h-4 w-4" />
            <BsMoonFill className="swap-off h-4 w-4" />
          </label>

          <NavLink
            to="/cart"
            className={({ isActive }) =>
              `btn btn-ghost btn-circle btn-md ml-4 ${
                isActive ? "bg-primary text-white" : ""
              }`
            }
          >
            <div className="indicator">
              <BsCart3 className="h-6 w-6" />
              <span className="badge badge-sm badge-primary indicator-item">
                8
              </span>
            </div>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
