import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

interface TimelineItemProps {
  duration: string;
  jobTitle: string;
  company: string;
  description: string;
  stackUsed: string;
}

function TimelineItem(props: TimelineItemProps) {
  const { duration, jobTitle, company, description, stackUsed } = props;

  return (
    <div className="timeline-item">
      <div className="timeline-icon">
        <FontAwesomeIcon icon={faBriefcase} />
      </div>
      <p className="timeline-duration">{duration}</p>
      <h5>
        {jobTitle} <span>- {company}</span>
      </h5>
      <p>
        {description} <br />
        Stack used: {stackUsed}
      </p>
    </div>
  );
}

export default TimelineItem;
