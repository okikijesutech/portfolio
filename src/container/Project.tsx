import { useState } from "react";
import { Projects } from "../constants/constants";

const Project = () => {
  const [filter, setFilter] = useState("");
  const handleFormat = (filter: any) => {
    setFilter(filter);
  };

  const filteredProjects = filter
    ? Projects.filter((project) => project.type.includes(filter))
    : Projects;
  return (
    <div
      id='projects'
      className='dark:bg-slate-100 text-white dark:text-black px-6 mb-[60px] flex flex-col justify-center items-center'
    >
      <div className='flex flex-col mb-6'>
        <div
          className='bg-gradient-to-r from-[#F46737]  to-[#945DD6] h-1 ml-0
         w-8 mx-auto mb-2'
        ></div>
        <h4 className='text-2xl md:text-3xl font-bold'>Projects</h4>
      </div>
      <div className='mb-4 flex'>
        <button
          className='mr-[10px] px-3 py-2 rounded-md bg-white text-black dark:bg-black dark:text-white'
          onClick={() => handleFormat("frontend")}
        >
          Front-end projects
        </button>
        <button
          className='mr-[10px] px-3 py-2 rounded-md bg-white text-black dark:bg-black dark:text-white'
          onClick={() => handleFormat("mobile")}
        >
          Mobile projects
        </button>
        <button
          className='mr-[10px] px-3 py-2 rounded-md bg-white text-black dark:bg-black dark:text-white'
          onClick={() => handleFormat("backend")}
        >
          Back-end projects
        </button>
      </div>
      <div className='grid gap-6 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 md:gap-8 place-items-center'>
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className='bg-gray-800 w-[350px] rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300 ease-in-out text-white'
          >
            <div className='relative'>
              <img
                src={project.img}
                alt='project_images'
                className='w-full h-56 object-cover object-center'
              />
            </div>
            <div className='p-6'>
              <h3 className='text-xl md:text-2xl lg:text-2xl xl:text-2xl font-semibold mb-2'>
                {project.name}
              </h3>
              <p>{project.desc}</p>
              <h4 className='text-lg font-semibold mt-2 mb-2'>Stack</h4>
              <div className='flex space-x-2 mb-4'>
                {project.tag.map((tag, index) => (
                  <p key={index} className='text-gray-400'>
                    {tag}
                  </p>
                ))}
              </div>
              <div className='flex flex-col sm:flex-row sm:justify-between'>
                <a
                  href={project.visit}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded mb-2 sm:mb-0'
                >
                  Visit
                </a>
                <a
                  href={project.source}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 rounded'
                >
                  Source
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
