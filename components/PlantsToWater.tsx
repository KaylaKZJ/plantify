import React from 'react';
import PlantCardContainer from './Layout/PlantCardContainer';
import PlantCard from './PlantCard';

const PlantsToWater = (props: any) => {
  return (
    <>
      <h1>Plants to water</h1>
      {props.plants &&
        props.plants.map((plant: any) => (
          <PlantCardContainer key={plant.id}>
            <div>
              <PlantCard
                name={plant.name}
                type={plant.type}
                lastWatered={plant.last_watered}
                nextWater={plant.next_water}
                id={plant.id}
              />
            </div>
          </PlantCardContainer>
        ))}
    </>
  );
};

export default PlantsToWater;
