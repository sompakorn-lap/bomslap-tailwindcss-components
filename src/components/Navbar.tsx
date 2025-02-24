import { Icon } from "@iconify/react";
import { Link } from "@tanstack/react-router";
import { useState } from "react";

function Navbar() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-red-500">
      <div className="relative container mx-auto flex flex-col md:flex-row justify-between p-2">
        <Link to="/">
          <h1>Logo</h1>
        </Link>

        <ul className={`${isMenuOpen ? "flex" : "hidden" } flex-col md:flex-row gap-x-8`}>
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

        <button
            className="absolute right-0 md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Icon icon="mdi:menu" />
        </button>
      </div>
    </header>
  );
}

export default Navbar;
