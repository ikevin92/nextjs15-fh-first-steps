// "use client";

import { HomeIcon } from "@primer/octicons-react";
import Link from "next/link";
import { ActiveLink } from "../active-link/ActiveLink";

// const temporalAsync = async () => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Hello World");
//     }, 5000);
//   });
// };

const navItems = [
  { text: "About", path: "/about" },
  { text: "Pricing", path: "/pricing" },
  { text: "Contact", path: "/contact" },
];

export const Navbar = async () => {
  // const message = await temporalAsync();
  // console.log(message);

  return (
    <nav className="flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded">
      <Link
        href={"/"}
        className="flex items-center gap-2"
      >
        <HomeIcon size={16} />
        <span>Home</span>
      </Link>

      <div className="flex flex-1"></div>

      {navItems.map((navItem) => (
        <ActiveLink
          key={navItem.path}
          {...navItem}
        />
      ))}
    </nav>
  );
};
