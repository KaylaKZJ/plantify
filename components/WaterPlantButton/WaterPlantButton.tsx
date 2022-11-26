import moment from 'moment';
import React, { useState } from 'react';
import plantsApi from '../../common/services/plant-service';
import Spinner from '../Spinner/Spinner';

const WaterPlantButton = ({ id }: { id: string }) => {
  const [buttonText, setButtonText] = useState('Water Plant');
  const [loading, setLoading] = useState(false);
  return (
    <button
      className='m-auto block'
      type='submit'
      onClick={() => {
        setLoading(true);
        plantsApi.updatePlant(id, moment().toISOString()).then((res) => {
          setLoading(false);
          if (res?.status === 200) {
            setButtonText('Plant Watered');
          }
        });
      }}
    >
      {!loading && buttonText}
      {loading && <Spinner />}
    </button>
  );
};

export default WaterPlantButton;
