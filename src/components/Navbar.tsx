import { Icon } from "@iconify/react";
import { Link } from "@tanstack/react-router";
import { useState } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-red-500">
      <div className="mx-auto container flex flex-wrap justify-between">
        <Link className="grow" to="/">Logo</Link>
        <button className="grow-0 md:hidden">
          <Icon icon="mdi:menu" width={30} height={30}/>
        </button>
        <div className="flex basis-full grow md:basis-0 md:grow-0">
          <ul className="block md:flex">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
