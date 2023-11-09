import Header from "../components/Header";
import Footer from "../components/Footer";
import HeaderImage from "../assets/header.png";
import x from "../assets/x.svg";
import github from "../assets/github.svg";
import linkedin from "../assets/linkedin.svg";

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

function App() {
  return (
    <>
      <Header />
      <div className='max-w-5xl mx-auto p-4'>
        <div className='flex flex-row-reverse justify-evenly items-center'>
          <img src={HeaderImage} alt='' className='w-[400px]' />
          <div>
            <h1 className='font-bold text-xl md:text-3xl mb-2'>
              OkikiJesu Oluwasina
            </h1>
            <p className='text-lg mb-4'>Fullstack Developer</p>
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
        <div>
          <h4>Projects</h4>
        </div>
        <div>
          <h4>About</h4>
          <p>
            GM, I'm Max. I enjoy building dynamic, creative products from start
            to finish. Focused on developing intuitive experiences that
            constantly grow and improve based on user metrics. Always shipping.
          </p>
        </div>
        <div>
          <h4>Work Experience</h4>

          <table>
            <tr>
              <td>2022-2023</td>
              <td>Freelance</td>
            </tr>
            <tr>
              <td>2023-present</td>
              <td>Fullstack Engineer</td>
            </tr>
          </table>
        </div>
        <div>
          <h4>Side projects</h4>

          <table>
            <tr>
              <td>ongoing</td>
              <td>Agro-net</td>
            </tr>
            <tr>
              <td>2022</td>
              <td>Recounter</td>
            </tr>
          </table>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
