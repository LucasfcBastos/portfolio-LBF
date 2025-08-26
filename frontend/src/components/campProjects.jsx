import ButtomNormal from './buttomNormal';

import './campProjects.css';

function CampProjects({ projects }) {
  return (
    <div className="campProjects">
        {projects.map((project, index) => (
          <div className="types" key={index}>
            <img src={project.img} />
            <p>{project.nome}</p>
            <div className='inputs'>
                <ButtomNormal text={project.helf} onClick={() => window.open(project.github, '_blank')} />
            </div>
          </div>
        ))}
    </div>
  );
}

export default CampProjects;