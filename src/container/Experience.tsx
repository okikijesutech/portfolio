import v_logo from "../assets/venturage_logo.jpeg";
import freelance from "../assets/30324.jpg";

const Experience = () => {
  return (
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
