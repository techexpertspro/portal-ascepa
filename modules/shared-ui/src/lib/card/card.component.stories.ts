import type { Meta, StoryObj } from '@storybook/angular';
import { CardComponent } from './card.component';

const meta: Meta<CardComponent> = {
  component: CardComponent,
  title: 'CardComponent',
};
export default meta;
type Story = StoryObj<CardComponent>;

export const Primary: Story = {
  args: {
    title: 'title',
    subtitle: 'subtitle',
    description: 'description',
    badges: ['badge1', 'badge2'],
    buttonPrimary: 'buttonPrimary',
    buttonSecondary: 'buttonSecondary',
  },
};
