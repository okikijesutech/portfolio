import Header from "../components/Header";
import Footer from "../components/Footer";
import HeaderImage from "../assets/header.png";
import tch from "../assets/tch.png";
import { TypeAnimation } from "react-type-animation";
import Card from "../components/FlipCard";
import frontend from "../assets/frontend.jpg";
import v_logo from "../assets/venturage_logo.jpeg";
import freelance from "../assets/30324.jpg";
import { Linkedin, X, Github } from "../components/icons";
import CV from "../assets/okikijesu_oluwasina_Resume.pdf";

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
      <div className='max-w-7xl mx-auto p-4'>
        <div className='flex flex-col md:flex-row-reverse justify-evenly items-center mb-6'>
          <img src={HeaderImage} alt='' className='w-[700px]' />
          <div>
            <h1 className='font-bold text-xl md:text-4xl text-center md:text-left mb-2'>
              ÒkìkíJésù Oluwasina
            </h1>
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
              speed={1}
              style={{ fontSize: "1.2em", display: "inline-block" }}
              repeat={Infinity}
            />
            <div className='flex  gap-2'>
              <a download={CV} href='CV'>
                <button className='flex gap-2 rounded bg-slate-200 px-2 py-1 text-black mt-4'>
                  View CV
                </button>
              </a>
              <button className='flex gap-2 rounded bg-slate-200 px-2 py-1 text-black mt-4'>
                Say Hello
              </button>
            </div>
          </div>
          <div className='flex flex-col'>
            {socials.map((social) => (
              <div className='mb-10'>
                <a href={social.link} target='_blank'>
                  {social.logo}
                </a>
              </div>
            ))}
          </div>
        </div>
        <div id='expertise' className='mb-6'>
          <h4 className='text-xl md:text-3xl text-center mb-4'>My Expertise</h4>
          <div className='flex flex-col md:flex-row justify-evenly items-center'>
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
        <div
          id='about'
          className='mb-6 flex flex-col items-center justify-center'
        >
          <h2 className='text-xl text-center md:text-3xl mb-4'>About Me</h2>
          <p className='w-3/4 leading-loose'>
            Hi, I'm OkikiJesu Oluwasina. I am a self tought software developer.
            I am passionate about new technologies and solving problems with
            tech. I have faith in my capacity to take on new missions. I am
            meticulous and organized, and I have a wide range of important
            commercial and interpersonal abilities that I have acquired from my
            professional experiences.
          </p>
        </div>
        <div className='mb-6'>
          <h3 className='text-xl md:text-3xl text-center mb-4'>Experience</h3>
          <div className='flex gap-3'>
            <img
              src={v_logo}
              alt='venturage technologies logo'
              className='w-[50px]'
            />
            <div>
              <h4>
                Software Engineer Intern @{" "}
                <a
                  href='https://venturage.com/'
                  target='_blank'
                  className='text-blue-700'
                >
                  Venturage
                </a>
              </h4>
              <p>Aug 2023 - Nov 2023</p>
            </div>
          </div>
          <div className='flex gap-3 mt-4'>
            <img
              src={freelance}
              alt='venturage technologies logo'
              className='w-[50px]'
            />
            <div>
              <h4>Software Engineer Freelance</h4>
              <p>May 2022 - Aug 2023</p>
            </div>
          </div>
        </div>
        <div id='projects' className='mb-6'>
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
        <div
          id='skills'
          className='flex flex-col md:flex-row gap-10 justify-center'
        >
          <div>
            <h4 className='text-xl md:text-3xl mb-2'>Skills</h4>
            <ul className='text-lg'>
              <li>Web Programming</li>
              <li>Mobile App Development</li>
            </ul>
          </div>
          <div>
            <h4 className='text-xl md:text-3xl mb-2'>Interest</h4>
            <ul className='text-lg'>
              <li>Movies</li>
              <li>Programming</li>
              <li>IOT</li>
            </ul>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
