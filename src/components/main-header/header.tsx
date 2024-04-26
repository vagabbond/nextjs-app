import Link from "next/link";
import Image from "next/image";

import MainHeaderBackground from "./header-background";
import NavLink from "./nav-links";

import logoImg from "@/assets/logo.png";
import classes from "./header.module.css";

const Header = () => {
 return (
  <>
   <MainHeaderBackground />
   <header className={classes.header}>
    <Link className={classes.logo} href="/">
     <Image src={logoImg} alt="A plate with food on it" priority />
     NextLevel Food
    </Link>

    <nav className={classes.nav}>
     <ul>
      <li>
       <NavLink href="/meals">Browse Meals</NavLink>
      </li>
      <li>
       <NavLink href="/community">Foodies Community</NavLink>
      </li>
     </ul>
    </nav>
   </header>
  </>
 );
};

export default Header;
