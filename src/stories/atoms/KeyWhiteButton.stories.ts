import type { Meta, StoryObj } from '@storybook/react';

import { KeyButton } from '../../components/keyboard/atoms/KeyButton';

const meta = {
  title: 'Atoms/KeyButton',
  component: KeyButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof KeyButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: 'C4',
    noteType: 'white',
  },
};
