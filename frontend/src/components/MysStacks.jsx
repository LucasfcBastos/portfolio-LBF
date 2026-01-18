import '../styles/stacks.css'

function MysStacks({ img, type }) {
    return (
        <img src={img} alt={type} title={type} />
    )
}

export default MysStacks