import { useState } from "react";

import Header from "../components/header"
import FormEmail from "../components/form/formEmail"
import FormWhats from "../components/form/formWhats"
import Footer from "../components/footer"
import CardCertificate from "../components/cards/cards_view_certificate"
import CardProject from "../components/cards/cards_view_project"

import img from "../assets/img/file.png";

import ProjetosPessoal from '../data/ProjectPessoal'
import CertificateList from "../data/CertificateList";
import CategoriasTech from '../data/CategoryTech'
import OtherProjects from '../data/OtherProjects'

import "../styles/nav.css"
import "../styles/main.css"
import "../styles/btn.css"

const menuItems = ["Sobre", "Projeto", "Certificado", "Arte", "Contato"];

function LandingPage() {

    const [selected, setSelected] = useState("Sobre");

    function handleMenuClick(item) {
        setSelected(item);
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    return (
        <>
            <Header />

            <nav aria-label="Navegação principal">
                <div className="user">
                    <img src={img} alt="Foto de Lucas Bastos Franco" />
                    <span className="nav-name">Lucas Bastos Franco</span>
                </div>
                <div className="options">
                    <ul role="list">
                        {menuItems.map((item) => (
                            <li key={item}>
                                <button
                                    className={`nav-btn${selected === item ? " select" : ""}`}
                                    onClick={() => handleMenuClick(item)}
                                    aria-current={selected === item ? "page" : undefined}
                                >
                                    {item}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>

            <main>
                {selected === "Sobre" && (
                    <div id="sobre">
                        <div className="card me">
                            <div style={{ textAlign: "center" }}>
                                <img src={img} alt="Lucas Bastos Franco" />
                            </div>
                            <h1>Lucas Bastos Franco</h1>
                            <p>Anápolis &mdash; GO</p>
                            <p>+55 62 99332-8622</p>
                            <div className="btn curriculo">
                                <a
                                    href="https://drive.google.com/drive/folders/1your-curriculo-link"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-curriculo-link"
                                    aria-label="Baixar currículo de Lucas Bastos Franco"
                                >
                                    Currículo
                                </a>
                            </div>
                        </div>
                        <div className="card description">
                            <h2>Resumo profissional</h2>
                            <p>Estudante de Engenharia de Software (7º período) com experiência prática em desenvolvimento full stack, atuando em projetos acadêmicos e autorais nas áreas de gestão, automação e agronegócio. Possuo experiência com React, Node.js, Python, PostgreSQL e Supabase, participando de etapas como levantamento de requisitos, prototipação, desenvolvimento frontend/backend, testes e documentação. Tenho perfil analítico, aprendizado rápido e facilidade para transformar problemas reais em soluções digitais.</p>

                            <h2>Formação acadêmica</h2>
                            <CardCertificate
                                img="https://raw.githubusercontent.com/LucasfcBastos/custom_icons/main/version01/unievangelica.svg"
                                title="Bacharelado em Engenharia de Software — UniEVANGÉLICA"
                                local="2023 – 2026 (previsão)"
                            />

                            <h2>Tecnologias</h2>
                            {CategoriasTech.map((categoria) => (
                                <div key={categoria.key}>
                                    <p>{categoria.label}:</p>
                                    <div className="icons tech">
                                        {categoria.icons.map((icon) => (
                                            <img
                                                key={icon.type}
                                                className="icons"
                                                src={icon.url}
                                                alt={icon.type}
                                                title={icon.type}
                                            />
                                        ))}
                                    </div>
                                </div>
                            ))}

                            <h2>Experiência profissional</h2>
                            <CardCertificate
                                title="Assistente Operacional — Distribuidora WM"
                                local="Atuação em rotinas operacionais, controle de estoque e organização de pedidos, além do desenvolvimento de planilhas para apoio ao gerenciamento interno."
                            />
                            <CardCertificate
                                title="Assistente de Automação — Bereshit"
                                local="Atuação remota no desenvolvimento de planilhas automatizadas para controle de dados veiculares, utilizando lógica de automação e organização de dados operacionais."
                            />
                        </div>
                    </div>
                )}

                {selected === "Projeto" && (
                    <div id="projeto">
                        <h2>Projetos Pessoais</h2>
                        {ProjetosPessoal.map((projeto) => (
                            <CardProject
                                key={projeto.id}
                                url={`/view/project/${projeto.id}`}
                                img={projeto.image}
                                title={projeto.name}
                                type={projeto.type}
                            />
                        ))}
                    </div>
                )}

                {selected === "Certificado" && (
                    <div id="certificado">
                        {CertificateList.map((cert, i) => (
                            <CardCertificate
                                key={`cert-${i}`}
                                img={cert.url}
                                title={cert.title}
                                local={cert.local}
                            />
                        ))}
                    </div>
                )}

                {selected === "Arte" && (
                    <div id="arte">
                        {OtherProjects.map((item) => {
                            const url =
                                item.type === "Poema"
                                    ? `/view/poem/${item.id}`
                                    : item.type === "Jogo"
                                    ? `/view/game/${item.id}`
                                    : `/view/project/${item.id}`;
                            return (
                                <CardProject
                                    key={item.id}
                                    url={url}
                                    img={item.description.image}
                                    title={item.name}
                                    type={item.type}
                                />
                            );
                        })}
                    </div>
                )}

                {selected === "Contato" && (
                    <div id="contato">
                        <h2>Contato por E-mail</h2>
                        <FormEmail />
                        <hr />
                        <h2>Contato por WhatsApp</h2>
                        <FormWhats />
                    </div>
                )}
            </main>

            <Footer />
        </>
    );
}

export default LandingPage;
