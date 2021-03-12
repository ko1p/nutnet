import { Link } from 'react-router-dom';
import './OurWorks.scss';
import rArrow from '../../images/rArrow.svg'

function OurWorks() {
  return (
    <section className="our-works" id="works">
        <div className="our-works__container">
            <h2 className="our-works__title">OUR WORKS</h2>
            <Link className="our-works__link" to="/">See All Project in dribbble <img className="our-works__arrow" src={rArrow} alt="arrow" /> </Link>
        </div>
        <div className="our-works__images">
            <div className="our-works__image"></div>
            <div className="our-works__image"></div>
            <div className="our-works__image"></div>
            <div className="our-works__image"></div>
            <div className="our-works__image"></div>
            <div className="our-works__image"></div>
            <div className="our-works__image"></div>
            <div className="our-works__image"></div>
            <div className="our-works__image"></div>
            <div className="our-works__image"></div>
            <div className="our-works__image"></div>
            <div className="our-works__image"></div>
        </div>
        <button className="button">LOAD MORE</button>
    </section>
  );
}

export default OurWorks;