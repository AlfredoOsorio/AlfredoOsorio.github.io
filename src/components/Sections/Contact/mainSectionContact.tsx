import { faEnvelope, faLanguage, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function MainSectionContact() {
  return (
    <section className="section section4 contact" id="contact">
      <div className="contact-container">
        <div className="main-section-title">
          <h2>
            Contact <span>Me</span>
            <span className="background-text">contact</span>
          </h2>
        </div>
        <div className="contact-content-container">
          <div className="left-contact-container">
            <h4>Contact me here</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit odit
              esse blanditiis explicabo aut debitis dolores soluta molestiae?
              Beatae voluptates inventore aut molestias minima, molestiae enim
              ad commodi distinctio ipsa.
            </p>
            <div className="contact-info">
              <div className="contact-item">
                <div className="icon">
                  <FontAwesomeIcon icon={faLocationDot} />
                  Location
                </div>
                <p>: Vigo, Spain</p>
              </div>
              <div className="contact-item">
                <div className="icon">
                  <FontAwesomeIcon icon={faPhone} />
                  Number
                </div>
                <p>: +34 633 492 895</p>
              </div>              <div className="contact-item">
                <div className="icon">
                  <FontAwesomeIcon icon={faEnvelope} />
                  Email
                </div>
                <p>: alfredoosorioa@gmail.com</p>
              </div>
              <div className="contact-item">
                <div className="icon">
                  <FontAwesomeIcon icon={faLanguage} />
                  Languages
                </div>
                <p>: English, Spanish</p>
              </div>
            </div>
          </div>
          <div className="right-contact-container"></div>
        </div>
      </div>
    </section>
  );
}

export default MainSectionContact;
