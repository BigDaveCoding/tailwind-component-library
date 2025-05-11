import type { Meta, StoryObj } from "@storybook/react";

import { NavBar } from "@/components/Navigation";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: "UI/Navigation",
    component: NavBar,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: "centered",
    },
    args: {
        title: "Tailwind CSS",
        variant: "default",
        links: [{label: "Docs", href: "#"}, {label: "Examples", href: "#"}, {label: "Blog", href: "#"}],
    },
} satisfies Meta<typeof NavBar>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
    args: {
        variant: "default",
    },
};
export const Collapsed: Story = {
    args: {
        variant: "collapsed",
    }
}

