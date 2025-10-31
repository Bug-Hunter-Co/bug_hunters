import React from "react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";

interface TextareaFieldProps {
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

const TextareaField: React.FC<TextareaFieldProps> = ({
    label,
    id,
    placeholder,
    register,
    error,
    className = "",
    labelClassName = "",
    containerClassName = "",
    minHeight = "100px",
}) => {
    return (
        <div className={`flex flex-col ${containerClassName}`}>
            <label htmlFor={id} className={`font-medium mb-1 ${labelClassName}`}>
                {label}
            </label>

            <textarea
                id={id}
                {...register}
                placeholder={placeholder}
                className={`p-4 rounded-md bg-[#F4F5F0] placeholder:text-gray-800 dark:placeholder:text-[#B0B0B0] dark:bg-[#2A2A2A] resize-none`}
                style={{ minHeight }}
            />

            {error && (
                <p className="text-red-500 text-sm mt-1">{error.message}</p>
            )}
        </div>
    );
};

export default TextareaField;
