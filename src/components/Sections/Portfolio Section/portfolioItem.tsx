import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface ControlButtonProps {
  portfolioItemImageSrc: string;
  portfolioProjectName: string;
  portfolioProjectGithub: string;
  portfolioProjectUrl: string;
}

function PortfolioItem(props: ControlButtonProps) {
  const { portfolioItemImageSrc, portfolioProjectName, portfolioProjectGithub, portfolioProjectUrl } =
    props;

  return (
    <div className="portfolio-item">
      <div className="portfolio-item-image">
        <img src={portfolioItemImageSrc} alt="portfolio-item-img" />
      </div>
      <div className="hover-items">
        <h3>{portfolioProjectName}</h3>
        <div className="portfolio-icons">
          <a
            href={portfolioProjectGithub}
            target="_blank"
            className="portfolio-icon"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            href={portfolioProjectUrl}
            target="_blank"
            className="portfolio-icon"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default PortfolioItem;
