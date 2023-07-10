interface MySkillsProgressBarProps {
    knowledgeAdquired: string;
    progressValueOfKnowledge: number;
}

function MySkillsProgressBar(props: MySkillsProgressBarProps) {
    const { knowledgeAdquired, progressValueOfKnowledge } =
    props;
  return (
    <div className="all-progress-bars">
      <p className="prog-title">{knowledgeAdquired}</p>
      <div className="progress-container">
        <p className="progress-text">{progressValueOfKnowledge}%</p>
        <div className="progress-bar">
          <span className={knowledgeAdquired}></span>
        </div>
      </div>
    </div>
  );
}

export default MySkillsProgressBar;
