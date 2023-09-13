'use client';
import { FC, ReactNode, useEffect, useRef } from 'react';
import { navItems } from './navItems';
import Logo from '@/components/Logo/Logo';
import NavItem from './NavItem';

// extra styling for scroll effect
import styles from './Nav.module.scss';

type Props = {
  children?: ReactNode;
  icon?: ReactNode;
  navHeight?: string;
};

const Nav: FC<Props> = ({ children, icon = '' }) => {
  const navList = navItems.map(({ name, href }) => (
    <li key={name}>
      <NavItem href={href} name={name} />
    </li>
  ));

  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let prevScrollpos = window.pageYOffset;

    window.addEventListener('scroll', () => {
      let currentScrollPos = window.pageYOffset;

      if (prevScrollpos > currentScrollPos) {
        ref.current?.classList.remove(`${styles.nav_hidden}`);
        ref.current?.classList.add(`${styles.nav_show}`);
      } else {
        ref.current?.classList.add(`${styles.nav_hidden}`);
        ref.current?.classList.remove(`${styles.nav_show}`);
      }
      prevScrollpos = currentScrollPos;
    });
  }, []);

  return (
    <>
      <nav
        className={`flex items-center flex-wrap bg-black h-16 z-50`}
        ref={ref}
      >
        <Logo />
        <ul
          className={`lg:inline-flex lg:flex-row lg:ml-auto lg:w-screen w-full lg:items-center items-center justify-center  flex flex-col lg:h-auto ease-in-out duration-400`}
        >
          {navList}
        </ul>
        {icon}
      </nav>
      {children}
    </>
  );
};
export default Nav;
