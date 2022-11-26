import { plants } from './plantTypes';

const createDropdownOptions = () => {
  return plants.map(({ type }) => {
    return { value: type, text: type };
  });
};

export const plantDropdownOptions = createDropdownOptions();
