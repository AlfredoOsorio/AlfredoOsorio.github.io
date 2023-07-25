function RightContactContainer() {
    return (
      <div className="right-contact-container">
        <form action="" className="contact-form">
        <div className="input-control">
                <input type="text" required placeholder="Your Name"/>
                <input type="email" required placeholder="Your email" />
            </div>
            <div className="input-control">
                <input type="text" required placeholder="Enter subject"/>
            </div>
            <div className="input-control">
                <textarea name="" id="" cols={15} rows={8}></textarea>
            </div>
            <div className="submit-button"></div>
        </form>
      </div>
    );
  }
  
  export default RightContactContainer;
  