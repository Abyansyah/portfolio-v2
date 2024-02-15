import { useTheme } from 'next-themes';
import Link from 'next/link';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { BiMoon, BiSun } from 'react-icons/bi';
import { MenuBar } from 'ahmad/common/constant/Menu';
import Head from 'next/head';
import { useRouter } from 'next/router';

const Navbar: React.FC<any> = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [scroll, setScroll] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('home');
  const router = useRouter();

  const handleChangeTheme = useCallback(() => {
    setTheme(resolvedTheme === 'light' ? 'dark' : 'light');
  }, [resolvedTheme, setTheme]);

  const handleScroll = () => {
    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
        setActiveSection(section.id);
      }
    });
    window.scrollY >= 60 ? setScroll(true) : setScroll(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const activeMenuItem = MenuBar.find((item) => item.section === activeSection);
  const pageTitle = activeMenuItem ? activeMenuItem.title : 'Ahmad Abyansyah - Personal Website';

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <nav className={`py-6 px-4 lg:px-72 sticky top-0 left-0 md:fixed right-0 z-30 bg-white w-full ${scroll && 'shadow-md'} dark:bg-[#191919]`}>
        <div className="container mx-auto">
          <div className="flex justify-between">
            <Link href={'/'} className="text-xl font-bold font-poppins text-gray1 dark:text-white cursor-pointer">
              Ahmad<span className="font-bold text-blue-600">.</span>
            </Link>
            <div className="hidden md:block">
              <ul className="flex gap-10 ">
                {MenuBar.map((item, index) => (
                  <li key={index}>
                    <Link className={`font-poppins font-semibold text-base ${item.section === activeSection ? 'text-blue-600' : 'text-gray1 dark:text-[#D4D4D4]'}`} href={item.path}>
                      {item?.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <button onClick={handleChangeTheme}>{resolvedTheme === 'light' ? <BiMoon size={20} /> : <BiSun size={20} />}</button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
