interface AboutitemProps {
    howManyObjects: number;
    whatObjectsLine1: string;
    whatObjectsLine2: string;
  }

function AboutItem(props: AboutitemProps) {
    const { howManyObjects, whatObjectsLine1, whatObjectsLine2 } =
    props;

  return (
    <div className="about-item">
      <div className="about-text">
        <p className="large-text">{howManyObjects}+</p>
        <p className="small-text">
          {whatObjectsLine1} <br /> {whatObjectsLine2}
        </p>
      </div>
    </div>
  );
}

export default AboutItem;
