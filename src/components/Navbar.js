function Navbar() {
    return (
        <nav className="navbar">
            <ul className="navbar__list">
                <li className="navbar__item"><a className="navbar__link" href="#">Home</a></li>
                <li className="navbar__item"><a className="navbar__link" href="#">Portfolio</a></li>
                <li className="navbar__item"><a className="navbar__link" href="#">About</a></li>
                <li className="navbar__item"><a className="navbar__link" href="#">Contact</a></li>
            </ul>
            <ul className="navbar__list">
                <li className="navbar__item"><a className="navbar__link" href="#">Facebook</a></li>
                <li className="navbar__item"><a className="navbar__link" href="#">Twitter</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;