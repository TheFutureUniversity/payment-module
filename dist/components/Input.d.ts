import React from "react";
export default function Input({ type, placeholder, name, register, errors, rules, label, className, labelClassName, onClick, disabled, ...rest }: {
    type: string;
    placeholder: string;
    name: string;
    register: any;
    errors: any;
    rules?: any;
    className?: string;
    labelClassName?: string;
    label?: string;
    onClick?: () => void;
    disabled?: boolean;
}): React.JSX.Element;
