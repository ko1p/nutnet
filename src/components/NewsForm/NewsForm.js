import './NewsForm.scss';

function NewsForm() {
  return (
    <section className="news">
        <h2 className="news__title">GIVE US A GOOD NEWS</h2>
        <form className="news__form" name="form" id="form" action="post">
            <input className="news__input" type="text" placeholder="Name" name="name" />
            <input className="news__input" type="email" placeholder="Email" name="email" />
            <input className="news__input" type="text" placeholder="Subject" name="subject" />
            <textarea className="news__input news__text-area" form="form" placeholder="Your Massage" name="message" />
            <button className="button" type="submit" name="submit">SUBMIT</button>
        </form>
    </section>
  );
}

export default NewsForm;