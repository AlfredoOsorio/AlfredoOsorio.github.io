import myPicture from "../../../images/me.png";
import DownloadButton from "../../Other components/downloadButton";

function MainSectionHeader() {
  return (
    <header className="section section1 header active" id="home">
      <div className="header-content">
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
          <p>
            I'm a developer specilized on web with a passion
            for creating visually appealing and user-friendly websites. I
            specialize in HTML, CSS, and TypeScript, and I'm eager to learn and
            grow in the industry.
          </p>
          <DownloadButton />
        </div>
      </div>
    </header>
  );
}

export default MainSectionHeader;
