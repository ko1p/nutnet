import './Team.scss';

function Team() {
  return (
    <section className="team">
        <div className="team_container">
            <h2 className="team__title">MEET OUR AMAZING TEAM</h2>
            <p className="team__paragraph">Lorem ipsum dolor sit amet proin gravida nibh vel velit</p>
            <div className="team__list">

              <div className="team__member">
                <div className="team__member-photo"></div>
                <span className="team__member-name">SEMF UCUK</span>
                <span className="team__member-position">CEO &amp; FOUNDER</span>
              </div>

              <div className="team__member">
                <div className="team__member-photo"></div>
                <span className="team__member-name">SEMF UCUK</span>
                <span className="team__member-position">CEO &amp; FOUNDER</span>
              </div>

              <div className="team__member">
                <div className="team__member-photo"></div>
                <span className="team__member-name">SEMF UCUK</span>
                <span className="team__member-position">CEO &amp; FOUNDER</span>
              </div>

              <div className="team__member">
                <div className="team__member-photo"></div>
                <span className="team__member-name">SEMF UCUK</span>
                <span className="team__member-position">CEO &amp; FOUNDER</span>
              </div>

            </div>
            <span className="team__join-us">Become part of our dream team, let’s join us !</span>
            <button className="button">WE ARE HIRING</button>
        </div>
    </section>
  );
}

export default Team;