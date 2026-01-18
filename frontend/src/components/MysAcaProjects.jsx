import '../styles/mysaprojects.css'

function MysAcaProjects({ img, name, url }) {
    return (
        <div className='card'>
            <h3>{name}</h3>
            <img src={img} />
            <a href={url}>
                VER MAIS
            </a>
        </div>
    )
}

export default MysAcaProjects