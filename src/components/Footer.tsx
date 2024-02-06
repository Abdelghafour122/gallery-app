import { FaHeart } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="absolute footer w-full flex flex-col py-2 left-0 bottom-0">
      <p className="flex items-center justify-center">
        {/* use your username as a link after making your website */}
        Built with &nbsp; <FaHeart color="red" /> &nbsp; by @Abdelghafour122
      </p>
    </footer>
  );
};

export default Footer;
