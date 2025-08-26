import './campCertificados.css';

function campCertificados({ certificados }) {
  return (
    <div className="campCertificados">
        {certificados.map((certificado, index) => (
          <div className="types" key={index}>
            <img src={certificado.img} />
            <div>
                <p>{certificado.nome}</p>
                <footer>
                    <p>{certificado.origem}</p>
                </footer>
            </div>
          </div>
        ))}
    </div>
  );
}

export default campCertificados;