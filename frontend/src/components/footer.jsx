import SocialLinks from '../data/SocialLinks';

import "../styles/footer.css"

function Footer() {
    return (
        <footer>
            <div className="categorias">
                {SocialLinks.map((item) => (
                    <div className="camps" key={item.key}>
                        <h3>{item.label}</h3>
                        <div className="itens-footer">
                            {item.icon_url.map((icon) => (
                                <div className="itens" key={icon.id}>
                                    <img src={icon.url_img} alt={icon.type} />
                                    <a
                                        href={icon.redirect_url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={`Visitar ${icon.type}`}
                                    >
                                        {icon.type}
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            <div className="label">
                <hr />
                <p className="footer-brand">Portfólio LBF</p>
                <p>Todos os direitos reservados &copy; 2026 &mdash; <a href="mailto:lucas.software.engineering@gmail.com">lucas.software.engineering@gmail.com</a></p>
            </div>
        </footer>
    );
}

export default Footer;
