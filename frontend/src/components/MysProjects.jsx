import '../styles/mysprojects.css'

function MysProjects({ img, name, id }) {
    return (
        <div className='card'>
            <img src={img} />
            <a href={`/project/${id}`}>
                {name}
            </a>
        </div>
    )
}

export default MysProjects