import PortfolioItem from "./portfolioItem";
import ProjectImg1 from "../../../images/port1.jpg";
import ProjectImg2 from "../../../images/port2.jpg";
import ProjectImg3 from "../../../images/port3.jpg";
import ProjectImg4 from "../../../images/port4.jpg";
import ProjectImg5 from "../../../images/port5.jpg";
import ProjectImg6 from "../../../images/port6.jpg";

function MainSectionPortfolio() {
  return (
    <section className="section section3 portfolio" id="portfolio">
      <div className="main-section-title">
        <h2>
          My <span>Portfolio</span>
          <span className="background-text">my work</span>
        </h2>
      </div>
      <p className="portfolio-text">
        Here is some of my work, that i've done in various projects.
      </p>
      <div className="portfolios">
        <PortfolioItem
          portfolioItemImageSrc={ProjectImg1}
          portfolioProjectName={"project 1"}
          portfolioProjectUrl={""}
        />

        <PortfolioItem
          portfolioItemImageSrc={ProjectImg2}
          portfolioProjectName={"project 2"}
          portfolioProjectUrl={""}
        />

        <PortfolioItem
          portfolioItemImageSrc={ProjectImg3}
          portfolioProjectName={"project 3"}
          portfolioProjectUrl={""}
        />

        <PortfolioItem
          portfolioItemImageSrc={ProjectImg4}
          portfolioProjectName={"project 4"}
          portfolioProjectUrl={""}
        />

        <PortfolioItem
          portfolioItemImageSrc={ProjectImg5}
          portfolioProjectName={"project 5"}
          portfolioProjectUrl={""}
        />

        <PortfolioItem
          portfolioItemImageSrc={ProjectImg6}
          portfolioProjectName={"project 6"}
          portfolioProjectUrl={""}
        />
      </div>
    </section>
  );
}

export default MainSectionPortfolio;
