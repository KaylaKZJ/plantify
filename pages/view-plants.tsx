import React from 'react';
import { xata } from '../common/utils/xata';
import PlantCardContainer from '../components/Layout/PlantCardContainer';
import PlantCard from '../components/PlantCard';

const ViewPlants = ({ plants }: any) => {
  return (
    <PlantCardContainer>
      {plants.map((plant: any) => (
        <PlantCard
          id={plant.id}
          key={plant.id}
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

export const getServerSideProps = async () => {
  let xataPlants = await xata.db.plants.getMany();
  let plantsString = JSON.stringify(xataPlants);
  let plants = JSON.parse(plantsString);

  return { props: { plants } };
};
