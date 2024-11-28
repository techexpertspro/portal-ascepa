import { Button } from './button.model';
import { Card } from './card.model';
import { Image } from './image.model';

export type SectionContent = {
  title: string;
  subtitle: string;
  text: string;
  mainImage: Image;
  imageList: Image[];
  buttonList: Button[];
  cardList: Card[];
};
