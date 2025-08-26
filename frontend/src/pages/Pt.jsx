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

function Pt() {
  const { theme, setTheme } = useContext(ThemeContext);
  const navigate = useNavigate();
  const location = useLocation();

  const currentLang = location.pathname.split("/")[1] || "pt";

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
          <option value="dark">MODO ESCURO</option>
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
            <h1>Olá mundo, eu sou:</h1>
            <h1 style={{ color: 'var(--primary)' }}>LUCAS BASTOS FRANCO</h1>
            <h1>ENG. DE SOFTWARE</h1>
            <div className="button-container">
              <a href="/LucasBastosFranco_CVpt.pdf" download>
                <button>Download CV</button>
              </a>
              <a href="https://wa.me/5562984991644" target="_blank" rel="noopener noreferrer">
                <button>Entrar em Contato</button>
              </a>
            </div>
          </div>
        </div>

        <CampDados dados={[
          { tipo: "CERTIFICADOS", quantidade: 35 },
          { tipo: "SOFT SKILLS", quantidade: 9 },
          { tipo: "EXPERIÊNCIA", quantidade: 0 },
        ]} />

      </div>

      <div id="sobre" className="topicos">
        <h1>SOBRE MIM</h1>
        <p>Engenheiro de Software em início de carreira, apaixonado por tecnologia e inovação. Experiência em projetos acadêmicos atuando como Product Owner, Product Designer, Frontend, Backend e Quality Assurance. Busco oportunidades para adquirir experiência prática e crescer junto à empresa.</p>
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
        <h1>PROJETOS</h1>
        <p style={{ marginBlockStart: '1em', marginBlockEnd: '1em' }}>Projetos Acadêmicos:</p>
        <CampStartup startup={[
          { nome: 'BYTE DONTO', descricao: 'Facilita a comunicação entre clínicas e pacientes, reduzindo faltas e melhorando o acompanhamento de tratamentos.', img: BD, tools: ['Notion', 'Figma', 'React', 'NodeJS', 'Python', 'IA'], helf: 'INSTAGRAM', instagram: 'https://www.instagram.com/bytedonto' },
          { nome: 'ROTA VERDE', descricao: 'Otimiza rotas de coleta seletiva para reduzir custos e aumentar a eficiência operacional das cooperativas.', img: RV, tools: ['Word', 'Figma', 'React Native', 'Python'], helf: 'INSTAGRAM', instagram: 'https://www.instagram.com/rota_verde_' },
          { nome: 'R.A.S', descricao: 'Permite rastrear o ciclo de vida do gado e gerenciar a documentação sanitária de forma confiável e automatizada.', img: RAS, tools: ['Figma', 'React', 'Java', 'Spring Boot', 'IoT'], helf: 'INSTAGRAM', instagram: 'https://www.instagram.com/squad_r.a.s' },
        ]} />
        <p style={{ marginBlockStart: '1em', marginBlockEnd: '1em' }}>Projetos Pessoais:</p>
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
        <h1>EDUCAÇÃO</h1>
        <p>FORMAÇÃO:</p>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <p>Atualmente, estou cursando Engenharia de Software na Universidade Evangélica de Goiás (UniEVANGÉLICA), em Anápolis-GO. Iniciei a graduação em fevereiro de 2023 e a previsão de conclusão é para dezembro de 2026. Atualmente, estou no 6º período, com aproximadamente um ano restante para finalizar o curso.</p>
          <img style={{ width: '20em', height: 'auto', marginRight: '3em' }} src={UniEvangelica} />
        </div>
        <p style={{ marginBlockStart: '1em', marginBlockEnd: '1em' }}>CERTIFICAÇÃO:</p>
        <CampCertificados certificados={[
          { img: LogoUni, nome: 'Curso Básico de Designer de Interface com Figma', origem: 'eventoscae.aee.edu.br' },
          { img: LogoUni, nome: 'Masterizando o Chat GPT', origem: 'eventoscae.aee.edu.br' },
          { img: LogoMicro, nome: 'Introdução ao desenvolvimento para a Web usando Visual Studio Code', origem: 'learn.microsoft.com' },
          { img: LogoScrum, nome: 'Certificado em Fundamentos do Scrum', origem: 'scrumstudy.com' },
          { img: LogoDio, nome: 'Versionamento de Código com Git e GitHub', origem: 'dio.me' },
          { img: LogoCampos, nome: 'Maratona do Desafio Agrostartup 2025', origem: 'eventos.sistemafaeg.org.br' },
          { img: LogoSenar, nome: 'Excel Intermediário', origem: 'ead.senargo.org.br' },
          { img: LogoSenar, nome: 'Word Intermediário', origem: 'ead.senargo.org.br' },
          { img: LogoCampos, nome: 'Capacitação Empreendedora - Desafio Agrostartup 2025', origem: 'eventos.sistemafaeg.org.br' },
          { img: LogoDio, nome: 'Modularização de Projetos Node.js com CommonJS', origem: 'dio.me' },
          { img: LogoDio, nome: 'Modularização com EcmaScript Modules', origem: 'dio.me' },
        ]} />
      </div>

      <div id="contatos" className="topicos">
        <h1>CONTATOS</h1>
        <CampForm inpN='Nome' inpNH='Digita o seu nome' inpE='E-mail' inpEH='Digita o seu email' inpD='Mensagem' inpDH='Digita a sua mensagem' sub='Enviar' />
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
        <p>@lucasfcbastos - Todos os direitos reservados</p>
      </div>

    </div>
  );
}

export default Pt;