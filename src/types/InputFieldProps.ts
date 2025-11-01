import { FieldError, UseFormRegisterReturn } from "react-hook-form";

export interface InputFieldProps {
    label?: string;
    id: string;
    type?: string;
    placeholder?: string;
    register: UseFormRegisterReturn;
    error?: FieldError;
    className?: string;
    labelClassName?: string;
    containerClassName?: string;
}