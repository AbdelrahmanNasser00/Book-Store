import React from "react";
const CRUDSBtns = ({ className, btn, onClick }) => {
  return (
    <button className={className} onClick={onClick}>
      {btn}
    </button>
  );
};
export default CRUDSBtns;
