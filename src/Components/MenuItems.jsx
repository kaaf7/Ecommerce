/* 👇 This is single menu item component
it is created and styled with Styled Components
that will be imported and displayed by Navbar 
*/
import React from "react";

export const MenuItems = ({ Menu }) => {
  return <div>{Menu.name}</div>;
};
