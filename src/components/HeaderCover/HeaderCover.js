import './HeaderCover.scss';
import Header from '../Header/Header'

function HeaderCover() {
  return (
    <section className="header-cover">
        <Header />
        <div className='header-cover__container'>
            <h1 className="header-cover__title">We Are Awesome Creative Agency</h1>
            <p className="header-cover__info">This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit.</p>
            <button className="button">LEARN MORE</button> 
        </div>
    </section>
  );
}

export default HeaderCover;