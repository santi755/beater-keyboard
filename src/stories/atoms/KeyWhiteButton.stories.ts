import type { Meta, StoryObj } from '@storybook/react';

import { KeyWhiteButton } from '../../components/keyboard/atoms/KeyWhiteButton';

const meta = {
  title: 'Atoms/KeyWhiteButton',
  component: KeyWhiteButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof KeyWhiteButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    primary: true,
  },
};
