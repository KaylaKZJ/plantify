import React from 'react';
import { TSubmitButton } from '../../common/types/buttonTypes';
import Spinner from '../Spinner/Spinner';

const SubmitButton = ({
  onClick,
  buttonText,
  loading,
  type,
}: TSubmitButton) => {
  return (
    <button
      className={`w-full block ${
        type == 'Danger' ? 'bg-red-700' : 'bg-green-600'
      }`}
      type='submit'
      onClick={onClick}
    >
      {!loading && buttonText}
      {loading && <Spinner />}
    </button>
  );
};

export default SubmitButton;
