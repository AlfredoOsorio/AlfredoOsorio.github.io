interface MySkillsProgressBarProps {
    SkillAdquired: string;
    progressValueOfSkill: number;
}

function MySkillsProgressBar(props: MySkillsProgressBarProps) {
    const { SkillAdquired, progressValueOfSkill } =
    props;
  return (
    <div className="progress-bar">
      <p className="progress-title">{SkillAdquired}</p>
      <div className="progress-container">
        <p className="progress-text">{progressValueOfSkill}%</p>
        <div className="progress-bar-">
          <span className={SkillAdquired}></span>
        </div>
      </div>
    </div>
  );
}

export default MySkillsProgressBar;
