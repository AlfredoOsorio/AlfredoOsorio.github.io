import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

function DownloadButton() {
  return (
    <div className="buttonContainer">
      <a href="" className="downloadButton">
        <span className="downloadButtonText">Download CV</span>
        <span className="downloadButtonIcon">
          <FontAwesomeIcon icon={faDownload} />
        </span>
      </a>
    </div>
  );
}

export default DownloadButton;
