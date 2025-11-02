"use client";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { InputField } from "../ui/InputField";
import { TextareaField } from "../ui/TextTarea";
import { FormDataProps } from "@/types/FormData";
import styles from "@/styles/scroll.module.css";
import { font_paragraph } from "@/styles/fonts";

interface ContactFormProps {
  visible?: boolean;      // recibe si el formulario está visible
  startIndex?: number;    // índice base para calcular delays
}

export const ContactForm = ({ visible = false, startIndex = 0 }: ContactFormProps) => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormDataProps>();
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState<string | null>(null);

  const onSubmit = async (data: FormDataProps) => {
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

  // helper para generar estilo de delay por índice
  const delayStyle = (index: number) => ({ transitionDelay: `${(startIndex + index) * 0.14}s` });

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="rounded-xl flex flex-col gap-8"
    >
      <div className="flex gap-8 w-full justify-between max-sm:flex-col">
        {/* Name */}
        <div className={`${styles.cardReveal} ${visible ? styles.visible : ""} w-full`} style={delayStyle(0)}>
          <InputField
            id="name"
            placeholder="Tu nombre"
            register={register("name", { required: "Nombre es requerido" })}
            error={errors.name}
          />
        </div>

        {/* Email */}
        <div className={`${styles.cardReveal} ${visible ? styles.visible : ""} w-full`} style={delayStyle(1)}>
          <InputField
            id="email"
            type="email"
            placeholder="tu@correo.com"
            register={register("email", {
              required: "Email es querido",
              pattern: { value: /^\S+@\S+$/i, message: "Invalid email" },
            })}
            error={errors.email}
          />
        </div>
      </div>

      {/* Message */}
      <div className={`${styles.cardReveal} ${visible ? styles.visible : ""}`} style={delayStyle(2)}>
        <TextareaField
          id="message"
          placeholder="Deja tu mensaje aqui..."
          register={register("message", { required: "Mensaje es requerido" })}
          error={errors.message}
          minHeight="150px"
        />
      </div>

      <div className={`${styles.cardReveal} ${visible ? styles.visible : ""}`} style={delayStyle(3)}>
        <button
          type="submit"
          disabled={loading}
          className="dark:bg-[#519872] bg-[#37484E] w-fit p-4 text-white py-2 rounded-md hover:scale-103 cursor-pointer transition-all disabled:bg-blue-400"
        >
          {loading ? "Enviando mensaje..." : "Enviar mensaje"}
        </button>
      </div>

      {responseMessage && (
        <div className={`${styles.cardReveal} ${visible ? styles.visible : ""}`} style={delayStyle(4)}>
          <p className="text-center mt-2 text-sm text-gray-700 dark:text-gray-300">
            {responseMessage}
          </p>
        </div>
      )}
    </form>
  );
};
