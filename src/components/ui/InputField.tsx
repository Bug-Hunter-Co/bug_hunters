import { InputFieldProps } from "@/types/InputFieldProps";

export const InputField = ({
    label,
    id,
    type = "text",
    placeholder,
    register,
    error,
    className = "",
    labelClassName = "",
    containerClassName = "",
}: InputFieldProps) => {
    return (
        <div className={`flex flex-col w-full ${containerClassName}`}>
            <label htmlFor={id} className={`font-medium mb-1 ${labelClassName}`}>
                {label}
            </label>

            <input
                id={id}
                type={type}
                {...register}
                placeholder={placeholder}
                className={`p-4 rounded-md bg-[#F4F5F0] placeholder:text-gray-800 dark:placeholder:text-[#B0B0B0] dark:bg-[#2A2A2A] dark:text-white ${className}`}
            />

            {error && (
                <p className="text-red-500 text-xs mt-1">{error.message}</p>
            )}
        </div>
    );
};

