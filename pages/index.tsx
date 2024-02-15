import { AboutSection, Career, CertificatePage, HeroSection, ProjectSection, SkillSection } from 'ahmad/common/components/page';
import Navbar from 'ahmad/common/components/Layout/Navbar';
import ButtomBar from 'ahmad/common/components/Layout/ButtomBar';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillSection />
      <ProjectSection />
      <CertificatePage />
      <Career />
      <ButtomBar />
    </>
  );
}
