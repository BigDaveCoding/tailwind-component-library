import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { Button } from "@/components/Button";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "UI/Button",
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {
    variant: "primitive",
    size: "medium",
    children: "Button",
    disabled: false,
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primitive: Story = {
  args: {
    variant: "primitive",
  },
};
export const Simple: Story = {
  args: {
    variant: "simple",
  },
};
export const Rounded: Story = {
  args: {
    variant: "rounded",
  },
};
export const Outline: Story = {
  args: {
    variant: "outline",
  },
};
export const Bordered: Story = {
  args: {
    variant: "bordered",
  },
};
export const ThreeD: Story = {
  args: {
    variant: "3d",
  },
};
export const Elevated: Story = {
  args: {
    variant: "elevated",
  },
};
export const Download: Story = {
  args: {
    variant: "download",
  },
};
