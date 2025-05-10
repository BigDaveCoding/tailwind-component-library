import React from 'react';

export interface ButtonGroupProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    leftButtonText?: string;
    rightButtonText?: string;
}