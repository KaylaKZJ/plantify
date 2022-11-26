import moment from 'moment';
import { plants } from '../vars/plantTypes';

export const nextWater = (type: string, last_watered: string) => {
  let day = getDay(type);
  return moment(last_watered).add(day, 'day').toISOString();
};

const getDay = (type: string) => {
  let waterShedule = plants.filter(
    (plant) => plant.type.toLowerCase() === type.toLowerCase()
  );
  return waterShedule[0].waterFrequency;
};
