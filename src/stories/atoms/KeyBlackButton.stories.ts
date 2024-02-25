import type { Meta, StoryObj } from '@storybook/react';

import { KeyBlackButton } from '../../components/keyboard/atoms/KeyBlackButton';

const meta = {
  title: 'Atoms/KeyBlackButton',
  component: KeyBlackButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof KeyBlackButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    primary: true,
  },
};
