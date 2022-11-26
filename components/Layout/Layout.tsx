import React from 'react';
import TopNav from '../TopNav/TopNav';
import style from './Layout.module.scss';

const Layout = ({ children }: any) => {
  return (
    <main className={style.layout}>
      <TopNav />
      <section>{children}</section>
      <footer></footer>
    </main>
  );
};

export default Layout;
