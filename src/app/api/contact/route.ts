import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import axios from "axios";


export async function POST(req: Request) {
  try {
    const { name, email, message, recaptchaToken } = await req.json();

    // Validar campos obligatorios
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Faltan campos obligatorios" },
        { status: 400 }
      );
    }

    // Validar token de reCAPTCHA
    if (!recaptchaToken) {
      console.error("Token de reCAPTCHA faltante");
      return NextResponse.json(
        { success: false, error: "El token de reCAPTCHA es obligatorio" },
        { status: 400 }
      );
    }

    const secretKey = process.env.RECAPTCHA_SECRET_KEY;
    if (!secretKey) {
      console.error("RECAPTCHA_SECRET_KEY no configurada");
      return NextResponse.json(
        { success: false, error: "Configuración del servidor incompleta" },
        { status: 500 }
      );
    }

    let recaptchaResponse;
    try {
      recaptchaResponse = await axios.post(
        "https://www.google.com/recaptcha/api/siteverify",
        new URLSearchParams({
          secret: secretKey,
          response: recaptchaToken,
        }).toString(),
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        }
      );
    } catch (axiosError: any) {
      console.error("Error al verificar reCAPTCHA:", axiosError.response?.data || axiosError.message);
      return NextResponse.json(
        { success: false, error: "Error al verificar reCAPTCHA" },
        { status: 500 }
      );
    }

    if (!recaptchaResponse.data.success) {
      console.error("Verificación de reCAPTCHA fallida:", recaptchaResponse.data);
      return NextResponse.json(
        { success: false, error: "Verificación de reCAPTCHA fallida" },
        { status: 400 }
      );
    }


    const emailUser = process.env.EMAIL_USER;
    const emailPass = process.env.EMAIL_PASS;
    if (!emailUser || !emailPass) {
      console.error("EMAIL_USER o EMAIL_PASS no configurados");
      return NextResponse.json(
        { success: false, error: "Configuración del servidor incompleta" },
        { status: 500 }
      );
    }


    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: emailUser,
        pass: emailPass,
      },
    });

    try {
      await transporter.verify();
    } catch (verifyError: any) {
      console.error("Error al verificar transporter:", verifyError);
      return NextResponse.json(
        { success: false, error: "Error de configuración de email" },
        { status: 500 }
      );
    }


    const mailOptions = {
      from: emailUser,
      to: emailUser,
      subject: `Nuevo mensaje de ${name}`,
      text: `
        Nombre: ${name}
        Correo: ${email}

        Mensaje:
        ${message}
      `,
    };

    try {
      await transporter.sendMail(mailOptions);
    } catch (sendError: any) {
      console.error("Error al enviar email:", sendError);
      return NextResponse.json(
        { success: false, error: "Error al enviar el correo" },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: " Correo enviado correctamente.",
    });
  } catch (error: any) {
    console.error("Error general:", error);
    return NextResponse.json(
      { success: false, error: process.env.NODE_ENV !== "production" ? error.message : "Error interno del servidor" },
      { status: 500 }
    );
  }
}
