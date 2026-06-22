import "../styles/header.css"

function Header() {
    return (
        <header>
            <a href="/" className="header-brand" aria-label="Portfólio LBF — página inicial">
                <span className="header-brand-title">Portfólio</span>
                <span className="header-brand-tag">LBF</span>
            </a>
        </header>
    );
}

export default Header;
