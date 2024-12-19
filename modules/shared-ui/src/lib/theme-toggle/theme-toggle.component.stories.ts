import type { Meta, StoryObj } from '@storybook/angular';
import { ThemeToggleComponent } from './theme-toggle.component';

const meta: Meta<ThemeToggleComponent> = {
  component: ThemeToggleComponent,
  title: 'ThemeToggleComponent',
};
export default meta;
type Story = StoryObj<ThemeToggleComponent>;

export const Primary: Story = {
  args: {},
};
