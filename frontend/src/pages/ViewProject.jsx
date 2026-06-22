import { useParams, useNavigate, Link } from "react-router-dom";

import Header from "../components/header"
import Footer from "../components/footer"
import CardSaiba from "../components/cards/cards_saiba"

import img from "../assets/img/file.png";

import ProjetosPessoal from '../data/ProjectPessoal'

import "../styles/nav.css"
import "../styles/View.css"
import "../styles/Image.css"

const menuItems = [
    { label: "Oportunidade", id: "problema" },
    { label: "Solução", id: "solucao" },
    { label: "Tecnologias", id: "tecnologias" },
    { label: "Saiba Mais", id: "saiba-mais" },
];

function ViewProject() {

    const { id } = useParams();
    const navigate = useNavigate();

    const project = ProjetosPessoal.find((item) => item.id === id);

    if (!project) {
        return (
            <>
                <Header />
                <main style={{ padding: "4em 2em", textAlign: "center" }}>
                    <h1>Projeto não encontrado</h1>
                    <p>O projeto que você está procurando não existe ou foi removido.</p>
                    <Link to="/" style={{ color: "var(--color-accent)" }}>Voltar ao portfólio</Link>
                </main>
                <Footer />
            </>
        );
    }

    return (
        <>
            <Header />

            <div className="photo" style={{ "--bg-image": `url(${project.image})` }}>
                <h1>{project.name}</h1>
                <div className="photo-author">
                    <p>por</p>
                    <button className="btn voltar" onClick={() => navigate("/")}>
                        <img src={img} alt="Lucas Bastos Franco" />
                        Lucas Bastos Franco
                    </button>
                </div>
                <div className="info-project">
                    <img src={project.image} id="tela" alt={`Tela principal do projeto ${project.name}`} />
                    <div className="card description">
                        <img src={project.info.logo_url} alt={`Logo do projeto ${project.name}`} />
                        <h2>Tecnologia Principal: {project.info.main_tech}</h2>
                        <p>Setor: {project.info.sector}</p>
                        <p>Principal ODS: {project.info.sdg}</p>
                    </div>
                </div>
            </div>

            <nav className="nav-options" aria-label="Seções do projeto">
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
                <section id="problema">
                    <h2 className="title">Oportunidade Encontrada</h2>
                    <p>{project.opportunity}</p>
                </section>

                <section id="solucao">
                    <h2 className="title">Ideia de Solução</h2>
                    <p>{project.solution}</p>
                </section>

                <section id="tecnologias">
                    <h2 className="title">Tecnologias Utilizadas</h2>
                    <div className="tech-grid">
                        {project.technologies.map((tech) => (
                            <img
                                key={tech.type}
                                className="icons"
                                src={tech.url}
                                title={tech.type}
                                alt={tech.type}
                            />
                        ))}
                    </div>
                </section>

                <section id="saiba-mais">
                    <h2 className="title">Saiba Mais</h2>
                    <div className="list-saiba">
                        {project.learn_more.map((item, i) => (
                            <CardSaiba
                                key={i}
                                url={item.redirect_url}
                                img={item.url}
                                title={item.display_text}
                                type={item.redirect_text}
                            />
                        ))}
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}

export default ViewProject;
