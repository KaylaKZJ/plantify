import moment from 'moment';
import React, { useState } from 'react';
import plantsApi from '../../common/services/plant-service';
import Spinner from '../Spinner/Spinner';

const WaterPlant = ({ plant }: { plant: any }) => {
  const [buttonText, setButtonText] = useState('Water Plant');
  const [loading, setLoading] = useState(false);
  return (
    <button
      type='submit'
      onClick={() => {
        setLoading(true);
        plantsApi.updatePlant(plant.id, moment().toISOString()).then((res) => {
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

export default WaterPlant;
