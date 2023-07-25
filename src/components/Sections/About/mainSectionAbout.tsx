import DownloadButton from "../../Other components/animatedButton";
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
            progressValueOfSkill={"80%"}
          />
          <MySkillsProgressBar
            SkillAdquired={"React"}
            progressValueOfSkill={"55%"}
          />
        </div>
      </div>
      <div className="timeline">
        <TimelineItem
          duration={"11/2019 - 02/2021"}
          jobTitle={"Front-end Developer"}
          company={"Alef Advertising"}
          description={
            "Collaborated as a front-end web developer in several projects from avariety of clients."
          }
          stackUsed={"HTML5, CSS3, JavaScript and React"}
        />

        <TimelineItem
          duration={"11/2019 - present"}
          jobTitle={"Freelancer"}
          company={""}
          description={
            "Been working for myself, making several projects on my free time to stay up to date to the latest technologies."
          }
          stackUsed={"HTML, CSS, JavaScript, Typescrypt, React"}
        />

        <TimelineItem
          duration={"04/2021 - present"}
          jobTitle={"Level 1 Helpdesk"}
          company={"AMP software / Eupraxia / Burger King Spain"}
          description={"Level 1 Helpdesk remote support for Burger King Spain."}
          stackUsed={"Windows, Linux, Teamviewer"}
        />
      </div>
    </section>
  );
}

export default MainSectionAbout;
