import Header from "../components/Header";
import Footer from "../components/Footer";
import HeaderImage from "../assets/header.png";
import x from "../assets/x.svg";
import github from "../assets/github.svg";
import linkedin from "../assets/linkedin.svg";
import react from "../assets/react.svg";
import express from "../assets/express.png";
import native from "../assets/native.png";
import tch from "../assets/tch.png";

const socials = [
  {
    logo: x,
    name: "twitter",
    link: "https://twitter.com/okikioluwasina",
  },
  {
    logo: github,
    name: "Github",
    link: "https://github.com/okikijesutech",
  },
  {
    logo: linkedin,
    name: "Linkedin",
    link: "https://www.linkedin.com/in/okikijesu/",
  },
];
const Projects = [
  {
    img: tch,
    name: "Blog Site",
  },
  {
    img: tch,
    name: "Blog Site",
  },
  {
    img: tch,
    name: "Blog Site",
  },
  {
    img: tch,
    name: "Blog Site",
  },
  {
    img: tch,
    name: "Blog Site",
  },
  {
    img: tch,
    name: "Blog Site",
  },
  {
    img: tch,
    name: "Blog Site",
  },
];

function App() {
  return (
    <>
      <Header />
      <div className='max-w-5xl mx-auto p-4'>
        <div className='flex flex-col md:flex-row-reverse justify-evenly items-center mb-6'>
          <img src={HeaderImage} alt='' className='w-[400px]' />
          <div>
            <h1 className='font-bold text-xl md:text-3xl text-center md:text-left mb-2'>
              OkikiJesu Oluwasina
            </h1>
            <p className='text-lg mb-4 text-center md:text-left'>
              Fullstack Developer
            </p>
            <div className='flex gap-4 '>
              {socials.map((social) => (
                <a
                  href={social.link}
                  target='_blank'
                  className='flex gap-2 rounded bg-slate-200 px-2 py-1 text-black'
                >
                  <img src={social.logo} alt='' />
                  <h4>{social.name}</h4>
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className='mb-6'>
          <h4 className='text-xl md:text-3xl text-center mb-4'>My Expertise</h4>
          <div className='flex flex-col md:flex-row justify-center border border-slate-300 rounded'>
            <div className='md:w-1/3 px-4 py-3'>
              <div className='flex mb-4'>
                <img src={react} alt='' />
                <h4>Front-end Development</h4>
              </div>
              <p className='text-center'>
                Passionate about UI/UX. Over 4 years of development experience
                in HTML, CSS, JS, React and NextJS frameworks
              </p>
            </div>
            <div className='md:w-1/3 border-t border-b md:border-l border-slate-300 md:border-r px-4 py-3'>
              <div className='flex mb-4'>
                <img src={express} alt='' className='w-[75px]' />
                <h4>Backend Development</h4>
              </div>
              <p className='text-center'>
                Experienced in both functional and OOP: JavaScript, TypeScript.
                Work With Express and Django frameworks for serverside
                development
              </p>
            </div>
            <div className='px-4 py-3 md:w-1/3'>
              <div className='flex mb-4'>
                <img src={native} alt='' className='w-[75px]' />
                <h4>Mobile App Development</h4>
              </div>
              <p className='text-center'>
                Skilled in developing hybrid mobile apps and cross-platform
                solutions using the Flutter framework.
              </p>
            </div>
          </div>
        </div>
        <div className='mb-6'>
          <h4 className='text-xl md:text-3xl text-center mb-4'>Projects</h4>
          <div className='flex overflow-x-auto max-w-full'>
            {Projects.map((project, index) => (
              <div
                key={index}
                className='flex-shrink-0 flex flex-col items-center mx-4'
              >
                <a href=''>
                  <img src={project.img} alt='' className='w-48 h-36' />
                </a>
              </div>
            ))}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
