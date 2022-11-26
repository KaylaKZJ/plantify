import moment from 'moment';
import React, { useState } from 'react';
import plantsApi from '../../common/services/plant-service';
import { nextWater } from '../../common/utils/watering';
import SubmitButton from './SubmitButton';

const WaterPlantButton = ({ id, type }: { id: string; type: string }) => {
  const [buttonText, setButtonText] = useState('Water Plant');
  const [loading, setLoading] = useState(false);

  const onClick = () => {
    setLoading(true);
    plantsApi
      .updatePlant(id, nextWater(type, moment().toISOString()))
      .then((res) => {
        setLoading(false);
        if (res?.status === 200) {
          setButtonText('Plant Watered');
        }
      });
  };
  return (
    <SubmitButton loading={loading} onClick={onClick} buttonText={buttonText} />
  );
};

export default WaterPlantButton;
