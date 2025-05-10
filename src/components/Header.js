import React from "react";
import SignInButton from "./SignInButton";

const Header = () => (
  <header
    className="fixed top-0 left-0 right-0 bg-[#181f2a] p-4 z-40 shadow flex justify-end items-center"
    style={{
      minHeight: 100,
      borderBottom: "1px solid #232b3a",
    }}
  >
    <SignInButton />
  </header>
);

export default Header;
