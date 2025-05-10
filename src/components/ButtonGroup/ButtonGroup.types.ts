import React from 'react';

export interface ButtonGroupProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    leftButtonText?: string;
    rightButtonText?: string;
    onLeftClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    onRightClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;

}