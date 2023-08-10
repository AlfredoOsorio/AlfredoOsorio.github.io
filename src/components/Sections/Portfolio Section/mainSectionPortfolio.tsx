import PortfolioItem from "./portfolioItem";
import ProjectImg1 from "../../../images/portfolio1 - Drum kit.jpg";
import ProjectImg2 from "../../../images/portfolio2 - Dice game.jpg";
import ProjectImg3 from "../../../images/portfolio3 - Simon says.jpg";
import ProjectImg4 from "../../../images/portfolio4 - Keeper app.jpg";
/* import ProjectImg5 from "../../../images/port5.jpg";
import ProjectImg6 from "../../../images/port6.jpg"; */

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
          portfolioProjectName={"Drum kit"}
          portfolioProjectUrl={"https://drum-kit-by-alfredo.netlify.app"}
          portfolioProjectGithub={"https://github.com/AlfredoOsorio/Udemy-The-complete-web-Development-Course/tree/182cb270cbe568f92f1ce937caf42714ec1ec674/Drum%20Kit%20Starting%20Files"}
        />

        <PortfolioItem
          portfolioItemImageSrc={ProjectImg2}
          portfolioProjectName={"Dice game"}
          portfolioProjectUrl={"https://dice-game-by-alfredo.netlify.app/"}
          portfolioProjectGithub={"https://github.com/AlfredoOsorio/Udemy-The-complete-web-Development-Course/tree/182cb270cbe568f92f1ce937caf42714ec1ec674/Dicee%20Challenge%20-%20Starting%20Files"}
        />

        <PortfolioItem
          portfolioItemImageSrc={ProjectImg3}
          portfolioProjectName={"Simon says"}
          portfolioProjectUrl={"https://simon-says-game-by-alfredo.netlify.app/"}
          portfolioProjectGithub={"https://github.com/AlfredoOsorio/Udemy-The-complete-web-Development-Course/tree/182cb270cbe568f92f1ce937caf42714ec1ec674/Simon%20Game%20Challenge%20Starting%20Files"}
        />

        <PortfolioItem
          portfolioItemImageSrc={ProjectImg4}
          portfolioProjectName={"Keeper app"}
          portfolioProjectUrl={"https://keeper-app-by-alfredo.netlify.app/"}
          portfolioProjectGithub={"https://github.com/AlfredoOsorio/Udemy-The-complete-web-Development-Course/tree/182cb270cbe568f92f1ce937caf42714ec1ec674/React.js/34%20-%20433.%20Keeper%20App%20Project%20-%20Part%203"}
        />

{/*         <PortfolioItem
          portfolioItemImageSrc={ProjectImg5}
          portfolioProjectName={"project 5"}
          portfolioProjectUrl={""}
          portfolioProjectGithub={""}
        />

        <PortfolioItem
          portfolioItemImageSrc={ProjectImg6}
          portfolioProjectName={"project 6"}
          portfolioProjectUrl={""}
          portfolioProjectGithub={""}
        /> */}
      </div>
    </section>
  );
}

export default MainSectionPortfolio;
