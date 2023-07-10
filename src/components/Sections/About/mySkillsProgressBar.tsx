interface MySkillsProgressBarProps {
    SkillAdquired: string;
    progressValueOfSkill: number;
}

function MySkillsProgressBar(props: MySkillsProgressBarProps) {
    const { SkillAdquired, progressValueOfSkill } =
    props;
  return (
    <div className="skill-progress">
      <p className="skill-title">{SkillAdquired}</p>
      <div className="progress-container">
        <p className="progress-text">{progressValueOfSkill}%</p>
        <div className="progress-bar">
          <span className={SkillAdquired}></span>
        </div>
      </div>
    </div>
  );
}

export default MySkillsProgressBar;
