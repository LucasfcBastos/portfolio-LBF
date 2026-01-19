import '../../styles/Landing/CardsPersonal.css'

function CardsPersonal({ img, name, id }) {
    return (
        <div className='card'>
            <img src={img} />
            <a href={`/project/${id}`}>
                {name}
            </a>
        </div>
    )
}

export default CardsPersonal