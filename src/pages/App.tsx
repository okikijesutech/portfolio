import Header from "../components/Header";
import Footer from "../components/Footer";
import HeaderImage from "../assets/header.png";
import x from "../assets/x.svg";
import github from "../assets/github.svg";
import linkedin from "../assets/linkedin.svg";
import tch from "../assets/tch.png";
import { TypeAnimation } from "react-type-animation";
import Card from "../components/FlipCard";
import frontend from "../assets/frontend.jpg";

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
    <div className='dark:bg-slate-100 text-white dark:text-black'>
      <Header />
      <div className='max-w-5xl mx-auto p-4'>
        <div className='flex flex-col md:flex-row-reverse justify-evenly items-center mb-6'>
          <img src={HeaderImage} alt='' className='w-[400px]' />
          <div>
            <h1 className='font-bold text-xl md:text-3xl text-center md:text-left mb-2'>
              ÒkìkíJésù Oluwasina
            </h1>
            <p className='text-lg mb-4 text-center md:text-left'>
              Fullstack Developer
            </p>
            <TypeAnimation
              sequence={[
                "Front-end Development",
                1000,
                "Back-end Development",
                1000,
                "Mobile app development",
                1000,
              ]}
              wrapper='span'
              speed={50}
              style={{ fontSize: "1.5em", display: "inline-block" }}
              repeat={Infinity}
            />
            <div className='flex gap-4 mt-4 '>
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
          <div className='flex justify-evenly items-center'>
            <Card
              frontImage={frontend}
              frontText='Front-End Development'
              backContent={{
                heading: "Front-End Development",
                paragraph:
                  "Passionate about UI/UX. Over 4 years of development experience in HTML, CSS, JS, React and NextJS frameworks",
                link: "",
              }}
            />
            <Card
              frontImage={frontend}
              frontText='Back-end Development'
              backContent={{
                heading: "Back-end Development",
                paragraph:
                  "Experienced in both functional and OOP: JavaScript, TypeScript. Work With Express and Django frameworks for serverside development",
                link: "",
              }}
            />
            <Card
              frontImage={frontend}
              frontText='Mobile App Development'
              backContent={{
                heading: "Mobile App Development",
                paragraph:
                  "Skilled in developing hybrid mobile apps and cross-platform solutions using the Flutter framework.",
                link: "",
              }}
            />
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
    </div>
  );
}

export default App;
