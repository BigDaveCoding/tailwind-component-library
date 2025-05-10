import type { Meta, StoryObj } from "@storybook/react";
import { fn, userEvent, within } from "@storybook/test";

import { ButtonGroup } from "@/components/ButtonGroup";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "UI/Button",
  component: ButtonGroup,
  parameters: {
    layout: "centered",
  },
  args: {
    leftButtonText: "Prev",
    rightButtonText: "Next",
    onLeftClick: fn(),
    onRightClick: fn(),
  },
} satisfies Meta<typeof ButtonGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Groups: Story = {
  args: {},
};
