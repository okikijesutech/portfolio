import { useState } from "react";
import { XMarkIcon, Bars3BottomRightIcon } from "./icons";

function Header() {
  const [mobileNav, setMobileNav] = useState(false);

  const handletoggle = () => {
    setMobileNav(!mobileNav);
  };

  return (
    <>
      <div className='p-4 hidden md:flex justify-around'>
        <p>OKIKIJESU</p>
        <ul className='flex gap-4'>
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
      </div>
      <div className='flex md:hidden'>
        <p>OKIKIJESU</p>
        {mobileNav ? (
          <span onClick={handletoggle}>
            <XMarkIcon />
          </span>
        ) : (
          <span onClick={handletoggle}>
            <Bars3BottomRightIcon />
          </span>
        )}
        {mobileNav && (
          <ul>
            <li>
              <a href='/'>Home</a>
            </li>
            <li>
              <a href='#about'>About</a>
            </li>
            <li>
              <a href='#project'>Project</a>
            </li>
          </ul>
        )}
      </div>
    </>
  );
}

export default Header;
