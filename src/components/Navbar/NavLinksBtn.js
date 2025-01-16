import { useLocation } from "react-router-dom";

const NavLinksBtn = (props) => {
  const { text, path } = props;
  const location = useLocation();
  const isActive = location.pathname === `${path}`;
  return (
    <div
      className={`mt-1 flex w-full cursor-pointer px-3 ${isActive ? "border-b-2 border-indigo-500 font-semibold text-indigo-500" : "text-gray-500"} justify-start border-b lg:block lg:w-fit`}
    >
      <a
        href={path}
        className={`w-full py-3 text-sm font-medium transition-all duration-300 hover:text-gray-800`}
      >
        {text}
      </a>
    </div>
  );
};

export default NavLinksBtn;
