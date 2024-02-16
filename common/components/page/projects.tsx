import Image from 'next/image';
import Modal from '../modalIcon';
import ProjectCard from '../portfolioCard';
import { project } from 'ahmad/common/constant/project';
import { useState } from 'react';
import { IoClose } from 'react-icons/io5';
import { FaGithub } from 'react-icons/fa';
import { BsBoxArrowUpRight } from 'react-icons/bs';
import { motion } from 'framer-motion';
import Link from 'next/link';

type ModalData = {
  item: {
    name?: string;
    img?: string;
    desc?: string;
    github?: string;
    url?: string;
    tech?: {
      name?: string;
      img?: string;
    }[];
  };
};

const ProjectSection = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [modalData, setModalData] = useState<ModalData | any>(undefined);

  const [showTooltip, setShowTooltip] = useState(null);

  const handleImageHover = (index: any) => {
    setShowTooltip(index);
  };

  const handleImageLeave = () => {
    setShowTooltip(null);
  };

  return (
    <section id="projects" className=" flex justify-center items-center py-14 lg:py-20 lg:h-full lg:mt-0 lg:mb-0">
      <div className="container px-4 lg:px-72 w-full">
        <h1 className="font-bold text-3xl text-center text-gray1 font-poppins dark:text-white">Projects</h1>
        <h2 className="text-center mt-1 font-poppins">Most recent work</h2>
        <div className="flex flex-wrap mt-14 justify-center gap-8" data-aos="fade-up">
          {project.map((item, index) => (
            <>
              <ProjectCard
                key={index}
                onclick={() => {
                  setShowModal(true);
                  setModalData(item);
                }}
                title={item.name}
                source={item.img}
                desc={item.desc}
              />
            </>
          ))}
        </div>
      </div>
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <div className="rounded-xl flex flex-col bg-white dark:bg-neutral-800 text-paletteText-primary md:w-[528px] gap-y-4">
          <div className="border-b-2 dark:border-neutral-600">
            <div className="flex justify-between items-center p-4">
              <h2 className="text-xl font-poppins font-semibold">{modalData?.name}</h2>
              <IoClose size={26} onClick={() => setShowModal(!showModal)} className="cursor-pointer" />
            </div>
          </div>
          <div className="px-4 rounded">
            <div className="flex flex-col gap-5 justify-center">
              <Image
                className="w-full rounded-lg duration-700 ease-in-out scale-100 blur-0 grayscale-0"
                src={modalData?.img}
                width={2560}
                height={1440}
                alt={modalData?.name}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <p className="text-base text-justify text-neutral-600 font-poppins dark:text-neutral-300">{modalData?.desc}</p>
              <div className="flex gap-x-6">
                <Link href={modalData?.github} target="_blank" className="flex items-center gap-x-3">
                  <FaGithub size={22} />
                  <span className="text-sm font-poppins font-semibold text-neutral-600 hover:text-neutral-800 dark:text-neutral-300 dark:hover:text-neutral-100">Source Code</span>
                </Link>
                {modalData?.url && (
                  <>
                    |
                    <Link href={modalData?.url} target="_blank" className="flex items-center justify-center gap-x-3">
                      <BsBoxArrowUpRight size={20} />
                      <span className="text-sm font-poppins font-semibold text-neutral-600 hover:text-neutral-800 dark:text-neutral-300 dark:hover:text-neutral-100">Live Demo</span>
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
          <div className="border-b-2 dark:border-neutral-600"></div>
          <div className="px-4 mb-4">
            <h5 className="font-poppins font-semibold text-lg">Tech Stack :</h5>
            <div className="flex flex-wrap mt-4 gap-y-6 gap-x-4">
              {modalData?.tech?.map((item: any, index: number) => (
                <motion.div
                  drag
                  key={index}
                  dragSnapToOrigin
                  onMouseEnter={() => handleImageHover(index)}
                  onMouseLeave={handleImageLeave}
                  className="group bg-white dark:bg-transparent rounded-full w-16 h-16 flex justify-center relative items-center cursor-pointer"
                >
                  <Image draggable={false} src={item.img} width={2560} height={1440} alt={item?.name}  />{' '}
                  {showTooltip === index && <span className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs font-poppins p-2 rounded">✨{item.name}</span>}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Modal>
    </section>
  );
};

export default ProjectSection;
