import DownloadButton from "./downloadButton";

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
          </p>
          <DownloadButton />
        </div>
        <div className="right-about"></div>
      </div>
    </section>
  );
}

export default MainSectionAbout;
