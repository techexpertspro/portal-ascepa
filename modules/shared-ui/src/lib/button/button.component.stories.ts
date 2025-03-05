import type { Meta, StoryObj } from '@storybook/angular';
import { ButtonComponent } from './button.component';

const meta: Meta<ButtonComponent> = {
  component: ButtonComponent,
  title: 'ButtonComponent',
  argTypes: {
    label: {
      description: 'The text to display inside the button',
      control: 'text',
    },
    disabled: {
      description: 'Disables the button if true',
      control: 'boolean',
    },
    type: {
      description: 'The type of button, can be "primary" or "secondary"',
      control: { type: 'select', options: ['primary', 'secondary'] },
    },
    eventClick: {
      description: 'Event emitted when the button is clicked',
      action: 'clicked',
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'A button component that can be used as a primary or secondary button.',
      },
    },
  },
};
export default meta;

type Story = StoryObj<ButtonComponent>;

export const Primary: Story = {
  args: {
    label: 'Primary Button',
    disabled: false,
    type: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Secondary Button',
    disabled: false,
    type: 'secondary',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Button',
    disabled: true,
    type: 'primary',
  },
};
