const Skills = () => {
  return (
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
  );
};

export default Skills;
