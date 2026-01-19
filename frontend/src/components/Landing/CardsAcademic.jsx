import '../../styles/Landing/CardsAcademic.css'

function CardsAcademic({ img, name, url }) {
    return (
        <div className='card'>
            <h3>{name}</h3>
            <div>
                <img src={img} />
                <a href={url}>
                    VER MAIS
                </a>
            </div>
        </div>
    )
}

export default CardsAcademic