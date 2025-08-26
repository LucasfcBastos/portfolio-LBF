import './campTools.css';

function CampTools({ ferramentas }) {
  return (
    <div className="campTools">
        {ferramentas.map((ferramenta, index) => (
          <div className="types" key={index}>
            <img src={`${ferramenta.img}`} />
            <p>{ferramenta.text}</p>
          </div>
        ))}
    </div>
  );
}

export default CampTools;