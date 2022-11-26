import React from 'react';
import { TLayout } from '../../common/types/layoutTypes';
import TopNav from '../TopNav/TopNav';
import style from './Layout.module.scss';

const Layout = ({ children }: TLayout) => {
  return (
    <main className={style.layout}>
      <TopNav />
      <section>{children}</section>
      <footer></footer>
    </main>
  );
};

export default Layout;
