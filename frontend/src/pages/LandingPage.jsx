import Icon from '../assets/Icon.svg?react'
import Vector from '../assets/Vector.svg?react'
import Hr from '../components/HrD'
import Forms from '../components/FormsEmail'
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
        <Hr />
        <h1 className='title'>
          CONTATO
        </h1>
        <Forms />
      </div>
    </>
  )
}

export default LandingPage