import { Navbar, Footer } from "./components";
import {
  About,
  Contact,
  Experience,
  Header,
  Project,
  Technologies,
} from "./container";

function App() {
  return (
    <div className='dark:bg-slate-100 text-white dark:text-black'>
      <Navbar />
      <div className='max-w-7xl mx-auto p-4'>
        <Header />
        <About />
        <Technologies />
        <Project />
        <Experience />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
