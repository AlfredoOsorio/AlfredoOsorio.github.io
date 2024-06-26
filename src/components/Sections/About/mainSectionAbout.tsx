import { faDownload } from "@fortawesome/free-solid-svg-icons";
import AnimatedButton from "../../Other components/animatedButton";
import AboutItem from "./aboutItem";
import MySkillsProgressBar from "./mySkillsProgressBar";
import TimelineItem from "./timelineItem";

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
            Developer with broad knowledge in front-end technologies and
            programming skills to make well-designed sites, with fresh methods
            and structural thinking. Let's collaborate and bring innovative
            ideas to life!
            <br />
            <br />
            Passionate about math and programming, always improving my skills
            and constantly challenging myself.
          </p>
          <AnimatedButton
            buttonLink={
              "https://github.com/AlfredoOsorio/AlfredoOsorio.github.io/blob/d0990d87e51f761175ede618612d848219476d6b/src/My%20CV/CV%20Alfredo%20Osorio.pdf"
            }
            spanButtonInfo={"Download CV"}
            spanButtonIcon={faDownload}
          />
        </div>
        <div className="right-about">
          <AboutItem
            howManyObjects={10}
            whatObjectsLine1="Projects"
            whatObjectsLine2="Completed"
          />

          <AboutItem
            howManyObjects={3}
            whatObjectsLine1="Years of"
            whatObjectsLine2="Experience"
          />
        </div>
      </div>
      <div className="about-stats">
        <h4 className="stat-title">My Skills</h4>
        <div className="all-progress-bars">
          <MySkillsProgressBar
            SkillAdquired={"HTML5"}
            progressValueOfSkill={"90%"}
          />
          <MySkillsProgressBar
            SkillAdquired={"CSS3"}
            progressValueOfSkill={"75%"}
          />
          <MySkillsProgressBar
            SkillAdquired={"JavaScrypt"}
            progressValueOfSkill={"75%"}
          />
          <MySkillsProgressBar
            SkillAdquired={"TypeScrypt"}
            progressValueOfSkill={"70%"}
          />
          <MySkillsProgressBar
            SkillAdquired={"React"}
            progressValueOfSkill={"65%"}
          />
        </div>
      </div>
      <div className="timeline">
        <TimelineItem
          duration={"11/2019 - 02/2021"}
          jobTitle={"Frontend Developer"}
          company={"Alef Advertising"}
          description={
            "Collaborated as a frontend web developer in several projects from a variety of clients."
          }
          stackUsed={"HTML5, CSS3, JavaScript, React"}
        />

        {/*         <TimelineItem
          duration={"11/2019 - present"}
          jobTitle={"Frontend Developer"}
          company={"People & Brand"}
          description={
            "Lead frontend web developer for several projects from a variety of clients."
          }
          stackUsed={"HTML, CSS, JavaScript"}
        /> */}

        <TimelineItem
          duration={"10/2023 - present"}
          jobTitle={"Frontend Freelancer"}
          company={"Self-employed"}
          description={
            "Been working for myself, making several projects on my free time to stay up to date to the latest technologies."
          }
          stackUsed={"HTML5, CSS, JavaScript, Typescrypt, React"}
        />

        {/*         <TimelineItem
          duration={"04/2021 - 04/2023"}
          jobTitle={"Level 2 Helpdesk"}
          company={"AMP software / Eupraxia / Burger King Spain"}
          description={"Level 2 Helpdesk remote support for Burger King Spain."}
          stackUsed={"Windows, Linux, Teamviewer"}
        /> */}
      </div>
    </section>
  );
}

export default MainSectionAbout;
