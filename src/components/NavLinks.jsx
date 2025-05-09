// import { NavLink } from "react-router-dom";

// const links = [
//   { id: 1, url: "/", text: "home" },
//   { id: 2, url: "about", text: "about" },
//   { id: 3, url: "products", text: "products" },
//   { id: 4, url: "cart", text: "cart" },
//   { id: 5, url: "checkout", text: "checkout" },
//   { id: 6, url: "orders", text: "orders" },
// ];

// const NavLinks = () => {
//   return (
//     <>
//       {links.map((link) => {
//         const { id, url, text } = link;
//         return (
//           <li key={id}>
//             <NavLink className="capitalize" to={url}>
//               {text}
//             </NavLink>
//           </li>
//         );
//       })}
//     </>
//   );
// };

// export default NavLinks;

import { NavLink } from "react-router-dom";

const links = [
  { id: 1, url: "/", text: "home" },
  { id: 2, url: "about", text: "about" },
  { id: 3, url: "products", text: "products" },
  { id: 4, url: "cart", text: "cart" },
  { id: 5, url: "checkout", text: "checkout" },
  { id: 6, url: "orders", text: "orders" },
];

const NavLinks = () => {
  return (
    <>
      {links.map(({ id, url, text }) => (
        <li key={id}>
          <NavLink
            to={url}
            className={({ isActive }) =>
              `capitalize px-3 py-2 transition duration-200 ${
                isActive
                  ? "text-primary font-bold border-b-2 border-primary"
                  : "text-base-content"
              }`
            }
          >
            {text}
          </NavLink>
        </li>
      ))}
    </>
  );
};

export default NavLinks;
