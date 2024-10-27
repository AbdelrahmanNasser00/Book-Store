const NavLinksBtn = (props) => {
  const { text, onClick } = props;
  return (
    <div
      className="my-1 cursor-pointer px-3 font-normal text-sky-900 transition-all duration-300 hover:text-sky-500"
      onClick={onClick}
    >
      {text}
    </div>
  );
};

export default NavLinksBtn;
