const NavbarActionBtnWithIcon = ({ icon, text, purpose, badge, onClick }) => {
  return (
    <button
      className="relative mx-2 cursor-pointer rounded-full border border-gray-200 p-2 font-mono text-xs text-gray-500 transition-all duration-300 ease-in-out hover:border-gray-100 hover:bg-gray-100"
      onClick={(e) => {
        e.stopPropagation();
        onClick && onClick();
      }}
    >
      {/* Icon and text */}
      <div>
        {icon}
        {text}
      </div>

      {/* Badge */}
      {badge && (
        <span className="absolute -right-0 -top-0 flex h-5 w-5 items-center justify-center rounded-full">
          {badge}
        </span>
      )}
    </button>
  );
};

export default NavbarActionBtnWithIcon;
