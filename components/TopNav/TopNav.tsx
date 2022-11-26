import Link from 'next/link';
import React from 'react';
import { navLinks } from '../../common/vars/navLinks';
import style from './Topnav.module.scss';

const TopNav = () => {
  return (
    <nav className={style.topNav}>
      {navLinks.map((navLink) => (
        <Link key={navLink.id} href={navLink.link}>
          {navLink.text}
        </Link>
      ))}
    </nav>
  );
};

export default TopNav;
