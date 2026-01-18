import Icon from '../assets/Icon.svg?react'
import IconsRedi from '../components/IconsRedi'
import StacksV from '../components/MysStacks'

import Projeto from '../data/MeusProjetos'

import '../styles/Project.css'

function AboutProject() {
  return (
    <>
        <nav>
            <a href="/">Portfolio</a>
            <Icon className="icon" />
        </nav>
        <div style={{padding: "1em", width: "calc(100% - 2em)", minHeight: "calc(100dvh - (5.25em + 7.5em))", marginTop: "5.25em" }}>
            <div id='main' className='project' >
                <div className='intro'>
                    <img src={Projeto[0].nav.logo_url} />
                    <div style={{marginLeft: "8em", marginTop: "1em"}}>
                        <h1>{Projeto[0].nav.project_name}</h1>
                        <div style={{display: "flex", gap: "1em"}}>
                            <p>{Projeto[0].nav.main_tech}</p>
                            <p><strong>Setores: </strong>{Projeto[0].nav.sector}</p>
                            <p><strong>ODS: </strong>{Projeto[0].nav.sdg}</p>
                        </div>
                    </div>
                </div>
                <hr style={{marginTop: "2em"}}/>
                <div className='info'>
                    <div className='column'>
                        <img src={Projeto[0].project_image} className='project' />
                        <h3>Oportunidade</h3>
                        <p>{Projeto[0].opportunity}</p>
                        <h3>Solução</h3>
                        <p>{Projeto[0].solution}</p>
                    </div>
                    <div className='column'>
                        <h3>Ferramentas Utilizadas</h3>
                        <div className='camp'>
                            {Projeto[0].technologies.map((item) => (
                                <StacksV img={item.url} type={item.type} />
                            ))}
                        </div>
                        <h3>Saiba Mais</h3>
                        <div>
                            {Projeto[0].learn_more.map((item) => (
                                <IconsRedi key={item.type} img={item.url} text1={item.display_text} text2={item.redirect_text} redi={item.redirect_url} />
                            ))}
                        </div>
                    </div>
                </div>
                <div className='versions'>
                    <p>
                        Criado em {Projeto[0].versioning.created_at} <br/>
                        {Projeto[0].versioning.version} versões feitas <br/>
                        Ultima versão {Projeto[0].versioning.latest_version} finalizada em {Projeto[0].versioning.latest_date}
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