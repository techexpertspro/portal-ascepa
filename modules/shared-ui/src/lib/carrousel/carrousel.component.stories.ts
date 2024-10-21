import type { Meta, StoryObj } from '@storybook/angular';
import { CarrouselComponent } from './carrousel.component';

const meta: Meta<CarrouselComponent> = {
  component: CarrouselComponent,
  title: 'CarrouselComponent',
};
export default meta;
type Story = StoryObj<CarrouselComponent>;

export const Primary: Story = {
  args: {
    images: [],
    showIndicator: true,
    showNavigators: true,
    animationSpeed: 1000,
    autoPlay: false,
    autoPlayInterval: 3000,
  },
};
