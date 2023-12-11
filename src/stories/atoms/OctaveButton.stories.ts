import type { Meta, StoryObj } from "@storybook/react";

import { OctaveButton } from "../../components/atoms/OctaveButton";

const meta = {
  title: "Atoms/OctaveButton",
  component: OctaveButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
  },
} satisfies Meta<typeof OctaveButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    primary: true,
    label: "Button",
  },
};
