import '../styles/social.css'

function SocialIcons({ url, img, type }) {
    return (
        <a href={url}>
            <img src={img} alt={type} />
        </a>
    )
}

export default SocialIcons