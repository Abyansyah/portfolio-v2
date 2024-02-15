import React from 'react';

const Footer = () => {
  return (
    <footer className="flex justify-center w-full bg-white py-4 border dark:bg-neutral-900 dark:border-none">
      <div>Copyright © {new Date().getFullYear()}. All rights are reserved</div>
    </footer>
  );
};

export default Footer;
