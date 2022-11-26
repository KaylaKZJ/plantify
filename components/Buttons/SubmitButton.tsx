import React from 'react';
import { TSubmitButton } from '../../common/types/buttonTypes';
import Spinner from '../Spinner/Spinner';

const SubmitButton = ({ onClick, buttonText, loading }: TSubmitButton) => {
  return (
    <button className='w-full block' type='submit' onClick={onClick}>
      {!loading && buttonText}
      {loading && <Spinner />}
    </button>
  );
};

export default SubmitButton;
