import React from 'react';
import {ButtonProps} from "@/components/Button";
import {buttonVariants} from "@/components/Button/Button.variants";

export default function Button({
    children,
    variant = 'primitive', // default style is primitive
    size = 'medium', // default size is medium
    disabled = false,
    ...props
}: ButtonProps)
{
    const baseStyles: string = 'cursor-pointer transition-colors duration-200';
    // calling on styles from variant
    const variantStyles: string = buttonVariants[variant].default || '';
    const variantHoverStyles: string = buttonVariants[variant].hover || '';
    const sizeStyles: string = buttonVariants.sizes[size] || '';
    const finalStyle: string = `${baseStyles} ${variantStyles} ${variantHoverStyles} ${sizeStyles}`;

    return (
        <button className={finalStyle} disabled={disabled}>
            {children}
        </button>
    )
}