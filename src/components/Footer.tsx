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

function Footer() {
  return (
    <div className='flex flex-col gap-4 mt-4 mb-8 items-center justify-center'>
      <div className='flex gap-4'>
        {socials.map((social) => (
          <a
            href={social.link}
            target='_blank'
            className='flex gap-2 rounded bg-slate-200 px-2 py-1 text-black'
          >
            <img src={social.logo} alt='' />
          </a>
        ))}
      </div>
      <h4>
        Made By{" "}
        <a
          href='https://github.com/okikijesutech'
          target='_blank'
          className='text-blue-700'
        >
          OkikiJesu
        </a>
      </h4>
      <h4 className='my-2'>All Rights Reserved</h4>
    </div>
  );
}

export default Footer;
