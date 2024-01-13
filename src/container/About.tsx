const About = () => {
  return (
    <div
      id='about'
      className='mb-[60px] bg-gray-800 p-6 rounded-md flex flex-col items-center justify-center'
    >
      <div className='flex flex-col mb-6'>
        <div
          className='bg-gradient-to-r from-[#F46737]  to-[#945DD6] h-1 ml-0
         w-8 mx-auto mb-2'
        ></div>
        <h4 className='text-2xl md:text-3xl font-bold'>About Me</h4>
      </div>
      <p className='w-3/4 leading-[32px]  text-gray-600'>
        Hi, I'm OkikiJesu Oluwasina. I am a self tought software developer. I am
        passionate about new technologies and solving problems with tech. I have
        faith in my capacity to take on new missions. I am meticulous and
        organized, and I have a wide range of important commercial and
        interpersonal abilities that I have acquired from my professional
        experiences.
      </p>
    </div>
  );
};

export default About;
