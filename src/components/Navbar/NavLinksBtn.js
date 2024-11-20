import { useLocation } from "react-router-dom";

const NavLinksBtn = (props) => {
  const { text, path, onClick } = props;
  const location = useLocation();
  const isActive = location.pathname === `/${path}`;
  return (
    <div className="flex w-full cursor-pointer justify-start border-b lg:block lg:w-fit lg:border-none">
      <button
        className={`mt-1 px-3 py-3 text-sm font-normal ${isActive ? "border-b-2 border-main-color font-semibold text-gray-900" : "text-gray-600"} transition-all duration-300 hover:text-gray-800`}
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  );
};

export default NavLinksBtn;