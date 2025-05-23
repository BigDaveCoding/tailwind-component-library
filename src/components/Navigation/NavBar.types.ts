export type NavBarVariant = "default" | "collapsed" | "expanded";

interface NavLinks {
    label: string;
    href: string;
}

export interface NavBarProps {
    title?: string;
    variant?: NavBarVariant;
    links?: NavLinks[];
}