import Footer from "../components/Footer";
import Header from "../components/Header";
import v_logo from "../assets/venturage_logo.jpeg";
import freelance from "../assets/30324.jpg";

function About() {
  return (
    <>
      <Header />
      <div className='max-w-5xl mx-auto'>
        <div className='mb-6'>
          <h2 className='text-xl md:text-3xl mb-4'>About Me</h2>
          <p className='w-3/4'>
            Hi, I'm OkikiJesu Oluwasina. I am a self tought software developer.
            I am passionate about new technologies and solving problems with
            tech. I have faith in my capacity to take on new missions. I am
            meticulous and organized, and I have a wide range of important
            commercial and interpersonal abilities that I have acquired from my
            professional experiences.
          </p>
        </div>
        <div className='mb-6'>
          <h3 className='text-xl md:text-3xl mb-4'>Experience</h3>
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
        <div className='flex justify-between w-1/2'>
          <div>
            <h4 className='text-xl md:text-3xl mb-2'>Skills</h4>
            <ul className='list-disc'>
              <li>Web Programming</li>
              <li>Mobile App Development</li>
            </ul>
          </div>
          <div>
            <h4 className='text-xl md:text-3xl mb-2'>Interest</h4>
            <ul className='list-disc'>
              <li>Movies</li>
              <li>Programming</li>
              <li>IOT</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
