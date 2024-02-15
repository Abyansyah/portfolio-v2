import React, { useEffect, useRef, useState } from 'react';
import { IoHomeOutline, IoDocumentTextOutline, IoClose } from 'react-icons/io5';
import { PiSquaresFour, PiCertificate } from 'react-icons/pi';
import { FiCoffee } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { LuUser2 } from 'react-icons/lu';
import { RxImage } from 'react-icons/rx';
import Link from 'next/link';
import { MenuBar } from 'ahmad/common/constant/Menu';
import { HiOutlineBriefcase } from 'react-icons/hi';

const ButtomBar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('home');
  let menuRef: any = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    let handler = (e: any): void => {
      if (!menuRef.current.contains(e.target)) {
        setOpenMenu(false);
      }
    };

    document.addEventListener('mousedown', handler);

    return () => {
      document.removeEventListener('mousedown', handler);
    };
  }, []);

  return (
    <div className="sticky bottom-0 w-full left-0 right-0 p-4 border-t-2 bg-white md:hidden z-10 dark:bg-[#191919] dark:border-neutral-800" ref={menuRef}>
      <motion.button
        whileTap={{
          scale: 0.8,
          rotate: -90,
          borderRadius: '100%',
        }}
        onClick={() => setOpenMenu(!openMenu)}
      >
        <PiSquaresFour size={26} />
      </motion.button>

      {openMenu && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="absolute bottom-0 right-0 left-0 rounded-t-2xl bg-white dark:bg-neutral-900 dark:border-neutral-800 w-full h-max border-t-2"
        >
          <ul className="flex  flex-wrap gap-10 items-center justify-between px-10 pt-8  ">
            {MenuBar.map((item, index) => (
              <li key={index} onClick={() => setOpenMenu(!openMenu)}>
                <Link className={`flex w-[66px] justify-center flex-col items-center gap-1 ${item.section === activeSection ? 'text-blue-600' : 'text-gray1 dark:text-[#D4D4D4]'}`} href={item.path}>
                  {renderIcon(item.section)}
                  <h1 className="text-base font-medium font-poppins">{item.name}</h1>
                </Link>
              </li>
            ))}
          </ul>
          <motion.button
            whileTap={{
              scale: 0.8,
              rotate: 90,
              borderRadius: '100%',
            }}
            onClick={() => setOpenMenu(!openMenu)}
            className="px-4 pt-6 pb-4"
          >
            <IoClose size={24} />
          </motion.button>
        </motion.div>
      )}
    </div>
  );
};

const renderIcon = (section: string) => {
  switch (section) {
    case 'home':
      return <IoHomeOutline size={20} />;
    case 'about':
      return <LuUser2 size={20} />;
    case 'skills':
      return <IoDocumentTextOutline size={20} />;
    case 'projects':
      return <FiCoffee size={20} />;
    case 'certificate':
      return <PiCertificate size={20} />;
    case 'career':
      return <HiOutlineBriefcase size={20} />;
    default:
      return null;
  }
};

export default ButtomBar;
