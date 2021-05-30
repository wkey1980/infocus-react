import styled from 'styled-components/macro';

const Header = (props) => {
    return (
        <Nav>
            <Logo />
            <NavMenu>
                <a href="#"><span>Home</span></a>
            </NavMenu>
        </Nav>
    );
};


const Nav = styled.div``;

// Temp Logo idea
const Logo = styled.div`
    background-image: url('/images/Branding/branding.svg');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;

    width: 100%;
    height: 100%;


    position: absolute;
    top: 0;
    left: 0;
    right: 0;

    z-index: 1;
    opacity: 0.7;
`;

const NavMenu = styled.div``;


export default Header;