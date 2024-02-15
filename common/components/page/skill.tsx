import { IoChatbubbles, IoClose } from 'react-icons/io5';
import { PiCursorClickFill } from 'react-icons/pi';
import { RiTeamFill } from 'react-icons/ri';
import { FaCode, FaArrowRightArrowLeft } from 'react-icons/fa6';
import { MdDesignServices } from 'react-icons/md';
import SkillCard from '../skillCard';
import { useRef, useState } from 'react';
import Modal from '../modalIcon';
import Image from 'next/image';
import { iconData } from 'ahmad/common/constant/icon';
import { motion } from 'framer-motion';
import { capitalizeFirstLetter } from 'ahmad/common/helpers';

const SkillSection = () => {
  const [activeTab, setActiveTab] = useState<string>('coding');
  const [showModal, setShowModal] = useState<boolean>(false);
  const [modalData, setModalData] = useState<any[]>([]);
  const [showTooltip, setShowTooltip] = useState(null);
  const parentsRef: any = useRef();

  const handleImageHover = (index: any) => {
    setShowTooltip(index);
  };

  const handleImageLeave = () => {
    setShowTooltip(null);
  };

  const handleSkillCardClick = (category: string) => {
    const filteredData = iconData.filter((item) => item.cat === category);
    setModalData(filteredData);
    setShowModal(true);
  };

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <>
      <section id="skills" className="flex justify-center items-center h-svh lg:mt-0 lg:mb-0 dark:bg-[#191919] ">
        <div className="container px-4 lg:px-72">
          <h1 className="font-bold text-3xl text-center text-gray1 font-poppins dark:text-white">Skills</h1>
          <h2 className="text-center mt-1 font-poppins">My technical level</h2>
          <div className=" flex flex-col mt-10 gap-y-10 lg:gap-x-16 lg:mt-16">
            <div className="flex justify-center items-center w-full mb-8 space-x-4">
              <button
                onClick={() => handleTabChange('coding')}
                className={`border dark:border-neutral-800 py-3 px-6 rounded-lg  hover:text-black ${
                  activeTab === 'coding' ? 'bg-black text-white dark:bg-white dark:text-black dark:border-black ' : ''
                } hover:border-black  dark:hover:border-neutral-700  dark:bg-neutral-700  hover:bg-transparent dark:hover:bg-white dark:hover:text-black transition-all duration-300 ease-in-out font-poppins`}
              >
                Coding Skills
              </button>
              <button
                onClick={() => handleTabChange('softskill')}
                className={`border dark:border-neutral-800 py-3 px-6 rounded-lg  hover:text-black ${
                  activeTab === 'softskill' ? 'bg-black text-white dark:bg-white dark:text-black dark:border-black ' : 'text-gray-400'
                } hover:border-black dark:hover:border-neutral-700  dark:bg-neutral-700 hover:bg-transparent dark:hover:bg-white dark:hover:text-black transition-all duration-300 ease-in-out font-poppins`}
              >
                Soft Skills
              </button>
            </div>
            <div className="flex justify-center items-center w-full lg:mt-4" data-aos="fade-up">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-10 lg:w-[850px]">
                {activeTab === 'coding' && (
                  <>
                    <SkillCard
                      onclick={() => handleSkillCardClick('frontend')}
                      icon={<PiCursorClickFill size={32} />}
                      title="Frontend Development"
                      tooltip="Stack Frontend"
                      description="I bring ideas to life in the browser, coding from scratch."
                    />
                    <SkillCard onclick={() => handleSkillCardClick('backend')} icon={<FaCode size={32} />} title="Backend Development" tooltip="Stack Backed" description="Building powerful server-side systems, coding from scratch." />
                    <SkillCard onclick={() => handleSkillCardClick('UI/UX')} icon={<MdDesignServices size={32} />} title="UI/UX Designer" tooltip="Stack UI/UX" description="I bring ideas to life in the browser, coding from scratch." />
                  </>
                )}
                {activeTab === 'softskill' && (
                  <>
                    <SkillCard icon={<IoChatbubbles size={32} />} title="Effective Communication" description="Effective exchange of information and ideas" />
                    <SkillCard icon={<RiTeamFill size={32} />} title="Smart Collaboration" description="Working effectively in a team environment" />
                    <SkillCard icon={<FaArrowRightArrowLeft size={32} />} title="Easy Adaptability" description="Flexibility to embrace change and new technologies" />
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
        <Modal isOpen={showModal} onClose={() => setShowModal(false)} parentsRef={parentsRef}>
          <div className="rounded-xl w-[100%] flex flex-col bg-white dark:bg-neutral-800 text-paletteText-primary lg:w-[528px] gap-y-4">
            <div className="border-b-2">
              <div className="flex justify-between items-center p-6">
                <h2 className="text-xl font-poppins font-semibold">Stack {capitalizeFirstLetter(modalData[0]?.cat)}</h2>
                <IoClose size={26} onClick={() => setShowModal(!showModal)} className="cursor-pointer" />
              </div>
            </div>
            <div className="p-6">
              <div className="flex justify-between flex-wrap gap-y-6 lg:gap-x-10">
                {modalData?.map((item, index) => (
                  <motion.div
                    drag
                    dragSnapToOrigin
                    key={index}
                    onMouseEnter={() => handleImageHover(index)}
                    onMouseLeave={handleImageLeave}
                    className="group bg-white dark:bg-transparent rounded-full w-16 h-16 flex justify-center relative items-center cursor-pointer z-50"
                  >
                    <Image
                      draggable={false}
                      src={item.img}
                      width={60}
                      height={60}
                      alt="gambar"
                      className="w-12 h-12 group absolute"
                      style={{
                        maxWidth: '100%',
                        height: 'auto',
                      }}
                    />{' '}
                    {showTooltip === index && <span className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs font-poppins p-2 rounded">✨{item.name}</span>}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </Modal>
      </section>
    </>
  );
};

export default SkillSection;
