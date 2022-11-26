import React from 'react';
import { xata } from '../common/utils/xata';

const ViewPlants = ({ plants }: any) => {
  return (
    <div>
      {plants.map((plant: any) => (
        <h1 key={plant.id}>{plant.name}</h1>
      ))}
    </div>
  );
};

export default ViewPlants;

export const getServerSideProps = async () => {
  let xataPlants = await xata.db.plants.getMany();
  let plantsString = JSON.stringify(xataPlants);
  let plants = JSON.parse(plantsString);

  return { props: { plants } };
};
