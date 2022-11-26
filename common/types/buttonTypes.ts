import { FormEvent } from 'react';

export type TSubmitButton = {
  onClick?: (e: FormEvent) => void;
  buttonText: string;
  loading: boolean;
  type?: 'Danger';
};
