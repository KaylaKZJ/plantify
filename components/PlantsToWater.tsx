import moment from 'moment';
import React from 'react';
import plantsApi from '../common/services/plant-service';
import WaterPlant from './WaterPlant/WaterPlant';

const PlantsToWater = (props: any) => {
  return (
    <>
      <h1>Plants to water</h1>
      {props.plants &&
        props.plants.map((plant: any) => (
          <>
            <h2 key={plant.name}>{plant.name}</h2>
            <WaterPlant plant={plant} />
          </>
        ))}
    </>
  );
};

export default PlantsToWater;
