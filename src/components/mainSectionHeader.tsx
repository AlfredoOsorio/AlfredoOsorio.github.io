import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import myPicture from "../images/me.png";
import DownloadButton from "./downloadButton";

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
          Hi, I'm <span>Alfredo Osorio</span>, a web Developer.
        </h1>
        <p>Lorem Ipsum (ABOUT)</p>
        <DownloadButton />
      </div>
    </header>
  );
}

export default MainSectionHeader;
