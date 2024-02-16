import React, { useState } from 'react';
import { certif } from 'ahmad/common/constant/certificate';
import Link from 'next/link';
import Modal from '../modalIcon';
import { IoClose } from 'react-icons/io5';
import Image from 'next/image';

const CertificatePage = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  return (
    <>
      <section id="certificate" className="flex justify-center items-center h-full py-14 lg:py-20 lg:mt-0 lg:mb-0  ">
        <div className="container px-4 lg:px-72">
          <h1 className="font-bold text-3xl text-center text-gray1 font-poppins dark:text-white">Certificates</h1>
          <h2 className="text-center mt-1 font-poppins">Some of the certificates that I got</h2>
          <div className="flex flex-wrap mt-14 justify-center gap-8" data-aos="fade-up">
            {certif?.slice(0, 4).map((item, index) => (
              <Link
                href={item.url}
                key={index}
                target="_blank"
                className="rounded-xl transition-all w-[343.2px] duration-300 shadow-sm lg:hover:shadow-md relative border overflow-hidden dark:bg-neutral-800 border-neutral-200 dark:border-neutral-800 lg:hover:scale-[102%] cursor-pointer "
              >
                <Image src={item.img} width={2560} height={1440} className="w-full  object-cover aspect-video" alt={item?.name} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                <div className="flex flex-col justify-between p-3 space-y-2">
                  <h3 className="text-lg font-poppins cursor-pointer text-neutral-700 dark:text-neutral-300 lg:hover:text-teal-800 dark:hover:text-teal-400 transition-all duration-300">{item?.name}</h3>
                </div>
              </Link>
            ))}
          </div>
          <div className="flex justify-center mt-10">
            <button
              onClick={() => setShowModal(true)}
              className="border py-2 px-6 rounded-lg font-poppins bg-neutral-800 text-white hover:text-neutral-800 hover:bg-transparent hover:border-neutral-800 transition-all duration-300 ease-in-out dark:bg-neutral-700 dark:hover:bg-white dark:hover:text-black dark:border-none"
            >
              More
            </button>
          </div>
        </div>
      </section>
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <div className="h-screen lg:w-[800px] lg:h-[600px] overflow-hidden rounded-lg dark:bg-neutral-800">
          <div className="border-b-2 bg-white sticky dark:bg-neutral-800 dark:border-neutral-600">
            <div className="flex justify-between items-center p-6">
              <h2 className="text-xl font-poppins font-semibold">Certificates</h2>
              <IoClose size={26} onClick={() => setShowModal(!showModal)} className="cursor-pointer" />
            </div>
          </div>
          <div className="flex flex-col bg-white dark:bg-neutral-800 text-paletteText-primary gap-y-4 px-8 py-6 h-full overflow-y-auto">
            <div className="flex flex-wrap mb-24 justify-center gap-8 " data-aos="fade-up">
              {certif?.map((item, index) => (
                <Link
                  href={item.url}
                  key={index}
                  target="_blank"
                  className="rounded-xl transition-all w-[343.2px] duration-300 shadow-sm lg:hover:shadow-md relative border overflow-hidden dark:bg-neutral-800 border-neutral-200 dark:border-neutral-800 lg:hover:scale-[102%] cursor-pointer "
                >
                  <Image src={item.img} width={2560} height={1440} className="w-full  object-cover aspect-video" alt="" />
                  <div className="flex flex-col justify-between p-3 space-y-2">
                    <h3 className="text-lg font-poppins cursor-pointer text-neutral-700 dark:text-neutral-300 lg:hover:text-teal-800 dark:hover:text-teal-400 transition-all duration-300">{item?.name}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default CertificatePage;
