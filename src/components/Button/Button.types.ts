import React from "react";

// creating custom typescript types
// variant and size must be one of the options provided
export type ButtonVariant = 'primitive' | 'simple' | 'rounded' | 'outline' | 'bordered' | '3d' | 'elevated' | 'groupPrev' | 'groupNext';
export type ButtonSize = 'small' | 'medium' | 'large';

// ButtonHTMLAttributes inherits all standard button attributes i.e. onClick | disabled etc.
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode; // content inside component has to be valid react content
    variant?: ButtonVariant; // optional props - if not provided fallback to default value - optional values set in component
    size?: ButtonSize;
}