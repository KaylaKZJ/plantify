import React from 'react';
import { TLayout } from '../../common/types/layoutTypes';
import TopNav from '../TopNav/TopNav';
import style from './Layout.module.scss';

const Layout = ({ children }: TLayout) => {
  return (
    <main className={style.layout}>
      <header className='text-5xl text-center pt-5'>Plantify</header>
      <TopNav />
      <section>{children}</section>
      <footer></footer>
    </main>
  );
};

export default Layout;
