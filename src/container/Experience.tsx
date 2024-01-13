import v_logo from "../assets/venturage_logo.jpeg";
import freelance from "../assets/30324.jpg";

const Experience = () => {
  return (
    <div className='mb-[60px]'>
      <div className='flex flex-col mb-6 justify-center mx-[600px]'>
        <div
          className='bg-gradient-to-r from-[#F46737]  to-[#945DD6] h-1 ml-0
         w-8 mx-auto mb-2'
        ></div>
        <h4 className='text-2xl md:text-3xl font-bold'>Experience</h4>
      </div>
      <div className='flex gap-3'>
        <img
          src={v_logo}
          alt='venturage technologies logo'
          className='w-[50px]'
        />
        <div>
          <h4>
            Full-stack Engineer @{" "}
            <a
              href='https://venturage.com/'
              target='_blank'
              className='text-blue-700'
            >
              Venturage
            </a>
          </h4>
          <p>Aug 2023 - Jan 2024</p>
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
  );
};

export default Experience;
