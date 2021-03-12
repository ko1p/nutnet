import Carousel from 'react-elastic-carousel';
import './Reviews.scss';

function Reviews() {
  return (
    <section className="reviews" id="reviews">
      <div className="reviews__quotes" ></div>
      <Carousel itemsToShow={1} className="review" showArrows={false} initialFirstItem={2}>
        <div>
          <p class="review__text"> This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet.
          Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.
          Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit.
        Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit.</p>
          <span className="review__name">NAME</span>
          <span className="review__profession">PROFESSION</span>
        </div>

        <div>
          <p class="review__text"> This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet.
          Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.
          Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit.
        Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit.</p>
          <span className="review__name">NAME</span>
          <span className="review__profession">PROFESSION</span>
        </div>

        <div>
          <p class="review__text"> This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet.
          Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.
          Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit.
        Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit.</p>
          <span className="review__name">NAME</span>
          <span className="review__profession">PROFESSION</span>
        </div>

        <div>
          <p class="review__text"> This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet.
          Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.
          Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit.
        Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit.</p>
          <span className="review__name">NAME</span>
          <span className="review__profession">PROFESSION</span>
        </div>

        <div>
          <p class="review__text"> This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet.
          Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.
          Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit.
        Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit.</p>
          <span className="review__name">NAME</span>
          <span className="review__profession">PROFESSION</span>
        </div>
        
      </Carousel>
    </section>
  );
}

export default Reviews;