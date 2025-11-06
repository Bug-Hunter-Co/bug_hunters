"use client";
import { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { InputField, TextareaField } from "@ui"; // Reemplaza esto con tu componente
import ReCAPTCHA from "react-google-recaptcha"; // Importación para v2
import styles from "@/styles/scroll.module.css"; // Ajusta según tu estructura
import { FormDataProps } from "@/types/FormData"; // Asegúrate de que este tipo exista
import axios from "axios";

interface ContactFormProps {
  visible?: boolean;
  startIndex?: number;
}

export const ContactForm = ({ visible = false, startIndex = 0 }: ContactFormProps) => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormDataProps>();
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState<string | null>(null);
  const recaptchaRef = useRef<ReCAPTCHA>(null); // Ref para el componente ReCAPTCHA

  const onSubmit = async (data: FormDataProps) => {
    setLoading(true);
    setResponseMessage(null);

    const recaptchaValue = recaptchaRef.current?.getValue();
    if (!recaptchaValue) {
      setResponseMessage("Por favor, completa el reCAPTCHA.");
      setLoading(false);
      return;
    }

    try {
      const formData = { ...data, recaptchaToken: recaptchaValue };

      const res = await axios.post("/api/contact", formData);

      setResponseMessage(res.data.message);
      reset();
      recaptchaRef.current?.reset();
    } catch (error: any) {
      setResponseMessage("Hubo un error. Intenta de nuevo.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="rounded-xl flex flex-col gap-8">
      <div className="grid grid-cols-2 gap-8 w-full max-sm:flex max-sm:flex-col">
        {/* Name */}
        <div className={`${styles.cardReveal} ${visible ? styles.visible : ""}`} style={{ transitionDelay: "0s" }}>
          <InputField
            id="name"
            placeholder="Tu nombre"
            register={register("name", { required: "Nombre es requerido" })}
            error={errors.name}
            className="w-full"
          />
        </div>

        {/* Email */}
        <div className={`${styles.cardReveal} ${visible ? styles.visible : ""}`} style={{ transitionDelay: "0.14s" }}>
          <InputField
            id="email"
            type="email"
            placeholder="tu@correo.com"
            register={register("email", {
              required: "Email es requerido",
              pattern: { value: /^\S+@\S+$/i, message: "Email inválido" },
            })}
            error={errors.email}
          />
        </div>
      </div>

      {/* Message */}
      <div className={`${styles.cardReveal} ${visible ? styles.visible : ""}`} style={{ transitionDelay: "0.28s" }}>
        <TextareaField
          id="message"
          placeholder="Deja tu mensaje aqui..."
          register={register("message", { required: "Mensaje es requerido" })}
          error={errors.message}
        />
      </div>


      <div className={`${styles.cardReveal} ${visible ? styles.visible : ""}`} style={{ transitionDelay: "0.35s" }}>
        <ReCAPTCHA
          ref={recaptchaRef}
          sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""}
          onChange={(value) => {

          }}
        />
      </div>

      <div className={`${styles.cardReveal} ${visible ? styles.visible : ""}`} style={{ transitionDelay: "0.42s" }}>
        <button
          type="submit"
          disabled={loading}
          className="dark:bg-[#519872] bg-[#37484E] w-fit p-4 text-white py-2 rounded-md hover:scale-105 cursor-pointer transition-all disabled:bg-blue-400 min-h-[44px] min-w-[44px] flex items-center justify-center"
        >
          {loading ? "Enviando..." : "Enviar mensaje"}
        </button>
      </div>

      {responseMessage && (
        <div className={`${styles.cardReveal} ${visible ? styles.visible : ""}`} style={{ transitionDelay: "0.56s" }}>
          <p className="text-center mt-2 text-sm text-gray-700 dark:text-gray-300">
            {responseMessage}
          </p>
        </div>
      )}
    </form>
  );
};
