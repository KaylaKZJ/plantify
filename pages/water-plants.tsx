import moment from 'moment';
import React, { useMemo } from 'react';
import { xata } from '../common/utils/xata';
import PlantsToWater from '../components/PlantsToWater';

const WaterPlants = ({ plants }: any) => {
  const waterToday = useMemo(() => {
    return plants.filter((plant: any) => {
      if (plant.next_water != null)
        return plant.next_water.slice(0, 10) === moment().format('YYYY-MM-DD');
      return false;
    });
  }, [plants]);

  return (
    <>
      <PlantsToWater plants={waterToday} />
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
