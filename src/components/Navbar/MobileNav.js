import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Badge } from "@mui/material";

const MobileNav = ({ productQuantity }) => {
  const { currentUser, logout } = useContext(AuthContext);
  const handleLogout = async () => {
    try {
      await logout();
      window.location.reload();
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };

  return (
    <div className="fixed bottom-0 z-10 h-14 w-full bg-gray-50 shadow-lg lg:hidden">
      <div className="flex h-full items-center justify-between px-2">
        {/* Home */}
        <a
          href="/"
          className="flex w-full flex-col items-center justify-center"
        >
          <HomeOutlinedIcon className="text-lg text-slate-700" />
          <span className="text-[0.65rem] font-medium leading-4 text-slate-800">
            Home
          </span>
        </a>

        {/* Wishlist */}
        <a
          href="/wishlist"
          className="flex w-full flex-col items-center justify-center"
        >
          <FavoriteBorderOutlinedIcon className="text-lg text-slate-700" />
          <span className="text-[0.65rem] font-medium leading-4 text-slate-800">
            Wishlist
          </span>
        </a>

        {/* Cart with Badge */}
        <a
          href="/cart"
          className="relative flex w-full flex-col items-center justify-center"
        >
          <Badge
            badgeContent={productQuantity}
            color="primary"
            showZero
            sx={{
              "& .MuiBadge-badge": {
                minWidth: "15px",
                height: "15px",
                fontSize: "10px",
                padding: "0",
                transform: "translate(50%, -50%)",
                top: "0px",
                right: "0px",
              },
            }}
          >
            <ShoppingBagOutlinedIcon className="text-lg text-slate-700" />
          </Badge>
          <span className="text-[0.65rem] font-medium leading-4 text-slate-800">
            Cart
          </span>
        </a>

        {/* Login/Logout */}
        {currentUser === "guest" ? (
          <a
            href="/login"
            className="flex w-full flex-col items-center justify-center"
          >
            <PersonOutlineOutlinedIcon className="text-lg text-slate-700" />
            <span className="text-[0.65rem] font-medium leading-4 text-slate-800">
              Login
            </span>
          </a>
        ) : (
          <button
            onClick={handleLogout}
            className="flex w-full flex-col items-center justify-center"
          >
            <LogoutOutlinedIcon className="text-lg text-red-700" />
            <span className="text-[0.65rem] font-medium leading-4 text-slate-800">
              Logout
            </span>
          </button>
        )}
      </div>
    </div>
  );
};

export default MobileNav;
