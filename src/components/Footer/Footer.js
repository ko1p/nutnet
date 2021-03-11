import './Footer.scss';
import logo from '../../images/logo.png'
import arrow from '../../images/arrow.png'

function Footer() {
  return (
    <footer className="footer">
        <div className="footer__container">
            <div className="footer__block">
                <img className="footer__logo" src={logo} alt="logotype" />
                <p className="footer__paragraph">lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh elit. Duis sed odio sit amet auctror a ornare odio non mauris vitae erat in elit</p>

                <ul className="footer__items">
                    <li className="footer__item"><a href="" className="footer__link">HELP</a></li>
                    <li className="footer__item"><a href="" className="footer__link">TERMS &amp; CONDITION</a></li>
                    <li className="footer__item"><a href="" className="footer__link">PRIVACY</a></li>
                </ul>

            </div>

            <div className="footer__block">
            <h3 className="footer__title">OUR STUDIO</h3>
                <address className="footer__address-container">
                    <div className="footer__address-icon point"></div>
                    <p className="footer__address">
                        Ruko cucruk, Jl. Radio luar dalem jos
                        No.12 - 13, Kalideres - Jakarta Barat
                        11480 - Indonesia
                    </p>
                </address>
                <div className="footer__tel-container">
                    <div className="footer__address-icon tel"></div>
                    <a className="footer__tel" href="tel:622122243333">(+62) 21-2224 3333</a>
                </div>
            </div>

            <div className="footer__block">
                <h3 className="footer__title">STAY IN TOUCH</h3>
                <form className="footer__form">
                    <input className="footer__input" type="email" placeholder="Subscribe our newsletter"/>
                    <button className="footer__submit-btn" type="submit"><img src={arrow} alt="button" /></button>
                </form> 
                <ul className="footer__sm-items">
                    <li className="footer__sm-item"><a className="footer__sm-link" href="#"><div className="footer__sm-icon facebook"></div></a></li>
                    <li className="footer__sm-item"><a className="footer__sm-link" href="#"><div className="footer__sm-icon twitter"></div></a></li>
                    <li className="footer__sm-item"><a className="footer__sm-link" href="#"><div className="footer__sm-icon dribble"></div></a></li>
                    <li className="footer__sm-item"><a className="footer__sm-link" href="#"><div className="footer__sm-icon instagram"></div></a></li>
                    <li className="footer__sm-item"><a className="footer__sm-link" href="#"><div className="footer__sm-icon google"></div></a></li>
                    <li className="footer__sm-item"><a className="footer__sm-link" href="#"><div className="footer__sm-icon youtube"></div></a></li>
                </ul>
                <span className="footer__copyright">Copyright © 2021 - Tajem Creative</span>
            </div>
        </div>
    </footer>
  );
}

export default Footer;