import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function MainSectionPortfolio() {
  return (
    <section className="section section3 portfolio" id="portfolio">
      <div className="main-section-title">
        <h2>
          My <span>Portfolio</span>
          <span className="background-text">my work</span>
        </h2>
      </div>
{/*       <p className="portfolio-text">
        Here is some of my work, that i've done in various projects.
      </p>
      <div className="portfolios">
        <div className="portfolio-item">
          <div className="image">
            <img src="" alt="_To be added_" />
          </div>
          <div className="hover-items">
            <h3>Project Source</h3>
            <div className="icons">
              <a href="" target="_blank">
              <FontAwesomeIcon icon={faGithub} />
              </a>
            </div>
          </div>
        </div>
      </div> */}
    </section>
  );
}

export default MainSectionPortfolio;
