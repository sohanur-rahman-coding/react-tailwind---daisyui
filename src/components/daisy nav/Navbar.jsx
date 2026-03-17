import { Link, Menu, X } from "lucide-react";
import React, { useState } from "react";
import Route from "./Route";
const navItems = [
  {
    id: 1,
    name: "Home",
    path: "/",
    link: "home",
  },
  {
    id: 2,
    name: "About",
    path: "/about",
    link: "about",
  },
  {
    id: 3,
    name: "Services",
    path: "/services",
    link: "services",
  },
  {
    id: 4,
    name: "Blog",
    path: "/blog",
    link: "blog",
  },
  {
    id: 5,
    name: "Contact",
    path: "/contact",
    link: "contact",
  },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const links = navItems.map((route) => (
    <Route key={route.id} route={route}></Route>
  ));
  return (
    <nav className="flex justify-between mx-9">
      <span className="flex    gap-2 items-center " onClick={() => setOpen(!open)}>
        {open ? (
          <X className="md:hidden"></X>
        ) : (
          <Menu className="md:hidden"></Menu>
        )}
       <ul className={`md:hidden absolute duration-1000 bg-gray-400 rounded-sm text-black ${open ? 'top-8' : '-top-40'}`}>
        {links}
       </ul>

        <h3>Daisy UI</h3>
      </span>
      <ul className=" hidden md:flex gap-10">{links}</ul>
      <button>button</button>
    </nav>
  );
};

export default Navbar;
