import { FieldError, UseFormRegisterReturn } from "react-hook-form";

export interface TextareaFieldProps {
    label?: string;
    id: string;
    placeholder?: string;
    register: UseFormRegisterReturn;
    error?: FieldError;
    className?: string;
    labelClassName?: string;
    containerClassName?: string;
    minHeight?: string;
}
