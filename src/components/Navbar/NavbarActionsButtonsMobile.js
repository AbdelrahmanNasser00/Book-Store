import { useLocation, useNavigate } from "react-router-dom";
import HamburgerIcon from "./HamburgerIcon";
import Logo from "./Logo";
import NavbarActionBtnWithIcon from "./NavbarActionBtnWithIcon";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { Badge } from "@mui/material";
import UserSearch from "./UserSearch";
const NavbarActionsButtonsMobile = ({ productQuantity }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const handleNavigate = () => {
    if (location.pathname !== "/cart") navigate(`/cart`);
  };
  return (
    <>
      <div className="my-3 flex w-full items-center justify-between px-3 lg:hidden">
        <HamburgerIcon />
        <Logo width={9} />
        <NavbarActionBtnWithIcon
          icon={<ShoppingBagOutlinedIcon />}
          onClick={() => handleNavigate()}
          badge={
            <Badge
              showZero
              badgeContent={productQuantity}
              color="primary"
              sx={{
                "& .MuiBadge-badge": {
                  minWidth: "15px",
                  height: "15px",
                  fontSize: "10px",
                  padding: "0",
                },
              }}
            ></Badge>
          }
        />
      </div>
      <div className="w-full px-2 lg:hidden">
        <UserSearch />
      </div>
    </>
  );
};
export default NavbarActionsButtonsMobile;
