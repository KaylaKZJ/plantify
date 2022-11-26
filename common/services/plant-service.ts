import { api } from './api';

const plantsApi = {
  addPlant(data: any): Promise<void | Response> {
    const url = '/api/add-plant';
    const method = 'POST';
    return fetch(api(url, method, data));
  },
  updatePlant(id: string, next_water: string): Promise<void | Response> {
    const url = '/api/update-plant';
    const method = 'POST';
    const data = {
      id: id,
      next_water: next_water,
    };
    return fetch(api(url, method, data));
  },
};

export default plantsApi;
