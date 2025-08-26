import { useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";

import CampDados from "../components/campDados";
import CampTools from "../components/campTools";
import CampStartup from "../components/campStartup";
import CampProjects from "../components/campProjects";
import CampCertificados from "../components/campCertificados";
import CampForm from "../components/campForm";
import ButtomIcon from "../components/buttomIcon";

import lucasDark from '../imgs/lucas-dark.png';
import iconLucas from '../imgs/logo-dark.svg';
import lucasLight from '../imgs/lucas-light.png';

import BD from '../imgs/startups/BD.jpg';
import RV from '../imgs/startups/RV.jpg';
import RAS from '../imgs/startups/RAS.jpg';

import P1 from '../imgs/projects/project1.png';
import P2 from '../imgs/projects/project2.png';
import P3 from '../imgs/projects/project3.png';
import P4 from '../imgs/projects/project4.png';
import P5 from '../imgs/projects/project5.png';
import P6 from '../imgs/projects/project6.png';
import P7 from '../imgs/projects/project7.png';
import P8 from '../imgs/projects/project8.png';
import P9 from '../imgs/projects/project9.png';

import UniEvangelica from '../imgs/Uni.png';

import LogoUni from '../imgs/logos/LogoUni.png';
import LogoDio from '../imgs/logos/LogoDio.png';
import LogoMicro from '../imgs/logos/LogoMicro.png';
import LogoScrum from '../imgs/logos/LogoScrum.png';
import LogoSenar from '../imgs/logos/LogoSenar.png';
import LogoCampos from '../imgs/logos/LogoCampos.png';

import './App.css';

function Es() {
  const { theme, setTheme } = useContext(ThemeContext);
  const navigate = useNavigate();
  const location = useLocation();

  const currentLang = location.pathname.split("/")[1] || "es";

  const themeImage = theme === "dark" ? lucasDark : lucasLight;

  const handleLangChange = (e) => {
    const newLang = e.target.value;
    if (newLang !== currentLang) {
      navigate(`/${newLang}`);
    }
  };

  return (
    <div>
      <div className='menu'>
        <select value={theme} onChange={(e) => setTheme(e.target.value)}>
          <option value="dark">MODO OSCURO</option>
          <option value="light">MODO CLARO</option>
        </select>
        <img src={iconLucas} />
        <select value={currentLang} onChange={handleLangChange}>
          <option value="pt">PT</option>
          <option value="en">EN</option>
          <option value="es">ES</option>
        </select>
      </div>

      <div id="intro">

        <div className="introContent">
          <img src={themeImage} />
          <div className="textIntro">
            <h1>Hola mundo, soy:</h1>
            <h1 style={{ color: 'var(--primary)' }}>LUCAS BASTOS FRANCO</h1>
            <h1>ING. DE SOFTWARE</h1>
            <div className="button-container">
              <a href="/LucasBastosFranco_CVes.pdf" download>
                <button>Download CV</button>
              </a>
              <a href="https://wa.me/5562984991644" target="_blank" rel="noopener noreferrer">
                <button>Ponerse en Contacto</button>
              </a>
            </div>
          </div>
        </div>

        <CampDados dados={[
          { tipo: "CERTIFICADOS", quantidade: 35 },
          { tipo: "SOFT SKILLS", quantidade: 9 },
          { tipo: "EXPERIENCIA", quantidade: 0 },
        ]} />

      </div>

      <div id="sobre" className="topicos">
        <h1>ACERCA DE MÍ</h1>
        <p>Ingeniero de software en inicio de carrera, apasionado por la tecnología y la innovación. Experiencia en proyectos académicos como Product Owner, Product Designer, Frontend, Backend y Quality Assurance. Busco oportunidades para adquirir experiencia práctica y crecer junto con la empresa.</p>
      </div>

      <div id="habilidades" className="topicos">
        <h1>HABILIDADES TÉCNICAS</h1>
        <CampTools ferramentas={[
          { img: 'https://www.treinarminas.com.br/wp-content/uploads/2020/08/Icone_Excel.png', text: 'Excel' },
          { img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Microsoft_Office_Word_%282019–present%29.svg/2203px-Microsoft_Office_Word_%282019–present%29.svg.png', text: 'Word' },
          { img: 'https://cdn-icons-png.flaticon.com/512/2621/2621327.png', text: 'Scrum' },
          { img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/notion/notion-original.svg', text: 'Notion' },
          { img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/trello/trello-original.svg', text: 'Trello' },
          { img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/figma/figma-original.svg', text: 'Figma' },
          { img: 'https://files.readme.io/17d4a23-miro-logo-color-square.png', text: 'Miro' },
          { img: 'https://img.icons8.com/?size=512&id=117557&format=png', text: 'PowerPoint' },
          { img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg', text: 'Git' },
          { img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg', text: 'GitHub' },
          { img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg', text: 'HTML' },
          { img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg', text: 'CSS' },
          { img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg', text: 'JavaScript' },
          { img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg', text: 'React' },
          { img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg', text: 'Node.js' },
          { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-original.svg', text: 'SQL server' },
          { img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg', text: 'Python' },
          { img: 'https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/3/django-icon-ozb2brnujb9dunjyx3d9xe.png/django-icon-p0v5p3t0ixxd5d03b6zt.png?_a=DATAg1AAZAA0', text: 'Django' },
          { img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg', text: 'Java' },
          { img: 'https://img.icons8.com/color/600/c-programming.png', text: 'C' },
          { img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Gnu-octave-logo.svg/2048px-Gnu-octave-logo.svg.png', text: 'GNU Octave' },
        ]} />
      </div>

      <div id="projetos" className="topicos">
        <h1>PROYECTOS</h1>
        <p style={{ marginBlockStart: '1em', marginBlockEnd: '1em' }}>Proyectos Académicos:</p>
        <CampStartup startup={[
          { nome: 'BYTE DONTO', descricao: 'Facilita la comunicación entre clínicas y pacientes, reduciendo las faltas y mejorando el seguimiento de los tratamientos.', img: BD, tools: ['Notion', 'Figma', 'React', 'NodeJS', 'Python', 'IA'], helf: 'INSTAGRAM', instagram: 'https://www.instagram.com/bytedonto' },
          { nome: 'ROTA VERDE', descricao: 'Optimiza las rutas de recogida selectiva para reducir costes y aumentar la eficiencia operativa de las cooperativas.', img: RV, tools: ['Word', 'Figma', 'React Native', 'Python'], helf: 'INSTAGRAM', instagram: 'https://www.instagram.com/rota_verde_' },
          { nome: 'R.A.S', descricao: 'Permite rastrear el ciclo de vida del ganado y gestionar la documentación sanitaria de forma fiable y automatizada.', img: RAS, tools: ['Figma', 'React', 'Java', 'Spring Boot', 'IoT'], helf: 'INSTAGRAM', instagram: 'https://www.instagram.com/squad_r.a.s' },
        ]} />
        <p style={{ marginBlockStart: '1em', marginBlockEnd: '1em' }}>Proyectos Personales:</p>
        <CampProjects projects={[
          { nome: 'Happy Paws', img: P1, helf: 'GITHUB', github: 'https://github.com/LucasfcBastos/Happy-Paws' },
          { nome: 'Enigma of Fear', img: P2, helf: 'GITHUB', github: 'https://github.com/LucasfcBastos/Enigma-of-Fear' },
          { nome: 'Landing Page RAS', img: P3, helf: 'GITHUB', github: 'https://github.com/LucasfcBastos/Landing-Page-RAS' },
          { nome: 'Field X', img: P4, helf: 'GITHUB', github: 'https://github.com/LucasfcBastos/Field_X' },
          { nome: 'Deltarune Kart World', img: P5, helf: 'GITHUB', github: 'https://github.com/LucasfcBastos/DeltaruneKartWorld' },
          { nome: 'Bereshit', img: P6, helf: 'GITHUB', github: 'https://github.com/LucasfcBastos/bereshit' },
          { nome: 'Smash of Campus', img: P7, helf: 'GITHUB', github: 'https://github.com/LucasfcBastos/GameDev_Smash-of-Campus' },
          { nome: 'Carrinho de Compras', img: P8, helf: 'GITHUB', github: 'https://github.com/LucasfcBastos/Carrinho-de-Compras-da-LOLJA-com-Node.js' },
          { nome: 'Analise de Folhas', img: P9, helf: 'GITHUB', github: 'https://github.com/LucasfcBastos/D.A.S-AnaliseDeFolhas' },
        ]} />
      </div>

      <div id="educacao" className="topicos">
        <h1>EDUCACIÓN</h1>
        <p>FORMACIÓN:</p>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <p>Actualmente, estoy cursando Ingeniería de Software en la Universidad Evangélica de Goiás (UniEVANGÉLICA), en Anápolis-GO. Inicié la graduación en febrero de 2023 y la previsión de conclusión es para diciembre de 2026. Actualmente, estoy en el 6º período, con aproximadamente un año restante para finalizar el curso.</p>
          <img style={{ width: '20em', height: 'auto', marginRight: '3em' }} src={UniEvangelica} />
        </div>
        <p style={{ marginBlockStart: '1em', marginBlockEnd: '1em' }}>CERTIFICACIÓN:</p>
        <CampCertificados certificados={[
          { img: LogoUni, nome: 'Curso básico de diseño de interfaces con Figma', origem: 'eventoscae.aee.edu.br' },
          { img: LogoUni, nome: 'Dominando el Chat GPT', origem: 'eventoscae.aee.edu.br' },
          { img: LogoMicro, nome: 'Introducción al desarrollo para la Web usando Visual Studio Code', origem: 'learn.microsoft.com' },
          { img: LogoScrum, nome: 'Certificado en Fundamentos de Scrum', origem: 'scrumstudy.com' },
          { img: LogoDio, nome: 'Control de versiones de código con Git y GitHub', origem: 'dio.me' },
          { img: LogoCampos, nome: 'Maratón del Desafío Agrostartup 2025', origem: 'eventos.sistemafaeg.org.br' },
          { img: LogoSenar, nome: 'Excel Intermedio', origem: 'ead.senargo.org.br' },
          { img: LogoSenar, nome: 'Word Intermedio', origem: 'ead.senargo.org.br' },
          { img: LogoCampos, nome: 'Formación empresarial - Desafío Agrostartup 2025', origem: 'eventos.sistemafaeg.org.br' },
          { img: LogoDio, nome: 'Modularización de Proyectos Node.js con CommonJS', origem: 'dio.me' },
          { img: LogoDio, nome: 'Modularización con EcmaScript Modules', origem: 'dio.me' },
        ]} />
      </div>

      <div id="contatos" className="topicos">
        <h1>CONTACTOS</h1>
        <CampForm inpN='Nombre' inpNH='Introduzca su nombre' inpE='Correo electrónico' inpEH='Introduzca su correo electrónico' inpD='Mensaje' inpDH='Introduzca su mensaje' sub='Enviar' />
      </div>

      <div className="box redes">
        <ButtomIcon btn={[
          { img: 'https://cdn-icons-png.flaticon.com/512/3536/3536445.png', url: 'https://wa.me/5562984991644' },
          { img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Instagram-Icon.png/960px-Instagram-Icon.png', url: 'https://www.instagram.com/lucas.bf_gts' },
          { img: 'https://static.vecteezy.com/system/resources/previews/016/716/470/non_2x/linkedin-icon-free-png.png', url: 'https://www.linkedin.com/in/lucas-bastos-811a172a7' },
          { img: 'https://cdn-icons-png.flaticon.com/512/25/25231.png', url: 'https://github.com/LucasfcBastos' },
          { img: 'https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png', url: 'https://www.youtube.com/@Lucas_Furango' },
        ]} />    
      </div>
      <div className="box deg"></div>
      <div className="box text">
        <p>@lucasfcbastos - Todos los derechos reservados</p>
      </div>

    </div>
  );
}

export default Es;