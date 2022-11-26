import React from 'react';
import style from './Spinner.module.scss';

const Spinner = () => {
  return (
    <div className={style.spinnerContainer}>
      <div className={style.dot}></div>
      <div className={style.dot}></div>
      <div className={style.dot}></div>
    </div>
  );
};

export default Spinner;
