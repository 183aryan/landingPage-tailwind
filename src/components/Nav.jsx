import { headerLogo } from "../assets/images";
// import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";
import { useState } from "react";
import { PanelTopClose, PanelTopOpen } from "lucide-react";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleHamburger = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container flex-wrap">
        <a href="/">
          <img src={headerLogo} alt="Logo" height={29} width={130} />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                id={item.label}
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray"
              ></a>
              {item.label}
            </li>
          ))}
        </ul>
        <div className="flex justify-end leading-normal font-medium font-montserrat max-wide:mr-24 max-lg:hidden">
          <a href="/">Sign in</a>
          <span>/</span>
          <a href="/">Register</a>
        </div>
        <div
          id="hamburgerClick"
          className="lg:hidden justify-end cursor-pointer"
          onClick={handleHamburger}
        >
          {isOpen ? (
            // <X />
            <PanelTopClose size={48} color="#f36130" strokeWidth={1} absoluteStrokeWidth />
            // <Hamburger direction="right" />
          ) : (
            // <img src={hamburger} alt="hamburger" width={24} height={24} />
            <PanelTopOpen size={48} color="#f36130" strokeWidth={1} absoluteStrokeWidth />
            // <Hamburger direction="left" />
          )}
        </div>
        {isOpen && (
            <ul className="flex flex-col justify-center items-center basis-full">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="font-montserrat leading-normal text-lg text-slate-gray"
                  ></a>
                  {item.label}
                </li>
              ))}
            </ul>
        )}
      </nav>
    </header>
  );
};

export default Nav;
