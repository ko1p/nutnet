import './OurWorks.scss';
import rArrow from '../../images/rArrow.svg'

function OurWorks() {
  return (
    <section className="our-works">
        <div className="our-works__container">
            <h2 className="our-works__title">OUR WORKS</h2>
            <a className="our-works__link" href="#">See All Project in dribbble <img className="our-works__arrow" src={rArrow} alt="arrow" /> </a>
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