import "./iconButton.css";
import iconButtonMenu from "./iconButton-menu.html";
import iconButtonBell from "./iconButton-bell.html";

export default {
  title: "Components/IconButton",
  parameters: { layout: "centered" },
};

export const Menu = () => iconButtonMenu;
export const Bell = () => iconButtonBell;
