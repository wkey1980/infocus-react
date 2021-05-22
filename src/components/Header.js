import Navbar from './Navbar';
import Logo from './Logo';

function Header() {
    return (
        <div className="header-container">
            <h1>Header Section</h1>
            <Logo />
            <Navbar />
        </div>
    );
}

export default Header;