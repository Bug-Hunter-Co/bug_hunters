"use client";

import { useForm } from "react-hook-form";
import axios from "axios";
import { useState } from "react";
import InputField from "../ui/InputField";
import TextareaField from "../ui/TextTarea";

type FormData = {
  name: string;
  email: string;
  message: string;
};

export const ContactForm = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState<string | null>(null);

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    setResponseMessage(null);
    try {
      const res = await axios.post("/api/contact", data);
      setResponseMessage(res.data.message);
      reset();
    } catch (error: any) {
      setResponseMessage("Something went wrong. Please try again.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="rounded-xl flex flex-col gap-8"
    >
      <div className="flex gap-8 w-full justify-between max-sm:flex-col">
        {/* Name */}
        <InputField
          id="name"
          placeholder="Your name"
          register={register("name", { required: "Name is required" })}
          error={errors.name}
        />
        {/* Email */}
        <InputField
          id="email"
          type="email"
          placeholder="you@example.com"
          register={register("email", {
            required: "Email is required",
            pattern: { value: /^\S+@\S+$/i, message: "Invalid email" },
          })}
          error={errors.email}
        />
      </div>


      {/* Message */}
      <TextareaField
        id="message"
        placeholder="Write your message here..."
        register={register("message", { required: "Message is required" })}
        error={errors.message}
        minHeight="100px"
      />

      <button
        type="submit"
        disabled={loading}
        className="dark:bg-[#519872] bg-[#37484E] w-fit p-4 text-white py-2 rounded-md hover:scale-103 cursor-pointer transition-all disabled:bg-blue-400"
      >
        {loading ? "Enviando mensaje..." : "Enviar mensaje"}
      </button>

      {responseMessage && (
        <p className="text-center mt-2 text-sm text-gray-700 dark:text-gray-300">
          {responseMessage}
        </p>
      )}
    </form>
  );
}
