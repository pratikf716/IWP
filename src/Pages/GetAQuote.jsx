import React, { useState } from 'react';
import './GetAQuote.css';
 

const GetAQuote = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({ name, email, message });
  };

  return (
    <div className="container-fluid bg-primary bg-quote " style={{ margin: '0px 0' }}>
      <div className="container py-4">
        <div className="row g-0 justify-content-start">
          <div className="col-lg-6 justify-content-start">
            <div className=" bg text-center p-5">
              <h1 className="mb-4 text-white">Get A Quote</h1>
              <form onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-12 col-sm-6">
                    <input
                      type="text"
                      className="form-control bg-light border-0"
                      placeholder="Your Name"
                      style={{ height: '55px' }}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="col-12 col-sm-6">
                    <input
                      type="email"
                      className="form-control bg-light border-0"
                      placeholder="Your Email"
                      style={{ height: '55px' }}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="col-12">
                    <textarea
                      className="form-control bg-light border-0 py-3"
                      rows="2"
                      placeholder="Message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    />
                  </div>
                  <div className="col-12">
                    <button className="btn  w-100 py-3 text-white" type="submit" style={{ backgroundColor: '#0b5079', borderColor: '#0b5079'}}>
                      Get A Quote
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetAQuote;
