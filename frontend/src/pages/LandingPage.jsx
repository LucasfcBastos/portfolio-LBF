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
          <p style={{ textAlign: 'center'}}>Engenheiro de Software em início de carreira, apaixonado por tecnologia e inovação. Experiência em projetos acadêmicos atuando como Product Owner, Product Designer, Desenvolvedor Frontend, Desenvolvedor Backend e Quality Assurance. Busco oportunidades para adquirir experiência prática e crescer junto à empresa.</p>
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