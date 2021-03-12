import './OurStory.scss';

function OurStory() {
  return (
    <section className="our-story">
        <div className="our-story__container" id="story">
            <div className="our-story__logo"></div>
            <div className="our-story__text">
                <h2 className="our-story__title">OUR STORY</h2>
                <p className="our-story__paragph">This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus</p>
                <p className="our-story__paragph">Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
                <button className="button">LEARN MORE</button>
            </div>
        </div>
    </section>
  );
}

export default OurStory;