import { useParams, useNavigate, Link } from "react-router-dom";

import Header from "../components/header"
import Footer from "../components/footer"

import img from "../assets/img/file.png";

import OtherProjects from '../data/OtherProjects'

import "../styles/nav.css"
import "../styles/View.css"
import "../styles/Image.css"

function ViewGame() {

    const { id } = useParams();
    const navigate = useNavigate();

    const game = OtherProjects.find((item) => item.id === id);

    if (!game) {
        return (
            <>
                <Header />
                <main style={{ padding: "4em 2em", textAlign: "center" }}>
                    <h1>Jogo não encontrado</h1>
                    <Link to="/" style={{ color: "var(--color-accent)" }}>Voltar ao portfólio</Link>
                </main>
                <Footer />
            </>
        );
    }

    const menuItems = game.description?.info?.map((item) => ({
        label: item.titulo,
        id: `info-${item.id}`,
    })) ?? [];

    return (
        <>
            <Header />

            <div className="photo" style={{ "--bg-image": `url(${game.description.image})` }}>
                <h1>{game.name}</h1>
                <div className="photo-author">
                    <p>por</p>
                    <button className="btn voltar" onClick={() => navigate("/")}>
                        <img src={img} alt="Lucas Bastos Franco" />
                        Lucas Bastos Franco
                    </button>
                </div>
            </div>

            <nav className="nav-options" aria-label="Seções do jogo">
                <div className="options">
                    <ul role="list">
                        {menuItems.map((item) => (
                            <li key={item.id}>
                                <a href={`#${item.id}`}>{item.label}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>

            <main id="view">
                {game.description?.info?.map((item) => (
                    <section key={item.id} id={`info-${item.id}`}>
                        <h2 className="title">{item.titulo}</h2>
                        <p className="poem-text">{item.text}</p>
                    </section>
                ))}
            </main>

            <Footer />
        </>
    );
}

export default ViewGame;
