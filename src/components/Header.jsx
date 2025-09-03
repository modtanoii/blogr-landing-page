import { useState, useEffect } from "react";
import Buttons from "./Buttons";
import { footer } from "../data/footer";
import logo from "/src/assets/images/logo.svg";
import Menu from "./Menu";

const Header = () => {
  const [navLinks, setNavLinks] = useState(footer);
  const [isOpen, setIsOpen] = useState(false);
  const [width, setWidth] = useState(768);

  useEffect(() => {
    if (window.innerWidth > width) {
      setIsOpen(true)
    }
  }, []);

  return (
    <>
      <header className="absolute p-5 flex items-center justify-between w-full">
        <div className='mr-5'>
          <img src={logo} alt="blogr logo" />
        </div>
        {isOpen && (
          <>
            <nav className='absolute py-[50px] top-[30px] left-1/2 transform -translate-x-1/2 w-[300px] bg-white mx-auto rounded-[5px] shadow-[0_5px_5px_rgba(0,0,0,0.15)] md:relative md:bg-transparent md:shadow-none md:p-0 md:left-0 md:top-0 md:translate-x-0 md:flex md:mx-0 md:w-full md:justify-between'>
              <ul className='flex flex-col items-center justify-center md:flex-row'>
                {navLinks.map(({ id, title, links }) => (
                  <li className='my-[10px] md:text-white md:mx-[10px]' key={id}>{title}</li>
                ))}
              </ul>
              <Buttons />
            </nav>
          </>
        )}
        <Menu isOpen={isOpen} setIsOpen={setIsOpen} />
      </header>
    </>
  );
};

export default Header;
