import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../common/store/store';
import { xata } from '../common/utils/xata';
import PlantCardContainer from '../components/Layout/PlantCardContainer';
import PlantCard from '../components/PlantCard';

const ViewPlants = () => {
  const plants = useSelector((state: RootState) => state.plants.plants);
  return (
    <PlantCardContainer>
      {plants.map((plant: any) => (
        <PlantCard
          id={plant.client_id}
          key={plant.client_id}
          name={plant.name}
          type={plant.type}
          lastWatered={plant.last_watered}
          nextWater={plant.next_water}
        />
      ))}
    </PlantCardContainer>
  );
};

export default ViewPlants;
