import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import "../../styles/form.css"

function FormEmail() {
    const form = useRef();
    const [status, setStatus] = useState("idle");

    const sendEmail = (e) => {
        e.preventDefault();
        setStatus("sending");

        emailjs
            .sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                form.current,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            )
            .then(() => {
                setStatus("success");
                form.current.reset();
            })
            .catch(() => {
                setStatus("error");
            });
    };

    return (
        <form ref={form} onSubmit={sendEmail} noValidate>
            <div className="center">
                <label>
                    Nome
                    <input
                        type="text"
                        name="name"
                        placeholder="Seu nome completo"
                        required
                        aria-required="true"
                    />
                </label>

                <label>
                    E-mail
                    <input
                        type="email"
                        name="email"
                        placeholder="seu@email.com"
                        required
                        aria-required="true"
                    />
                </label>
            </div>

            <label>
                Mensagem
                <textarea
                    name="message"
                    placeholder="Escreva sua mensagem aqui..."
                    required
                    aria-required="true"
                />
            </label>

            {status === "success" && (
                <p className="form-feedback success" role="status">
                    Mensagem enviada com sucesso! Em breve entrarei em contato.
                </p>
            )}
            {status === "error" && (
                <p className="form-feedback error" role="alert">
                    Erro ao enviar. Tente novamente ou entre em contato pelo WhatsApp.
                </p>
            )}

            <div className="btn curriculo">
                <button type="submit" disabled={status === "sending"} className="btn-submit">
                    {status === "sending" ? "Enviando..." : "Enviar mensagem"}
                </button>
            </div>
        </form>
    );
}

export default FormEmail;
