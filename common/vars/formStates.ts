import moment from 'moment';

export const addPlantFormInitial = {
  type: '',
  name: '',
  indoor: true,
  outdoor: false,
  last_watered: moment().toISOString(),
  next_water: moment().toISOString(),
  water_schedule: [],
};
