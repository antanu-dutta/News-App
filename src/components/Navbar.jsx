import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { AlgoliaSearch } from "./Search";
import { Link } from "react-router-dom";

function NavList() {
  const categories = [
    { path: "/", name: "General" },
    { path: "/business", name: "Business" },
    { path: "/entertainment", name: "Entertainment" },
    { path: "/health", name: "Health" },
    { path: "/science", name: "Science" },
    { path: "/sports", name: "Sports" },
    { path: "/technology", name: "Technology" },
  ];
  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {categories.map((category) => (
        <Typography
          key={category.name}
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-medium"
        >
          <Link
            to={category.path}
            className="flex text-lg items-center hover:text-blue-500 transition-colors"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            {category.name}
          </Link>
        </Typography>
      ))}
    </ul>
  );
}

export function SimpleNavbar() {
  const [openNav, setOpenNav] = React.useState(false);

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <div className="fixed w-full z-[1000] ">
      <Navbar className="mx-auto max-w-screen-xl px-6 py-3 shadow-2xl">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Link to="/">
            <Typography
              as="a"
              href="#"
              variant="h6"
              className="mr-4 cursor-pointer py-1.5"
            >
              NEWS
            </Typography>
          </Link>

          <div className="hidden lg:block">
            <NavList />
          </div>
          <div className="hidden lg:block">
            <AlgoliaSearch />
          </div>
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <XMarkIcon className="h-6 w-6" strokeWidth={2} />
            ) : (
              <Bars3Icon className="h-6 w-6" strokeWidth={2} />
            )}
          </IconButton>
        </div>
        <Collapse open={openNav}>
          <NavList />
        </Collapse>
      </Navbar>
    </div>
  );
}
