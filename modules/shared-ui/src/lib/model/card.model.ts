import { Button } from './button.model';

export type Card = {
  title: string;
  company: string;
  description: string;
  insights: Array<string>;
  buttonList: Button[];
};
