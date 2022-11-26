import React from 'react';
import { TPlantContainer } from '../../common/types/layoutTypes';

const PlantCardContainer = ({ children }: TPlantContainer) => {
  return <div className='grid gap-4 grid-cols-3'>{children}</div>;
};

export default PlantCardContainer;
