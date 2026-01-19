import '../../styles/Landing/IconsSocial.css'

function IconsSocial({ url, img, type }) {
    return (
        <a href={url}>
            <img src={img} alt={type} />
        </a>
    )
}

export default IconsSocial