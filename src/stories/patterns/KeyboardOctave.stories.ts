// TODO: Fix @ to import inside stories
// Right now it's not working if @ is used in KeyboardOctave
import type { Meta, StoryObj } from '@storybook/react';

import { KeyboardOctave } from '../../components/keyboard/patterns/KeyboardOctave';

const meta = {
  title: 'Patterns/KeyboardOctave',
  component: KeyboardOctave,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof KeyboardOctave>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
