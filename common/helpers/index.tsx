export const handleScroll = (setScroll: any) => (window.scrollY >= 10 ? setScroll(true) : setScroll(false));
export const capitalizeFirstLetter = (str: any) => {
  return str?.charAt(0)?.toUpperCase() + str?.slice(1);
};

export const Slice = ({ content, slice, classname }: any) => {
  return <p className={classname}>{`${content.slice(0, slice)}...`}</p>;
};
