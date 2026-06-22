import "../../styles/cards.css"

function CardCertificate({ img, title, local }) {
    return (
        <div className="card certif">
            {img && <img src={img} alt={`Logo de ${local || title}`} className="img" />}
            <div className="text">
                <h2>{title}</h2>
                {local && <p>{local}</p>}
            </div>
        </div>
    );
}

export default CardCertificate;
