import React from 'react';
import PlantCardContainer from './Layout/PlantCardContainer';
import PlantCard from './PlantCard';

const PlantsToWater = (props: any) => {
  return (
    <>
      <h1>Plants to water</h1>
      <PlantCardContainer>
        {props.plants &&
          props.plants.map((plant: any) => (
            <PlantCard
              key={plant.id}
              name={plant.name}
              type={plant.type}
              lastWatered={plant.last_watered}
              nextWater={plant.next_water}
              id={plant.id}
            />
          ))}
      </PlantCardContainer>
    </>
  );
};

export default PlantsToWater;
