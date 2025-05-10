export type NavBarVariant = "default" | "collapsed" | "expanded";

interface NavLinks {
    label: string;
    href: string;
}

export interface NavBarProps {
    children?: React.ReactNode;
    title?: string;
    variant?: NavBarVariant;
    links?: NavLinks[];
    buttonText?: string;
}