import { useState } from "react";
import { XMarkIcon, Bars3BottomRightIcon } from "./icons";
import ThemeSwitcher from "./ThemeSwitcher";

const Menu = () => (
  <>
    <li>
      <a href='/'>Home</a>
    </li>
    <li>
      <a href='#about'>About</a>
    </li>
    <li>
      <a href='#projects'>Project</a>
    </li>
    <li>
      <a href='#expertise'>Technologies</a>
    </li>
    {/* <li>
      <a href='#contact'>Contact</a>
    </li> */}
  </>
);

function Header() {
  const [mobileNav, setMobileNav] = useState(false);

  const handletoggle = () => {
    setMobileNav(!mobileNav);
  };

  return (
    <>
      <div className='max-w-7xl mx-auto p-6 bg-[#242424] hidden md:flex justify-between z-10'>
        <div className='flex justify-center items-start'>
          <p>ÒkìkíJésù</p>
        </div>

        <ul className='flex items-center justify-center gap-6'>
          <Menu />
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
              <Menu />
            </ul>
          )}
        </div>
      </nav>
    </>
  );
}

export default Header;
