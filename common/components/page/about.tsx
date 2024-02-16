import Image from 'next/image';
import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="flex justify-center items-center  lg:h-svh lg:mt-0 lg:mb-0 py-14 lg:py-0">
      <div className="container w-full px-4 lg:px-72">
        <h1 className="font-bold text-3xl text-center text-gray1 font-poppins dark:text-white">About</h1>
        <h2 className="text-center mt-1 font-poppins">Short description of myself</h2>
        <div className="flex flex-col items-center mt-14 lg:flex-row lg:justify-between">
          <div className="w-full" data-aos="fade-up">
            <Image className="w-[410px] h-[354px] object-cover rounded-2xl" src={'/img/about.webp'} width={410} height={400} alt="About" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
          </div>
          <div className="flex flex-col gap-y-10 lg:w-11/12 " data-aos="fade-up">
            <p className="text-gray-700 mt-6 md:mt-0 font-poppins lg:text-start w-full text-justify dark:text-[#D4D4D4]">
              Hello! I'm Ahmad Abyansyah, a passionate Front End developer with expertise in React JS and Next JS. Proficient in Tailwind CSS and Bootstrap, I create responsive and user-friendly websites. Experienced in collaborative
              environments, I ensure timely project delivery. Excited about technology's future, I'm eager to contribute to its growth. Thank you for visiting, have a great day! 👋
            </p>
            <div className="flex w-full justify-between gap-x-3">
              <div className="flex flex-col items-center w-20">
                <h3 className="text-2xl font-bold">02 +</h3>
                <p className="text-[#6D6A7C] text-center text-sm dark:text-[#D4D4D4]">Years Experience</p>
              </div>
              <div className="flex flex-col items-center w-20">
                <h3 className="text-2xl font-bold">20 +</h3>
                <p className="text-[#6D6A7C] text-center text-sm dark:text-[#D4D4D4]">Completed Projects</p>
              </div>
              <div className="flex flex-col items-center w-20">
                <h3 className="text-2xl font-bold">02 +</h3>
                <p className="text-[#6D6A7C] text-center text-sm dark:text-[#D4D4D4]">Companies Worked</p>
              </div>
            </div>
            {/* <div className="flex w-full justify-center lg:justify-start gap-x-3 ">
              <div className="py-4 w-[125px] border-2 flex flex-col items-center rounded-xl lg:w-[140px] lg:py-6">
                <PiMedal size={22} />
                <h3 className="font-semibold">Experience</h3>
                <p className="text-gray-400">1+ Years</p>
              </div>
              <div className="py-4 w-[125px] border-2 flex flex-col items-center rounded-xl lg:w-[140px] lg:py-6">
                <BiBriefcase size={22} />
                <h3 className="font-semibold">Completed</h3>
                <p className="text-gray-400 text-sm">20 + Projects</p>
              </div>
              <div className="py-4 w-[125px] border-2 flex flex-col items-center rounded-xl lg:w-[140px] lg:py-6">
                <BiBriefcase size={22} />
                <h3 className="font-semibold text-base text-center">Companies Worked</h3>
                <p className="text-gray-400 text-sm">02 + worked</p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
