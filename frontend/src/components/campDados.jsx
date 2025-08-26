import './campDados.css';

function CampDados({ dados }) {
  return (
    <div className="campDados">
        {dados.map((dado, index) => (
          <div className="types" key={index}>
            <p>{dado.tipo}</p>
            <p>{dado.quantidade}</p>
          </div>
        ))}
    </div>
  );
}

export default CampDados;