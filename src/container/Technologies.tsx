import { DiFirebase, DiReact } from "react-icons/di";

const Technologies = () => {
  return (
    <div
      id='expertise'
      className='flex flex-col justify-center items-center px-6 mb-[60px]'
    >
      <div className='flex flex-col mb-6'>
        <div
          className='bg-gradient-to-r from-[#F46737]  to-[#945DD6] h-1 ml-0
         w-8 mx-auto mb-2'
        ></div>
        <h4 className='text-2xl md:text-3xl font-bold'>Technologies</h4>
      </div>

      <div className='max-w-5xl mx-auto'>
        <p className='text-left lg:text-center leading-[32px] text-gray-600'>
          I have worked with a range of technologies in the world of web
          development, from Back-end to Front-End Development.
        </p>
        <div className='flex flex-col md:flex-row justify-center items-start md:items-center md:space-x-12 mt-8'>
          <div className='flex items-center mb-8 md:mb-0'>
            <div className='bg-blue-500 rounded-full p-4'>
              <DiReact size='3rem' className='text-white' />
            </div>
            <div className='ml-4'>
              <h3 className='text-xl font-semibold'>Front-End</h3>
              <p className='text-gray-600'>
                Experience with <br /> React.js
              </p>
            </div>
          </div>
          <div className='flex items-center mb-8 md:mb-0'>
            <div className='bg-blue-500 rounded-full p-4'>
              <DiReact size='3rem' className='text-white' />
            </div>
            <div className='ml-4'>
              <h3 className='text-xl font-semibold'>Mobile Development</h3>
              <p className='text-gray-600'>
                Experience with <br /> ReactNative.js
              </p>
            </div>
          </div>
          <div className='flex items-center'>
            <div className='bg-yellow-500 rounded-full p-4'>
              <DiFirebase size='3rem' className='text-white' />
            </div>
            <div className='ml-4'>
              <h3 className='text-xl font-semibold'>Back-End</h3>
              <p className='text-gray-600'>
                Experience with <br /> Node.js
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
