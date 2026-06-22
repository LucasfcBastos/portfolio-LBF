import "../../styles/cards.css"

function CardSaiba({ url, img, title, type }) {
    return (
        <div className="card saiba">
            {img && <img src={img} alt={title} className="img" />}
            <div className="text">
                <h2>{title}</h2>
                <a href={url} target="_blank" rel="noopener noreferrer">
                    {type}
                </a>
            </div>
        </div>
    );
}

export default CardSaiba;
