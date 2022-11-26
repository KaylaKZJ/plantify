import moment from 'moment';

export const addPlantFormInitial = {
  type: 'Unknown',
  name: '',
  indoor: true,
  outdoor: false,
  last_watered: moment().toISOString(),
  next_water: moment().toISOString(),
  water_schedule: [],
};

export const formFeedbackInitial = {
  text: '',
  state: 'error',
};
