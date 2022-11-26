import moment from 'moment';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import plantsApi from '../../common/services/plant-service';
import { removePlant } from '../../common/store/plantSlice';
import SubmitButton from './SubmitButton';

const DeletePlantButton = ({ id }: { id: string }) => {
  const [buttonText, setButtonText] = useState('Remove Plant');
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const onClick = () => {
    setLoading(true);
    dispatch(removePlant(id));
    plantsApi.deletePlant(id).then((res) => {
      setLoading(false);
      if (res?.status === 200) {
        setButtonText('Plant Removed');
      }
    });
  };
  return (
    <SubmitButton
      type='Danger'
      loading={loading}
      onClick={onClick}
      buttonText={buttonText}
    />
  );
};

export default DeletePlantButton;
