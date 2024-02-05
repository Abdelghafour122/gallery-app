import { FaHeart } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="footer w-full flex flex-col py-2">
      <p className="flex items-center justify-center">
        {/* use your username as a link after making your website */}
        Built with &nbsp; <FaHeart color="red" /> &nbsp; by @Abdelghafour122
      </p>
    </div>
  );
};

export default Footer;
