import { ITags } from './Itags.interface';

export interface IVacancy {
  id: number;
  title: string;
  tags?: ITags[];
  company: string;
  description: string;
}
