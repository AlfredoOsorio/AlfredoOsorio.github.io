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
        </h2>
      </div>
      <div className="about-container">
        <div className="left-about">
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
              "https://github.com/AlfredoOsorio/AlfredoOsorio.github.io/blob/main/src/My%20CV/CV%20Alfredo%20Osorio.pdf"
            }
            spanButtonInfo={"Download CV"}
            spanButtonIcon={faDownload}
          />
        </div>
        <div className="right-about">
          <AboutItem
            howManyObjects={6}
            whatObjectsLine1="Projects"
            whatObjectsLine2="Completed"
          />

          <AboutItem
            howManyObjects={2}
            whatObjectsLine1="Years of"
            whatObjectsLine2="Experience"
          />
        </div>
      </div>

      <h4 className="stat-title">Timeline</h4>
      <div className="timeline">
        <TimelineItem
          duration={"10/2023 - 07/2024"}
          jobTitle={"Frontend Developer"}
          company={"People & Brand"}
          description={
            "Lead frontend web developer, WordPress site creation and maintenance, from initial design to deployment and optimization."
          }
          stackUsed={"HTML5, CSS3, JavaScript and Wordpress"}
        />

        <TimelineItem
          duration={"04/2021 - 09/2023"}
          jobTitle={"Level 2 Helpdesk"}
          company={"AMP software / Eupraxia / Burger King Spain"}
          description={"Level 2 Helpdesk remote support for Burger King Spain."}
          stackUsed={"Windows, Linux, Teamviewer"}
        />

        <TimelineItem
          duration={"08/2019 - present"}
          jobTitle={"Frontend Freelancer"}
          company={"Self-employed"}
          description={
            "Been working for myself, making several projects on my free time to stay up to date to the latest technologies."
          }
          stackUsed={"HTML5, CSS, JavaScript, Typescrypt, React"}
        />

        <TimelineItem
          duration={"04/2018 - 08/2019"}
          jobTitle={"Level 2 Helpdesk"}
          company={"XDV S. A."}
          description={
            "Onsite level 2 helpdesk, offering advanced technical support and system management."
          }
          stackUsed={
            "Windows Active Directory, Cisco call manager, SSH, Linux, Teamviewer"
          }
        />
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
            progressValueOfSkill={"70%"}
          />
          <MySkillsProgressBar
            SkillAdquired={"JavaScrypt"}
            progressValueOfSkill={"70%"}
          />
          <MySkillsProgressBar
            SkillAdquired={"TypeScrypt"}
            progressValueOfSkill={"70%"}
          />
          <MySkillsProgressBar
            SkillAdquired={"React"}
            progressValueOfSkill={"50%"}
          />
          <MySkillsProgressBar
            SkillAdquired={"WordPress"}
            progressValueOfSkill={"70%"}
          />
        </div>
      </div>
    </section>
  );
}

export default MainSectionAbout;
