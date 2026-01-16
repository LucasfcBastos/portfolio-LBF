import Icon from '../assets/Icon.svg?react'
import Vector from '../assets/Vector.svg?react'

import stacks from '../data/MinhasStacks'
import socialLinks from '../data/SocialLinks'

import Hr from '../components/HrD'
import Forms from '../components/FormsEmail'
import IconsL from '../components/SocialIcons'
import StacksV from '../components/MysStacks'

import '../App.css'

function LandingPage() {
  return (
    <>
      <nav>
        <h1>Portfolio</h1>
        <Icon className="icon" />
      </nav>
      <div style={{padding: "1em", width: "calc(100% - 2em)"}}>
        <div id='main'>
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
        <p style={{ textAlign: 'center'}}>Engenheiro de Software em início de carreira, apaixonado por tecnologia e inovação. Experiência em projetos acadêmicos atuando como Product Owner, Product Designer, Desenvolvedor Frontend, Desenvolvedor Backend e Quality Assurance. Busco oportunidades para adquirir experiência prática e crescer junto à empresa.</p>
        <div className='myStacks'>
          {stacks.map((item) => (
            <StacksV img={item.url} type={item.type} />
          ))}
        </div>
        <Hr type="CONTATO" />
        <Forms />
        <div className='iconsSocial'>
          {socialLinks.map((item) => (
            <IconsL key={item.id} url={item.url_go} img={item.url_img} type={item.type} />
          ))}
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