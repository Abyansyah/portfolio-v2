import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Styles from 'ahmad/common/styles/customs.module.css';
import Image from 'next/image';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section id="home" className="h-screen flex items-center justify-center dark:bg-[#191919]">
      <div className="container w-full px-4 flex justify-center lg:px-72 ">
        <div className="flex flex-col items-center gap-y-2 md:flex-row-reverse md:justify-between ">
          <div className="w-[328px] h-[328px] lg:w-[358px] md:h-[400px] " data-aos="fade-up">
            <div className={Styles.morph}>
              <Image src={'/img/hero.png'} width={2560} height={1440} objectFit="cover" className="w-full h-full object-cover" alt="bg-hero" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
            </div>
          </div>
          <div className="flex flex-col items-center gap-y-5 md:w-6/12 md:items-start" data-aos="fade-up">
            {' '}
            <h1 className="text-4xl text-center font-bold md:text-start md:text-[44px] leading-[60px]">
              Junior Front-End Developer <span>&#x1F44B;</span>
            </h1>
            <p className="text-center mt-4 text-lg md:text-start">Hi, I'm Ahmad Abyansyah. A passionate Front-end Developer based in kediri, Indonesia. 📍</p>
            <div className="flex gap-x-4">
              <motion.div whileHover={{ y: -5 }} whileTap={{ y: -5 }}>
                <Link href={'https://github.com/Abyansyah'} target="_blank">
                  <FaGithub size={30} />
                </Link>
              </motion.div>
              <motion.div whileHover={{ y: -5 }} whileTap={{ y: -5 }}>
                <Link href={'https://www.linkedin.com/in/ahmad-abyansyah-136593231/'} target="_blank">
                  <FaLinkedin size={30} />
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
