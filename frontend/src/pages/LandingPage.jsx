import Icon from '../assets/Icon.svg?react'
import Vector from '../assets/Vector.svg?react'

import ListTech from '../data/TechnologyLists'
import ListProjects from '../data/PersonalProjects'
import ListAcademic from '../data/AcademicProjects'
import SocialMediaLinks from '../data/SocialMediaLinks'

import Hr from '../components/Landing/SectionLines'
import Stacks from '../components/TechnologyIcons'
import CardsPersonal from '../components/Landing/CardsPersonal'
import CardsAcademic from '../components/Landing/CardsAcademic'
import Forms from '../components/Landing/FormsEmail'
import Social from '../components/Landing/IconsSocial'

import '../styles/Nav.css'
import '../App.css'

function LandingPage() {
  return (
    <>
      <nav>
        <h1>Portfolio</h1>
        <Icon className="icon" />
      </nav>
      <div style={{padding: "1em", width: "calc(100% - 2em)", minHeight: "calc(100dvh - (5.25em + 7.5em))", marginTop: "5.25em" }}>
        <div id='main' className='intro'>
          <div className='img_photo'>
            <Vector className="vec_photo" />
          </div>
          <div style={{textAlign: "center", alignContent: "center"}}>
            <span>Olá mundo, eu sou:</span><br/>
            <span className='textAlter'>LUCAS BASTOS FRANCO</span><br/>
            <span>Eng. de Software</span>
          </div>
        </div>
        <Hr type="SOBRE MIM" />
        <div id='stacks'>
          <p style={{ textAlign: 'center'}}>Engenheiro de Software em início de carreira, apaixonado por tecnologia e inovação. Possuo experiência em projetos acadêmicos atuando em diferentes papéis, como Product Owner, Product Designer, Desenvolvedor Frontend, Desenvolvedor Backend e Quality Assurance, o que me proporcionou uma visão ampla e integrada de todo o ciclo de desenvolvimento de software. Busco oportunidades para adquirir experiência prática, gerar impacto real e crescer junto à empresa.</p>
          <p style={{ textAlign: 'center'}}>Tenho forte capacidade de comunicação, conseguindo explicar conceitos técnicos de forma clara para públicos não técnicos, além de atuar de forma colaborativa em equipes multidisciplinares. Destaco-me pela organização, priorização de tarefas, documentação objetiva, adaptação a mudanças e aprendizado rápido. Possuo perfil analítico e criativo para resolução de problemas, tomada de decisão e identificação de causas raiz, além de experiência em ambientes que utilizam metodologias ágeis e comunicação assíncrona.</p>
          <p style={{ textAlign: 'center'}}>Além da área técnica, atuo como organizador e líder de eventos recorrentes, lidando com equipes e ambientes de alta pressão. Essa experiência fortaleceu minhas habilidades de liderança, mediação de conflitos, gestão de tempo e organização de agendas. Tenho vivência na resolução de imprevistos ao vivo, adaptação de conteúdos, gestão de expectativas e manutenção do engajamento do público por longos períodos, sempre mantendo o foco em resultados e colaboração.</p>
          <div className='camp-stacks'>
            {ListTech.map((item) => (
              <Stacks img={item.url} type={item.type} />
            ))}
          </div>
        </div>
        <Hr type="PROJETOS" />
        <div id='projects'>
          <div className='camp-academic'>
            {ListAcademic.map((item) => (
              <CardsAcademic key={item.id} img={item.url_img} name={item.name} url={item.redirect_url} />
            ))}
          </div>
          <div className='camp-personal'>
            {ListProjects.map((item) => (
              <CardsPersonal key={item.id} img={item.project_image} name={item.nav.project_name} id={item.id} />
            ))}
          </div>
        </div>
        <Hr type="CONTATO" />
        <div id='social'>
          <Forms />
          <div className='iconsSocial'>
            {SocialMediaLinks.map((item) => (
              <Social key={item.id} url={item.redirect_url} img={item.url_img} type={item.type} />
            ))}
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

export default LandingPage