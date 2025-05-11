import type { Meta, StoryObj } from "@storybook/react";

import { NavBarOpen } from "@/components/Navigation";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: "UI/Navigation",
    component: NavBarOpen,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: "fullscreen",
    },
    args: {
        links: [{label: "Docs", href: "#"}, {label: "Examples", href: "#"}, {label: "Blog", href: "#"}],
    },
} satisfies Meta<typeof NavBarOpen>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Expanded: Story = {
    args: {},
};


