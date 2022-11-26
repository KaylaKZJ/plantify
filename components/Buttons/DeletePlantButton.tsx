import moment from 'moment';
import React, { useState } from 'react';
import plantsApi from '../../common/services/plant-service';
import { nextWater } from '../../common/utils/watering';
import SubmitButton from './SubmitButton';

const DeletePlantButton = ({ id }: { id: string }) => {
  const [buttonText, setButtonText] = useState('Remove Plant');
  const [loading, setLoading] = useState(false);

  const onClick = () => {
    setLoading(true);
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
