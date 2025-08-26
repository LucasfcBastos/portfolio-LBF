import './campForm.css';
import { useState } from 'react';
import emailjs from 'emailjs-com';

function CampForm({ inpN, inpNH, inpE, inpEH, inpD, inpDH, sub }) {
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
      <div>
        <label>
          {inpN}
          <input
            type="text"
            name="nome"
            placeholder={inpNH}
            minLength={3}
            maxLength={50}
            required
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </label>

        <label>
          {inpE}
          <input
            type="email"
            name="email"
            placeholder={inpEH}
            required
            pattern="^[a-zA-Z0-9._%+-]+@(gmail|hotmail|outlook)\.com$"
            title="O e-mail deve terminar com @gmail.com, @hotmail.com ou @outlook.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
      </div>

      <label>
        {inpD}
        <textarea
          name="mensagem"
          placeholder={inpDH}
          minLength={10}
          maxLength={500}
          required
          value={mensagem}
          onChange={(e) => setMensagem(e.target.value)}
        />
      </label>

      <div className="button-container">
        <button type="submit">{sub}</button>
      </div>
    </form>
  );
}

export default CampForm;