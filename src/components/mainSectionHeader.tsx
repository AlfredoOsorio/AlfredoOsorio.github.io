import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import myPicture from "../images/me.png";

function MainSectionHeader() {
  return (
    <header className="section section1 header active header-content" id="home">
      <div className="left-header">
        <div className="header-shape"></div>
        <div className="myPicture">
          <img src={myPicture} alt="this is me" />
        </div>
      </div>
      <div className="right-header">
        <h1 className="name">
          Hi, i'm <span>Alfredo Osorio</span>, a web Developer.
        </h1>
        <p>Lorem Ipsum (ABOUT)</p>
        <div className="buttonContainer">
          <a href="" className="downloadButton">
            <span className="buttonText">Download CV</span>
            <span className="buttonIcon">
              <FontAwesomeIcon icon={faDownload} />
            </span>
          </a>
        </div>
      </div>
    </header>
  );
}

export default MainSectionHeader;
