"use client";

import { useForm } from "react-hook-form";
import axios from "axios";
import { useState } from "react";

type FormData = {
  name: string;
  email: string;
  message: string;
};

export function ContactForm() {
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
      className="max-w-md mx-auto bg-gray-100 dark:bg-[#2A2A2A] p-6 rounded-2xl shadow-md flex flex-col gap-4"
    >
      <h2 className="text-2xl font-semibold text-center mb-2">Contact Us</h2>

      {/* Name */}
      <div className="flex flex-col">
        <label htmlFor="name" className="font-medium mb-1">Name</label>
        <input
          id="name"
          {...register("name", { required: "Name is required" })}
          className="p-2 border rounded-md bg-white dark:bg-[#1E1E1E] dark:text-white"
          placeholder="Your name"
        />
        {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
      </div>

      {/* Email */}
      <div className="flex flex-col">
        <label htmlFor="email" className="font-medium mb-1">Email</label>
        <input
          id="email"
          type="email"
          {...register("email", {
            required: "Email is required",
            pattern: { value: /^\S+@\S+$/i, message: "Invalid email" },
          })}
          className="p-2 border rounded-md bg-white dark:bg-[#1E1E1E] dark:text-white"
          placeholder="you@example.com"
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
      </div>

      {/* Message */}
      <div className="flex flex-col">
        <label htmlFor="message" className="font-medium mb-1">Message</label>
        <textarea
          id="message"
          {...register("message", { required: "Message is required" })}
          className="p-2 border rounded-md bg-white dark:bg-[#1E1E1E] dark:text-white min-h-[100px]"
          placeholder="Write your message here..."
        />
        {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
      </div>

      <button
        type="submit"
        disabled={loading}
        className="bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-all disabled:bg-blue-400"
      >
        {loading ? "Sending..." : "Send"}
      </button>

      {responseMessage && (
        <p className="text-center mt-2 text-sm text-gray-700 dark:text-gray-300">
          {responseMessage}
        </p>
      )}
    </form>
  );
}
