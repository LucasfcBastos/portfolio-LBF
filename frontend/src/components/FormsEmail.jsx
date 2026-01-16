import { useState } from 'react';
import emailjs from 'emailjs-com';
import '../styles/Forms.css'

function FormsEmail() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [mensagem, setMensagem] = useState('');

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm(
            'service_owr9o3g',
            'template_jpr661i',
            e.target,
            'VgiPFQ9INYNbkPLIi'
        )
        
        .then((result) => {
            alert("Mensagem enviada com sucesso!");
            setNome('');
            setEmail('');
            setMensagem('');
        }, (error) => {
            alert("Erro ao enviar: " + error.text);
        });
    }
    
    return (
        <form onSubmit={sendEmail}>
            <div className='inputs'>
                <label>
                    Nome
                    <input
                        type="text"
                        name="nome"
                        placeholder='Digita o seu nome'
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                    />
                </label>
                <label>
                    Email
                    <input
                        type="email"
                        name="email"
                        placeholder='Digita o seu email'
                        value={email}
                        onChange={(e) => setNome(e.target.value)}
                    />
                </label>
            </div>
            <label>
                Mensagem
                <textarea
                    type="text"
                    name="mensagem"
                    placeholder='Digita o sua mensagem'
                    value={mensagem}
                    onChange={(e) => setNome(e.target.value)}
                />
            </label>
            <div className="button-container">
                <button type="submit">Enviar</button>
            </div>
        </form>
    )
}

export default FormsEmail