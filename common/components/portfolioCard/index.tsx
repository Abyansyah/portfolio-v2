import { TiArrowRight } from 'react-icons/ti';
import { FC } from 'react';
import { Slice } from 'ahmad/common/helpers';
import Image from 'next/image';

type ProjectProps = {
  source?: any;
  title?: string;
  desc?: string;
  onclick: () => void;
};

const ProjectCard: FC<ProjectProps> = ({ source, title, desc, onclick }) => {
  return (
    <div onClick={() => onclick()} className="border-2 p-4 shadow-sm lg:hover:shadow-md rounded-lg w-[343.2px] lg:hover:scale-[102%] dark:bg-neutral-800 dark:border-neutral-800 cursor-pointer transition-all duration-300 ease-in-out">
      <Image className="w-full  object-contain rounded-xl duration-700 ease-in-out scale-100 blur-0 grayscale-0" src={source} width={2560} height={1440} alt="Img" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
      <div className="mt-4 flex flex-col gap-2">
        <h3 className="text-xl font-poppins dark:text-neutral-200 font-semibold">{title}</h3>
        <Slice content={desc} className="text-base dark:text-neutral-300" slice={70} />
        <button className="flex items-center text-gray-500 dark:text-neutral-500">
          More <TiArrowRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
