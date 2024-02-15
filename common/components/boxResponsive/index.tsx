import React from 'react';

type boxProps = {
  children: any;
  classNames: string;
  id: string;
  elementRef: any;
};

const BoxResponsive: React.FC<boxProps> = ({ id, children, classNames, elementRef }) => {
  return (
    <section id={id} ref={elementRef} className={`relative flex flex-col justify-start items-start w-full h-auto p-0 mx-auto my-0 overflow-hidden transition duration-300 ease-in-out ${classNames}`}>
      {children}
    </section>
  );
};

export default BoxResponsive;
