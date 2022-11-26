import { Hash } from 'crypto';

export type TPlantFormFields = {
  type: string;
  client_id: string;
  name: string;
  indoor: boolean;
  outdoor: boolean;
  last_watered: string;
  next_water: string;
  water_schedule: any[];
};
