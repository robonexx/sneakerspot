import { FC, ReactNode } from "react";
import Link from "next/link";
import { navItems } from "./navItems";
import Logo from "@/components/Logo/Logo";


type Props = {
  children?: ReactNode;
  icon?: ReactNode;
  navHeight?: string;
};

const Nav: FC<Props> = ({ children, icon, navHeight = "" }) => {
  const navList = navItems.map(({ name, href }) => (
    <li key={name} className="hoverTertiary">
      <Link href={href}>{name}</Link>
    </li>
  ));

  return (
    <>
      <nav className={`${styles.Nav} ${navHeight}`}>
        <Logo />
        <ul className={styles.NavList}>{navList}</ul>
        {icon}
      </nav>
      {children}
    </>
  );
};
export default Nav;
