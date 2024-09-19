import { faDownload } from "@fortawesome/free-solid-svg-icons";
import myPicture from "../../../images/me.png";
import AnimatedButton from "../../Other components/animatedButton";

function MainSection() {
  return (
    <section className="section section1 active-section main-page" id="home">
      <div className="main-page-content">
        <div className="left-column">
          <div className="backimage-shape"></div>
          <div className="myPicture">
            <img src={myPicture} alt="this is me" />
          </div>
        </div>
        <div className="right-column">
          <h1 className="name">
            Hi, I'm <span>Alfredo Osorio</span>, a web Developer.
          </h1>
          <p>
            I'm a developer specialized on web with a passion for creating
            visually appealing and user-friendly websites. I specialize in HTML,
            CSS, and TypeScript, and I'm eager to learn and grow in the
            industry.
          </p>
          <AnimatedButton
            buttonLink={
              "https://github.com/AlfredoOsorio/AlfredoOsorio.github.io/blob/main/src/My%20CV/CV%20Alfredo%20Osorio.pdf"
            }
            spanButtonInfo={"Download CV"}
            spanButtonIcon={faDownload}
          />
        </div>
      </div>
    </section>
  );
}

export default MainSection;
