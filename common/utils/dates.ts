import moment from 'moment';

export const formatDateForUser = (date: string | Date): string => {
  return moment(date).format('dddd, MMMM Do YYYY');
};

export const waterToday = (date: string | Date): boolean => {
  return moment(date).isSame(moment(), 'day');
};
