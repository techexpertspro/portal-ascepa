import { ITags } from './ITags.interface';

export interface IVacancy {
  id: number;
  title: string;
  tags?: ITags[];
  company: string;
  description: string;
}
