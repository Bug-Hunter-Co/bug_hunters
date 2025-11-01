import React from "react";
import { TextareaFieldProps } from "@/types/TextareaFieldProps";

export const TextareaField: React.FC<TextareaFieldProps> = ({
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
                <p className="text-red-500 text-xs mt-1">{error.message}</p>
            )}
        </div>
    );
};
