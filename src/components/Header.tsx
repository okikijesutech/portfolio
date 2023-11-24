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
      <div className='max-w-7xl mx-auto p-4 bg-[#242424] hidden md:flex justify-between z-10'>
        <p>ÒkìkíJésù</p>

        <ul className='flex gap-6 mr-60'>
          <li>
            <a
              href='/'
              className={
                location.pathname === "/"
                  ? "pb-2 border-b border-white dark:border-black"
                  : ""
              }
            >
              Home
            </a>
          </li>
          <li>
            <a
              href='#about'
              className={
                location.pathname === "/about"
                  ? "pb-2 border-b border-white dark:border-black"
                  : ""
              }
            >
              About
            </a>
          </li>
          <li>
            <a
              href='#projects'
              className={
                location.pathname === "/project"
                  ? "pb-2 border-b border-white dark:border-black"
                  : ""
              }
            >
              Project
            </a>
          </li>
          <li>
            <a
              href='#expertise'
              className={
                location.pathname === "/project"
                  ? "pb-2 border-b border-white dark:border-black"
                  : ""
              }
            >
              Expertise
            </a>
          </li>
          <li>
            <a
              href='#contact'
              className={
                location.pathname === "/project"
                  ? "pb-2 border-b border-white dark:border-black"
                  : ""
              }
            >
              Contact
            </a>
          </li>
        </ul>
        <ThemeSwitcher />
      </div>
      <nav className='flex md:hidden  relative items-center justify-between px-2 pt-4'>
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
