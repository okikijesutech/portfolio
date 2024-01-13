import HeaderImage from "../assets/header.png";
import { TypeAnimation } from "react-type-animation";
import { Linkedin, X, Github } from "../components/icons";

const socials = [
  {
    logo: <X />,
    link: "https://twitter.com/okikioluwasina",
  },
  {
    logo: <Github />,
    link: "https://github.com/okikijesutech",
  },
  {
    logo: <Linkedin />,
    link: "https://www.linkedin.com/in/okikijesu/",
  },
];

const Header = () => {
  return (
    <div className='dark:bg-slate-100 text-white dark:text-black flex flex-col-reverse md:flex-row justify-evenly items-center px-6 py-10 '>
      <div className='flex flex-row items-center justify-center md:flex-col mt-6'>
        {socials.map((social, index) => (
          <div
            key={index}
            className='group sm:my-6 md:my-4 mr-6 md:mb-4 transform transition-transform duration-300 ease-in-out'
          >
            <a
              href={social.link}
              target='_blank'
              className='group-hover:border-2 group-hover:border-gray-600 group-hover:scale-110'
            >
              {social.logo}
            </a>
          </div>
        ))}
      </div>
      <div className='flex-1 flex flex-col justify-center items-start mx-6'>
        <span className='font-semibold text-lg md:text-xl mb-2'>
          Welcome, I'm
        </span>
        <h1 className='font-bold text-xl md:text-4xl md:text-left mb-4'>
          ÒkìkíJésù Oluwasina
        </h1>
        <div className='flex-1 flex justify-center items-center'>
          <div style={{ width: "300px" }}>
            <TypeAnimation
              sequence={[
                "Front-end Development",
                1000,
                "Back-end Development",
                1000,
                "Mobile App Development",
                1000,
              ]}
              wrapper='span'
              speed={1}
              style={{ fontSize: "1.2em", display: "inline-block" }}
              repeat={Infinity}
            />
          </div>
        </div>
        <div className='flex flex-col md:flex-row justify-center md:justify-between items-start mt-6'>
          <button className='w-[300px] md:w-auto rounded bg-blue-400 hover:bg-blue-600 px-4 py-2 md:px-8 md:py-4 text-white mb-2 md:mb-0 md:mr-10 transition duration-300 ease-in-out'>
            <a
              download='okikijesu_oluwasina_Resume.pdf'
              href='https://drive.google.com/file/d/1qbg49p_hCkYAWlAYUnN1XP4z5rsr1zs-/view?usp=drive_link'
            >
              View CV
            </a>
          </button>
          {/* <button className='w-full md:w-auto rounded bg-green-400 hover:bg-green-600 px-4 py-2 md:px-6 md:py-2 text-white transition duration-300 ease-in-out'>
            <a href='#contact'>Say Hello</a>
          </button> */}
        </div>
      </div>
      <div className='flex-1 w-[400px] sm:mb-6 md:w-[800px] overflow-hidden rounded-md '>
        <img
          src={HeaderImage}
          alt='Hero_Image'
          className='w-full h-full object-cover'
        />
      </div>
    </div>
  );
};

export default Header;
