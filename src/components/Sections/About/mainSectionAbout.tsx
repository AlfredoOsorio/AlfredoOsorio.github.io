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

            <MySkillsProgressBar
              knowledgeAdquired={"HTML5"}
              progressValueOfKnowledge={70}
            />
            <MySkillsProgressBar
              knowledgeAdquired={"CSS3"}
              progressValueOfKnowledge={80}
            />
            <MySkillsProgressBar
              knowledgeAdquired={"JavaScrypt"}
              progressValueOfKnowledge={60}
            />
            <MySkillsProgressBar
              knowledgeAdquired={"React"}
              progressValueOfKnowledge={40}
            />
          </div>
    </section>
  );
}

export default MainSectionAbout;
