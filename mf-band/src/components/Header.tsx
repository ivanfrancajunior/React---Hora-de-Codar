import { useEffect, useState } from "react";
import Logo from "./Logo";
import MenuItem from "./MenuItem";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  useEffect(() => {
    function handleResize() {
      const windowSize = window.innerWidth;
      if (windowSize > 768) {
        setIsOpen(false);
        setIsSubMenuOpen(false);
      }
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isOpen, isSubMenuOpen]);
  return (
    <header className="text-zinc-100 ">
      <nav className="sticky top-0 bg-gradient-to-r from-[#d8a657] to-[#e5c07b] flex px-5">
        <Logo />
        <div className="block md:hidden ml-auto pr-4 my-auto cursor-pointer">
          <span
            className="material-symbols-outlined text-3xl transtion duration-300 ease-in-out hover:text-rose-500"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "close" : "menu"}
          </span>
        </div>
        <div
          className={
            isOpen
              ? "absolute md:hidden bg-gradient-to-r from-[#d8a657] to-[#e5c07b] w-full  left-0 top-[62px]"
              : "hidden"
          }
        >
          <div className="relative flex h-full cursor-pointer items-center justify-center p-4 font-bold hover:text-rose-500 transition-colors hover:bg-white/10 ">
            <span>Home</span>
          </div>
          <div className="relative flex h-full cursor-pointer items-center justify-center p-4 font-bold hover:text-rose-500 transition-colors hover:bg-white/10 ">
            <span>Lineup</span>
          </div>
          <div className=" relative flex flex-col h-full cursor-pointer items-center justify-center hover:text-rose-500 transition-colors hover:bg-white/10 ">
            <div
              className="p-4 text-center font-bold "
              onClick={() => setIsSubMenuOpen(!isSubMenuOpen)}
            >
              Tickets
            </div>

            <div
              className={isSubMenuOpen ? "flex md:hidden flex-col" : "hidden"}
            >
              <div className="p-4 text-center font-bold">
                <span className="text-zinc-100 hover:text-rose-500">
                  Single Day Ticket
                </span>
              </div>
              <div className="p-4 text-center font-bold">
                <span className="text-zinc-100 hover:text-rose-500">
                  7 Days Ticket
                </span>
              </div>
            </div>
          </div>
          <div className="relative flex h-full cursor-pointer items-center justify-center p-4 font-bold hover:text-rose-500 transition-colors hover:bg-white/10 ">
            <span>Support</span>
          </div>
        </div>
        <div className="hidden md:flex flex-1 items-center justify-end">
          <ul className="flex gap-2 h-full">
            <MenuItem label="Home" />
            <MenuItem label="Lineup" />

            <MenuItem label="Tickets">
              <div
                className="hidden group-hover:block bg-[#e5c07b] absolute
               top-full  right-0 whitespace-nowrap rounded-b-md text-right"
              >
                <div className="font-bold p-4 hover:bg-white/5 hover:text-rose-500 ease-in-out duration-200 cursor-pointer">
                  <span className="text-zinc-100 hover:text-rose-500">
                    {" "}
                    Single Day Ticket
                  </span>
                </div>
                <div className="font-bold p-4 hover:bg-white/5 hover:text-rose-500 ease-in-out duration-200 cursor-pointer">
                  <span className="text-zinc-100 hover:text-rose-500">
                    {" "}
                    7 days Ticket
                  </span>
                </div>
              </div>
            </MenuItem>

            <MenuItem label="Support" />
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
