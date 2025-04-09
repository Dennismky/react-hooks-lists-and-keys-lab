import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  return <nav>
    {<a href="#home" key="h">home</a>}
    {<a href="#about" key="a">About</a>}
    {<a href="#projects" key="p">Projects</a>}
  </nav>;
}

export default NavBar;
