import React from 'react';
import { Link } from 'react-router-dom';
import { toggleMobileMenu } from '../../store/actions/actions';
import { useDispatch, useSelector } from 'react-redux';
import { NavHashLink } from 'react-router-hash-link';
import './Header.scss';
import logo from '../../images/logo.png';
import MobileMenu from '../MobileMenu/MobileMenu';

function Header(props) {
  const [scroll, setScroll] = React.useState(0);
  const [classes, setClasses] = React.useState(['header-menu']);
  const state = useSelector(state => state);

  const dispatch = useDispatch();

  const toggleMenu = () => {
    dispatch(toggleMobileMenu())
  }

  const handleScroll = () => {
    setScroll(prev => window.pageYOffset);
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  React.useEffect(() => {
    //   const team = document.querySelector('#team');
    //   console.log(team.getBoundingClientRect().top)

    // //   $(document).scroll(function () {
    // //     s_top = $("body").scrollTop();
    // //     yes = $("#id").offset().top;
    // //     if(s_top > yes){
    // //         console.log("Yes");
    // //     }
    // // });
    //   //
    console.log(scroll, 'scroll');
    if (scroll >= 100) {
      setClasses(['header-menu', 'header-menu_scrolled']);
    } else {
      setClasses(['header-menu']);
    }
  }, [scroll])

  return (
    <>
    <header className={classes.join(' ')}>
      <div className="header">
        <Link className="logo__link" to="/">
          <img className="logo__image" src={logo} alt="logotype" />
        </Link>
        <nav className="nav">
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
        </nav>
        <nav className="nav-mobile" onClick={toggleMenu}>          
        </nav>
      </div>
    </header>
    { state.mobileMenuIsOpened && <MobileMenu /> }
    </>
  );
}

export default Header;