const NavbarActionBtnWithIcon = ({ icon, text, purpose, badge, onClick }) => {
  const handleClick = (e) => {
    e.stopPropagation();
    if (onClick) onClick();
  };

  return (
    <button
      className="relative mx-2 cursor-pointer rounded-md border border-gray-200 p-2 font-mono text-xs text-indigo-500 shadow-sm transition duration-300 ease-in-out hover:border-gray-100 hover:shadow-none"
      onClick={handleClick}
      aria-label={purpose || text}
    >
      {/* Icon and Text */}
      <div className="flex items-center space-x-1">
        {icon && <span>{icon}</span>}
        {text && <span>{text}</span>}
      </div>
      {/* Badge */}
      {badge && (
        <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full text-xs text-white">
          {badge}
        </span>
      )}
    </button>
  );
};

export default NavbarActionBtnWithIcon;
