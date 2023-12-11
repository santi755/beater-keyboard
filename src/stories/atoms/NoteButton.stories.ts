import type { Meta, StoryObj } from "@storybook/react";

import { NoteButton } from "../../components/atoms/NoteButton";

const meta = {
  title: "Atoms/NoteButton",
  component: NoteButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
  },
} satisfies Meta<typeof NoteButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    primary: true,
  },
};
