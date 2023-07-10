import DownloadButton from "../../Other components/downloadButton";
import AboutItem from "./aboutItem";
import MySkillsProgressBar from "./mySkillsProgressBar";

function MainSectionAbout() {
  return (
    <section className="section section2 about" id="about">
      <div className="main-section-title">
        <h2>
          About <span>me</span>
          <span className="background-text">my stats</span>
        </h2>
      </div>
      <div className="about-container">
        <div className="left-about">
          <h4>Information about me</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem
            id rem optio excepturi corrupti ex esse laborum iste fugit eos ut
            dolorum rerum soluta doloremque nesciunt, omnis quam accusantium
            temporibus?
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem
            id rem optio excepturi corrupti ex esse laborum iste fugit eos ut
            dolorum rerum soluta doloremque nesciunt, omnis quam accusantium
            temporibus?
          </p>
          <DownloadButton />
        </div>
        <div className="right-about">
          <AboutItem
            howManyObjects={10}
            whatObjectsLine1="Projects"
            whatObjectsLine2="Completed"
          />

          <AboutItem
            howManyObjects={1}
            whatObjectsLine1="Years of"
            whatObjectsLine2="Experience"
          />

          <AboutItem
            howManyObjects={5}
            whatObjectsLine1="Years of"
            whatObjectsLine2="Studying"
          />
        </div>
      </div>
      <div className="about-stats">
        <h4 className="stat-title">My Skills</h4>
        <div className="all-progress-bars">
          <MySkillsProgressBar
            SkillAdquired={"HTML5"}
            progressValueOfSkill={"70%"}
          />
          <MySkillsProgressBar
            SkillAdquired={"CSS3"}
            progressValueOfSkill={"80%"}
          />
          <MySkillsProgressBar
            SkillAdquired={"JavaScrypt"}
            progressValueOfSkill={"60%"}
          />
          <MySkillsProgressBar
            SkillAdquired={"React"}
            progressValueOfSkill={"40%"}
          />
        </div>
      </div>
    </section>
  );
}

export default MainSectionAbout;
