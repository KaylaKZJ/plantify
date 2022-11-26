import moment from 'moment';
import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../common/store/store';
import { waterToday } from '../common/utils/dates';
import PlantsToWater from '../components/PlantsToWater';

const WaterPlants = () => {
  const plants = useSelector((state: RootState) => state.plants.plants);

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
