import { useParams } from "react-router-dom";
import Icon from '../assets/Icon.svg?react'
import IconsRedi from '../components/IconsRedi'
import StacksV from '../components/MysStacks'

import Date from '../data/MeusProjetos'

import '../styles/Project.css'

function AboutProject() {
    const { id } = useParams();

    const project = Date.find(
        (item) => item.id === Number(id)
    );

    if (!project) {
        return <h2>Projeto não encontrado</h2>;
    }
    return (
        <>
            <nav>
                <a href="/">Portfolio</a>
                <Icon className="icon" />
            </nav>
            <div style={{padding: "1em", width: "calc(100% - 2em)", minHeight: "calc(100dvh - (5.25em + 7.5em))", marginTop: "5.25em" }}>
                <div id='main' className='project' >
                    <div className='intro'>
                        <img src={project.nav.logo_url} />
                        <div style={{marginLeft: "8em", marginTop: "1em"}}>
                            <h1>{project.nav.project_name}</h1>
                            <div style={{display: "flex", gap: "1em"}}>
                                <p>{project.nav.main_tech}</p>
                                <p><strong>Setores: </strong>{project.nav.sector}</p>
                                <p><strong>ODS: </strong>{project.nav.sdg}</p>
                            </div>
                        </div>
                    </div>
                    <hr style={{marginTop: "2em"}}/>
                    <div className='info'>
                        <div className='column'>
                            <img src={project.project_image} className='project' />
                            <h3>Oportunidade</h3>
                            <p>{project.opportunity}</p>
                            <h3>Solução</h3>
                            <p>{project.solution}</p>
                        </div>
                        <div className='column'>
                            <h3>Ferramentas Utilizadas</h3>
                            <div className='camp'>
                                {project.technologies.map((item) => (
                                    <StacksV img={item.url} type={item.type} />
                                ))}
                            </div>
                            <h3>Saiba Mais</h3>
                            <div>
                                {project.learn_more.map((item) => (
                                    <IconsRedi key={item.type} img={item.url} text1={item.display_text} text2={item.redirect_text} redi={item.redirect_url} />
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className='versions'>
                        <p>
                            Criado em {project.versioning.created_at} <br/>
                            {project.versioning.version} versões feitas <br/>
                            Ultima versão {project.versioning.latest_version} finalizada em {project.versioning.latest_date}
                        </p>
                    </div>
                </div>
            </div>
            <footer>
                <p>
                    ©2026 - Lucas Bastos<br/>
                    @lucasfcbastos - Todos os direitos reservados<br/>
                    lucas.software.engineering@gmail.com
                </p>
            </footer>
        </>
    )
}

export default AboutProject