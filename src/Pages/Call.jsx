import "./call.css";

const Call = () => {
  return (
    <div className="container-fluid bg-call-to-action ">
      <div className="container py-5">
        <div className="row g-0 justify-content-center custom-row">
          <div className="col-12 text-center">
            <div className="overlay-container">
              <h1 className="project">Do you have any project?</h1>
              <p className="para" style={{color:'#0b5079'}}>Waterproofing your home office is exciting, but choosing the right products and servicemen while ensuring your safety can be a huge task. That’s where we come in. Our aim is to make home waterproofing a safe and great experience with IWC services. Reimagine your home office as a huge canvas—start your journey with IWC services and let us guide you through all the questions you might have.</p>
              <button
                className="w-50 py-3 btn"
                   type="submit"
                    style={{
                      display: "block",
                        margin: "0 auto",
                        width: "80%",
                          padding: "12px",
                                             }}
                                >
                                Contact Us
                                </button>


            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Call;
