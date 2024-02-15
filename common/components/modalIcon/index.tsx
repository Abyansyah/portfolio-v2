import React, { useRef } from 'react';
import { useEffect } from 'react';
import { motion } from 'framer-motion';

type ModalProps = {
  isOpen?: any;
  children?: string | JSX.Element | JSX.Element[];
  className?: string;
  onClose?: () => void | undefined;
  parentsRef?: any;
};

const Modal: React.FC<ModalProps> = ({ isOpen, children, onClose, parentsRef }) => {
  useEffect(() => {
    const handleClickOutsideModal = (event: MouseEvent) => {
      if (isOpen && onClose && event.target instanceof HTMLElement && !event.target.closest('.min-w-modal')) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutsideModal);

    return () => {
      document.removeEventListener('mousedown', handleClickOutsideModal);
    };
  }, [isOpen, onClose]);

  return (
    isOpen && (
      <>
        <motion.div
          className="fixed top-0 bottom-0 left-0 right-0 grid z-40 place-items-center overflow-hidden"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {
              scale: 0.8,
              opacity: 0,
            },
            visible: {
              scale: 1,
              opacity: 1,
              transition: {
                delay: 0.01,
              },
            },
          }}
        >
          <div className="min-w-modal rounded-rounded z-30 bg-grey-0 " ref={parentsRef}>
            {children}
          </div>
        </motion.div>
        <div className="bg-gray-700 opacity-50 fixed top-0 bottom-0 left-0 right-0 z-30 grid place-items-center"></div>
      </>
    )
  );
};

export default Modal;
