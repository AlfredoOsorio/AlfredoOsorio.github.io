interface MySkillsProgressBarProps {
  SkillAdquired: string;
  progressValueOfSkill: string;
}

function MySkillsProgressBar(props: MySkillsProgressBarProps) {
  const { SkillAdquired, progressValueOfSkill } = props;

  const widthOfProgressValueOfSkill = {
    width: progressValueOfSkill,
  };

  return (
    <div className="skill-progress">
      <p className="skill-title">{SkillAdquired}</p>
      <div className="progress-container">
        <p className="progress-text">{progressValueOfSkill}</p>
        <div className="progress-bar">
          <span
            className={SkillAdquired}
            style={widthOfProgressValueOfSkill}
          ></span>
        </div>
      </div>
    </div>
  );
}

export default MySkillsProgressBar;
