import { useState } from "react";

import "../../styles/form.css"

function FormWhats() {

    const [message, setMessage] = useState("");

    const sendWhatsApp = (e) => {
        e.preventDefault();

        const text = `*Novo contato pelo portfólio*\n\n${message}`;
        const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER;
        const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

        window.open(url, "_blank", "noopener,noreferrer");
    };

    return (
        <form onSubmit={sendWhatsApp}>
            <label>
                Mensagem
                <textarea
                    name="message"
                    placeholder="Escreva sua mensagem aqui..."
                    required
                    aria-required="true"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
            </label>

            <div className="btn curriculo">
                <button type="submit" disabled={!message.trim()} className="btn-submit btn-whatsapp">
                    Enviar pelo WhatsApp
                </button>
            </div>
        </form>
    );
}

export default FormWhats;
