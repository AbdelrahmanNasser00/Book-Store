import { useLocation } from "react-router-dom";

const NavLinksBtn = (props) => {
  const { text, path, onClick } = props;
  const location = useLocation();
  const isActive = location.pathname === `/${path}`;
  return (
    <div className="flex w-full cursor-pointer justify-start border-b border-gray-300 lg:block lg:border-none">
      <button
        className={`my-1 px-3 font-normal ${isActive ? "text-sky-500" : "text-sky-900"} transition-all duration-300 hover:text-sky-500`}
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  );
};

export default NavLinksBtn;
