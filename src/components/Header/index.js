import React from "react";
import "./Header.sass";

import Logo from "../Logo";
import SignInBtn from "../SignInBtn";

const Header = () => (
  <header className="header">
    <Logo />
    <SignInBtn />
  </header>
);
export default Header;
