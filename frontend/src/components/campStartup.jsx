import ButtomNormal from './buttomNormal';

import './campStartup.css';

function CampStartup({ startup }) {
  return (
    <div className="campStartup">
        {startup.map((startup, index) => (
          <div className="types" key={index}>
            <p>{startup.nome}</p>
            <img src={startup.img} />
            <p className='descricao'>{startup.descricao}</p>
            <footer>
                <p>{startup.tools.join(' | ')}</p>
            </footer>
            <ButtomNormal text={startup.helf} onClick={() => window.open(startup.instagram, '_blank')} />
          </div>
        ))}
    </div>
  );
}

export default CampStartup;