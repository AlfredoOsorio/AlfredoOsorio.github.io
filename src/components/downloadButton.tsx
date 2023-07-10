import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

function DownloadButton() {
  return (
    <div className="buttonContainer">
      <a href="" className="downloadButton">
        <span className="buttonText">Download CV</span>
        <span className="buttonIcon">
          <FontAwesomeIcon icon={faDownload} />
        </span>
      </a>
    </div>
  );
}

export default DownloadButton;
