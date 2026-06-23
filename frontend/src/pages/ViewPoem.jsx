import { useParams, useNavigate, Link } from "react-router-dom";

import Header from "../components/header"
import Footer from "../components/footer"

import img from "../assets/img/file.png";

import OtherProjects from '../data/OtherProjects'

import "../styles/nav.css"
import "../styles/View.css"
import "../styles/Image.css"

function ViewPoem() {

    const { id } = useParams();
    const navigate = useNavigate();

    const poem = OtherProjects.find((item) => item.id === id);

    if (!poem) {
        return (
            <>
                <Header />
                <main style={{ padding: "4em 2em", textAlign: "center" }}>
                    <h1>Poema não encontrado</h1>
                    <Link to="/" style={{ color: "var(--color-accent)" }}>Voltar ao portfólio</Link>
                </main>
                <Footer />
            </>
        );
    }

    const menuItems = poem.description?.poema?.map((item) => ({
        label: `Poema ${item.id}`,
        id: `poema-${item.id}`,
    })) ?? [];

    return (
        <>
            <Header />

            <div className="photo" style={{ "--bg-image": `url(${poem.description.image})` }}>
                <h1>{poem.name}</h1>
                <div className="photo-author">
                    <p>por</p>
                    <button className="btn voltar" onClick={() => navigate("/")}>
                        <img src={img} alt="Lucas Bastos Franco" />
                        Lucas Bastos Franco
                    </button>
                </div>
                <div className="info-project" style={{ justifyContent: "center" }}>
                    <video id="tela" controls autoPlay loop >
                        <source src={poem.description.video} type="video/mp4" />
                        Seu navegador não suporta vídeo.
                    </video>
                </div>
            </div>

            <nav className="nav-options" aria-label="Poemas">
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
                {poem.description?.poema?.map((item) => (
                    <section key={item.id} id={`poema-${item.id}`}>
                        <h2 className="title">{item.titulo}</h2>

                        {item.verse.length === 1 ? (
                            <p className="poem-text">{item.verse[0].text}</p>
                        ) : (
                            item.verse.map((ver, index) => (
                                <div key={index}>
                                    <h3>Verso {index + 1}</h3>
                                    <p className="poem-text">{ver.text}</p>
                                </div>
                            ))
                        )}
                    </section>
                ))}
            </main>

            <Footer />
        </>
    );
}

export default ViewPoem;
