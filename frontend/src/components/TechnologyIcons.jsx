import '../styles/stacks.css'

function TechnologyIcons({ img, type }) {
    return (
        <img src={img} alt={type} title={type} />
    )
}

export default TechnologyIcons