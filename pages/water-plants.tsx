import moment from 'moment';
import React, { useMemo } from 'react';
import { waterToday } from '../common/utils/dates';
import { xata } from '../common/utils/xata';
import PlantsToWater from '../components/PlantsToWater';

const WaterPlants = ({ plants }: any) => {
  const thirstyPlants = useMemo(() => {
    return plants.filter((plant: any) => {
      return waterToday(plant.next_water);
    });
  }, [plants]);

  return (
    <>
      <PlantsToWater plants={thirstyPlants} />
    </>
  );
};

export default WaterPlants;

export const getServerSideProps = async () => {
  let xataPlants = await xata.db.plants.getMany();
  let plantsString = JSON.stringify(xataPlants);
  let plants = JSON.parse(plantsString);

  return { props: { plants } };
};
