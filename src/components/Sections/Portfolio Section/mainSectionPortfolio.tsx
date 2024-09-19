import PortfolioItem from "./portfolioItem";
import ProjectImgDrumKit from "../../../images/portfolio1 - Drum kit.jpg";
import ProjectImgDiceGame from "../../../images/portfolio2 - Dice game.jpg";
import ProjectImgSimonSays from "../../../images/portfolio3 - Simon says.jpg";
import ProjectImgKeeperApp from "../../../images/portfolio4 - Keeper app.jpg";
import ProjectImgColegioApostol from "../../../images/portfolio5 - Colegio Apostol - People and Brand.jpg";
import ProjectImgA2i from "../../../images/portfolio6 - A2i - People and Brand.jpg";
import ProjectImgPetsclan from "../../../images/portfolio7 - Petsclan - People and Brand.jpg";

function MainSectionPortfolio() {
  return (
    <section className="section section3 portfolio" id="portfolio">
      <div className="main-section-title">
        <h2>
          My <span>Portfolio</span>
        </h2>
      </div>
      <p className="portfolio-text">
        Here are some of the projects that i've worked with
      </p>
      <div className="portfolios">
        <PortfolioItem
          portfolioItemImageSrc={ProjectImgColegioApostol}
          portfolioProjectName={"Colegio Apostol WP"}
          portfolioProjectUrl={"https://colegioapostol.com/"}
          
        />
        <PortfolioItem
          portfolioItemImageSrc={ProjectImgA2i}
          portfolioProjectName={"A2i WP"}
          portfolioProjectUrl={"https://a2i.es/"}
        />
        <PortfolioItem
          portfolioItemImageSrc={ProjectImgPetsclan}
          portfolioProjectName={"Petsclan WP"}
          portfolioProjectUrl={"https://petsclan.es/"}
        />
        <PortfolioItem
          portfolioItemImageSrc={ProjectImgDrumKit}
          portfolioProjectName={"Drum kit"}
          portfolioProjectUrl={"https://drum-kit-by-alfredo.netlify.app"}
          portfolioProjectGithub={
            "https://github.com/AlfredoOsorio/Udemy-The-complete-web-Development-Course/tree/182cb270cbe568f92f1ce937caf42714ec1ec674/Drum%20Kit%20Starting%20Files"
          }
        />

        <PortfolioItem
          portfolioItemImageSrc={ProjectImgDiceGame}
          portfolioProjectName={"Dice game"}
          portfolioProjectUrl={"https://dice-game-by-alfredo.netlify.app/"}
          portfolioProjectGithub={
            "https://github.com/AlfredoOsorio/Udemy-The-complete-web-Development-Course/tree/182cb270cbe568f92f1ce937caf42714ec1ec674/Dicee%20Challenge%20-%20Starting%20Files"
          }
        />

        <PortfolioItem
          portfolioItemImageSrc={ProjectImgSimonSays}
          portfolioProjectName={"Simon says"}
          portfolioProjectUrl={
            "https://simon-says-game-by-alfredo.netlify.app/"
          }
          portfolioProjectGithub={
            "https://github.com/AlfredoOsorio/Udemy-The-complete-web-Development-Course/tree/182cb270cbe568f92f1ce937caf42714ec1ec674/Simon%20Game%20Challenge%20Starting%20Files"
          }
        />

        <PortfolioItem
          portfolioItemImageSrc={ProjectImgKeeperApp}
          portfolioProjectName={"Keeper app"}
          portfolioProjectUrl={"https://keeper-app-by-alfredo.netlify.app/"}
          portfolioProjectGithub={
            "https://github.com/AlfredoOsorio/Udemy-The-complete-web-Development-Course/tree/182cb270cbe568f92f1ce937caf42714ec1ec674/React.js/34%20-%20433.%20Keeper%20App%20Project%20-%20Part%203"
          }
        />
      </div>
    </section>
  );
}

export default MainSectionPortfolio;
