import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface ControlButtonProps {
  portfolioItemImageSrc: string;
  portfolioProjectName: string;
  portfolioProjectUrl: string;
  portfolioProjectGithub?: string;
}

function isThereAGithubLink(githubURL?: string) {
  if (githubURL != null) {
    return (
      <a
        href={githubURL}
        target="_blank"
        className="portfolio-icon"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faGithub} />
      </a>
    );
  }
}

function PortfolioItem(props: ControlButtonProps) {
  const {
    portfolioItemImageSrc,
    portfolioProjectName,
    portfolioProjectUrl,
    portfolioProjectGithub,
  } = props;

  return (
    <div className="portfolio-item">
      <div className="portfolio-item-image">
        <img src={portfolioItemImageSrc} alt="portfolio-item-img" />
      </div>
      <div className="hover-items">
        <h3>{portfolioProjectName}</h3>
        <div className="portfolio-icons">
          <a
            href={portfolioProjectUrl}
            target="_blank"
            className="portfolio-icon"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
          {isThereAGithubLink(portfolioProjectGithub)}
        </div>
      </div>
    </div>
  );
}

export default PortfolioItem;
