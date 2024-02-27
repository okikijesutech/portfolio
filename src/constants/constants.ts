import tch from "../assets/tch.png";
import g from "../assets/g.png";
import hoo from "../assets/hoo.png";
import gpt from "../assets/gpt.png";

const Projects = [
  {
    name: "Gericht Resturant",
    desc: "This is a react project, alot of react technologies were used",
    img: g,
    tag: ["React"],
    type: "frontend",
    source: "https://github.com/okikijesutech/G_resturant",
    visit: "https://g-resturant.vercel.app/",
    id: "0",
  },
  {
    name: "Blog Site",
    desc: "This is a react project, alot of react technologies were used",
    img: tch,
    type: "frontend",
    tag: ["Next.js", "Prisma", "Node.js", "TailWindCss"],
    source: "",
    visit: "",
    id: "1",
  },
  {
    name: "Hoobank",
    desc: "This is a react project, alot of react technologies were used",
    img: hoo,
    tag: ["React", "Tailwindcss"],
    source: "https://github.com/okikijesutech/Hoobank",
    visit: "https://hoobank-snowy.vercel.app/",
    id: "2",
    type: "frontend",
  },
  {
    name: "GPT-Parody",
    desc: "This is a react project, alot of react technologies were used",
    img: gpt,
    tag: ["React"],
    source: "https://github.com/okikijesutech/gpt",
    visit: "https://gpt-steel-xi.vercel.app/",
    id: "3",
    type: "frontend",
  },
  {
    name: "Blog Site",
    desc: "This is a react project, the backend was built with express",
    img: tch,
    type: "backend",
    tag: ["Next.js", "Prisma", "Node.js", "TailWindCss"],
    source: "",
    visit: "",
    id: "4",
  },
  {
    name: "INBOX",
    desc: "This is an express server, that makes use of jwt, prisma, typescript etc for its development",
    img: tch,
    type: "backend",
    tag: ["Express", "Prisma", "Node.js"],
    source: "",
    visit: "",
    id: "5",
  },
  {
    name: "IN BOX Mobile app",
    desc: "This is a react project, alot of react technologies were used",
    img: tch,
    type: "mobile",
    tag: ["React Native", "Axios", "Node.js", "TailWindCss"],
    source: "",
    visit: "",
    id: "6",
  },
];

export { Projects };
