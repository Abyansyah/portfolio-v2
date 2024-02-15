import React from 'react';

const SkillCard = ({ icon, title, description, tooltip, onclick }: any) => {
  return (
    <div
      onClick={onclick}
      className="group z-10 relative sm:flex flex-shrink-0 md:block flex-row items-center rounded-xl md:rounded-2xl p-6 space-x-0 sm:space-x-6 md:space-x-0 w-full h-full md:h-[250px] md:w-[250px] border bg-white dark:bg-neutral-800 text-black   hover:border-black dark:border-neutral-800 dark:text-neutral-300 cursor-pointer transition-all duration-300 ease-in-out"
    >
      {icon}
      <div className="md:absolute bottom-6 left-0">
        <h4 className="text-base font-normal sm:text-xl md:text-lg xl:text-xl font-poppins sm:font-medium pr-2  md:px-6 mt-2 md:mb-2">{title}</h4>
        <p className="hidden md:block text-sm font-raleway text-neutral-500 dark:text-neutral-400 font-poppins font-medium md:px-6 md:line-clamp-none line-clamp-2">{description}</p>
      </div>
      {tooltip && <span className="absolute -top-4 scale-0 transition-all rounded bg-gray-800 p-2 text-xs font-poppins text-white group-hover:scale-100">✨ {tooltip}</span>}
    </div>
  );
};

export default SkillCard;
