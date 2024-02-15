import { career } from 'ahmad/common/constant/career';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Career = () => {
  return (
    <section id="career" className=" flex py-14 lg:h-max lg:mt-0 lg:mb-0">
      <div className="container px-4 lg:px-72 w-full">
        <h1 className="font-bold text-3xl text-center text-gray1 font-poppins dark:text-white">Career</h1>
        <h2 className="text-center mt-1 font-poppins">My professional career journey.</h2>
        <div className="grid md:grid-cols-2 mt-16 gap-10" data-aos="fade-up">
          {career?.map((item: any, index: number) => (
            <div className="bg-white rounded-xl transition-all duration-300 shadow-sm flex items-center py-4 px-6 gap-5 border border-neutral-300 dark:border-neutral-900 dark:bg-neutral-800">
              <Image src={item?.img} width={55} height={55} alt={item?.name} />
              <div className="space-y-1">
                <h6>{item?.name}</h6>
                <div className="text-sm text-neutral-600 dark:text-neutral-400 space-y-2">
                  <div className="flex items-center gap-1 md:gap-2">
                    <Link href={item?.url} target="_blank" className="underline cursor-pointer hover:text-dark hover:dark:text-white">
                      {item?.company}
                    </Link>
                    <span className="text-neutral-300 dark:text-neutral-700">•</span>
                    <span>{item?.lok}</span>
                  </div>
                  <div className="flex flex-col md:text-[13px]">
                    <div className="flex gap-1">
                      <span>{item?.startDate}</span> - <span>{item?.endDate}</span>
                    </div>
                    <span className="text-neutral-500 dark:text-neutral-500">~ {item?.longDate}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Career;
