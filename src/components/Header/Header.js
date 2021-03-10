import './Header.scss';
import logo from '../../images/logo.png';

function Header() {
  return (
    <div className="header">
        <a className="logo__link" href="#">
            <img className="logo__image" src={logo} />
        </a>
        <nav className="nav">
            <ul className="nav__list">
                <li className="nav__item"><a className="nav__link nav__link_active" href="#">HOME</a></li>
                <li className="nav__item"><a className="nav__link" href="#">ABOUT</a></li>
                <li className="nav__item"><a className="nav__link" href="#">EXPERTISE</a></li>
                <li className="nav__item"><a className="nav__link" href="#">TEAMS</a></li>
                <li className="nav__item"><a className="nav__link" href="#">WORKS</a></li>
                <li className="nav__item"><a className="nav__link" href="#">PEOPLE SAY</a></li>
                <li className="nav__item"><a className="nav__link" href="#">CONTACT</a></li>
            </ul>
        </nav>
    </div>
  );
}

export default Header;