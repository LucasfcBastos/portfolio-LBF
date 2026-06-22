import { useNavigate } from "react-router-dom"

import ImgUser from "../../assets/img/file.png";

import "../../styles/cards.css"

function CardProject({ url, img, title, type }) {

    const navigate = useNavigate();

    function handleKeyDown(e) {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            navigate(url);
        }
    }

    return (
        <div
            className="card redi"
            onClick={() => navigate(url)}
            onKeyDown={handleKeyDown}
            role="button"
            tabIndex={0}
            aria-label={`Ver projeto: ${title}`}
        >
            <img src={img} className="img" alt={`Imagem do projeto ${title}`} />
            <div className="text">
                <h2>{title}</h2>
                <div className="user">
                    <img src={ImgUser} alt="Lucas Bastos Franco" />
                    <p>Lucas Bastos Franco</p>
                </div>
                <div className="type">{type}</div>
            </div>
        </div>
    );
}

export default CardProject;
