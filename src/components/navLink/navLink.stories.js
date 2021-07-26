import "./navLink.css";
import navLink from "./navLinkRegular.html";
import navLinkActive from "./navLinkActive.html";

export default {
  title: "Components/NavLink",
  parameters: { layout: "fullscreen" },
};

export const regular = () => navLink;
export const active = () => navLinkActive;
