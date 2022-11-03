import React from "react";
import { Drawer } from "@mui/material";
import ListSideMenu from "./ListSideMenu";

const SideMenu = ({ isOpenMenu, handlerCloseMenu }) => {
  return (
    <Drawer anchor={"left"} open={isOpenMenu} onClose={handlerCloseMenu}>
      <div
        style={{
          width: "300px",
          height: "1rem",
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          padding: "1rem 1rem 0 0",
        }}
      >
        <span
          style={{
            fontSize: "1.7rem",
            fontWeight: "600",
            cursor: "pointer",
          }}
          onClick={handlerCloseMenu}
        >
          &times;
        </span>
      </div>
      <ListSideMenu />
    </Drawer>
  );
};

export default SideMenu;
