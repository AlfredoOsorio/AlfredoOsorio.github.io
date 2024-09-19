import { faCheck } from "@fortawesome/free-solid-svg-icons";
import AnimatedButton from "../../Other components/animatedButton";

function RightContactContainer() {
  return (
    <div className="right-contact-container">
      <form
        action="mailto:alfredoosorioa@gmail.com"
        method="POST"
        encType="text/plain"
        className="contact-form"
      >
        <div className="input-control name-and-email-input">
          <input type="text" required name="name" placeholder="Your Name" />
          <input type="email" required name="email" placeholder="Your email" />
        </div>
        <div className="input-control">
          <input
            type="text"
            required
            name="subject"
            placeholder="Enter subject"
          />
        </div>
        <div className="input-control">
          <textarea
            name="message"
            className="message"
            cols={15}
            rows={8}
          ></textarea>
        </div>
        <button type="submit" className="submit-button">
          <AnimatedButton
            spanButtonInfo={"Submit"}
            spanButtonIcon={faCheck}
          />
        </button>
      </form>
    </div>
  );
}

export default RightContactContainer;
