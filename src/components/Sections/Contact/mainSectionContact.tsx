
import LeftContactContainer from "./leftContactContainer";
import RightContactContainer from "./rightContactContainer";

function MainSectionContact() {
  return (
    <section className="section section4 contact" id="contact">
      <div className="contact-container">
        <div className="main-section-title">
          <h2>
            Contact <span>Me</span>
          </h2>
        </div>
        <div className="contact-content-container">

          <LeftContactContainer  />

          <RightContactContainer  />
        </div>
      </div>
    </section>
  );
}

export default MainSectionContact;
