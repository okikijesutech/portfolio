import { useState } from "react";
import { XMarkIcon, Bars3BottomRightIcon } from "./icons";
import ThemeSwitcher from "./ThemeSwitcher";

function Header() {
  const [mobileNav, setMobileNav] = useState(false);

  const handletoggle = () => {
    setMobileNav(!mobileNav);
  };

  return (
    <>
      <div className='p-4 hidden md:flex justify-around'>
        <p>ÒkìkíJésù</p>
        <ThemeSwitcher />
        <ul className='flex gap-6'>
          <li>
            <a
              href='/'
              className={
                location.pathname === "/" ? "pb-2 border-b border-white" : ""
              }
            >
              Home
            </a>
          </li>
          <li>
            <a
              href='/about'
              className={
                location.pathname === "/about"
                  ? "pb-2 border-b border-white"
                  : ""
              }
            >
              About
            </a>
          </li>
          <li>
            <a
              href='/project'
              className={
                location.pathname === "/project"
                  ? "pb-2 border-b border-white"
                  : ""
              }
            >
              Project
            </a>
          </li>
        </ul>
      </div>
      <nav className='flex md:hidden relative items-center justify-between px-2 pt-4'>
        <p>ÒkìkíJésù</p>
        <div>
          {mobileNav ? (
            <span onClick={handletoggle}>
              <XMarkIcon className='w-8' />
            </span>
          ) : (
            <span onClick={handletoggle}>
              <Bars3BottomRightIcon className='w-8' />
            </span>
          )}
          {mobileNav && (
            <ul className='absolute top-10 left-0 right-0 p-4 flex flex-col gap-3 w-full bg-[#242424] z-10'>
              <li>
                <a href='/'>Home</a>
              </li>
              <li>
                <a href='/about'>About</a>
              </li>
              <li>
                <a href='/project'>Project</a>
              </li>
            </ul>
          )}
        </div>
      </nav>
    </>
  );
}

export default Header;
