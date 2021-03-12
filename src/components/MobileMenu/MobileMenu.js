import { NavHashLink } from 'react-router-hash-link';
import './MobileMenu.scss';

function MobileMenu() {
    return (
        <div className="mobile-menu">
            <div className="mobile-menu__container">
                <ul className="nav__list">
                    <li className="nav__item">
                        <NavHashLink className="nav__link"
                            to="/#top"
                            activeClassName="nav__link_active"
                        >HOME</NavHashLink>
                    </li>
                    <li className="nav__item">
                        <NavHashLink className="nav__link"
                            to="/homepage#story"
                            activeClassName="nav__link_active"
                        >ABOUT</NavHashLink>
                    </li>
                    <li className="nav__item">
                        <NavHashLink className="nav__link"
                            to="/homepage#expertise"
                            activeClassName="nav__link_active"
                        >EXPERTISE</NavHashLink>
                    </li>
                    <li className="nav__item">
                        <NavHashLink className="nav__link"
                            to="/homepage#team"
                            activeClassName="nav__link_active"
                        >TEAMS</NavHashLink>
                    </li>
                    <li className="nav__item">
                        <NavHashLink className="nav__link"
                            to="/homepage#works"
                            activeClassName="nav__link_active"
                        >WORKS</NavHashLink>
                    </li>
                    <li className="nav__item">
                        <NavHashLink className="nav__link"
                            to="/homepage#reviews"
                            activeClassName="nav__link_active"
                        >PEOPLE SAY</NavHashLink>
                    </li>
                    <li className="nav__item">
                        <NavHashLink className="nav__link"
                            to="/homepage#contacts"
                            activeClassName="nav__link_active"
                        >CONTACT</NavHashLink>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default MobileMenu;