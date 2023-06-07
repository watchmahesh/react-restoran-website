/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useState } from 'react'

const Reservation = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [date_time, setDateTime] = useState('')
    const [people, setPeople] = useState(1)
    const [message, setMessage] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();
        const reservation = { name, email, people, date_time, message }
        try {
            const response = await fetch('http://localhost:5000/api/v1/reservation', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(reservation)
            });
            if (response.ok) {
                const data = await response.json();
                console.log(data);
            } else {
                throw new Error('Error: ' + response.status);
            }
            setName('');
            setEmail('');
            setDateTime('');
            setPeople(1);
            setMessage('');
        } catch (error) {
            console.log('Error fetching products:', error);
        }
    }
    return (
        <>
          <div className="container-xxl py-5 px-0 wow fadeInUp" data-wow-delay="0.1s">
            <div className="row g-0">
              <div className="col-md-6">
                <div className="video">
                  <button type="button" className="btn-play" data-bs-toggle="modal" data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-bs-target="#videoModal">
                    <span></span>
                  </button>
                </div>
              </div>
              <div className="col-md-6 bg-dark d-flex align-items-center">
                <div className="p-5 wow fadeInUp" data-wow-delay="0.2s">
                  <h5 className="section-title ff-secondary text-start text-primary fw-normal">Reservation</h5>
                  <h1 className="text-white mb-4">Book A Table Online</h1>
                  <form onSubmit={handleSubmit}>
                    <div className="row g-3">
                      <div className="col-md-6">
                        <div className="form-floating">
                          <input type="text" className="form-control" id="name" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} />
                          <label htmlFor="name">Your Name</label>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-floating">
                          <input type="email" className="form-control" id="email" placeholder="Your Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                          <label htmlFor="email">Your Email</label>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-floating date" id="date3" data-target-input="nearest">
                          <input type="date" className="form-control datetimepicker-input" id="datetime" placeholder="Date & Time" value={date_time} onChange={(e) => setDateTime(e.target.value)} />
                          <label htmlFor="datetime">Date & Time</label>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-floating">
                          <select className="form-select" id="select1" value={people} onChange={(e) => setPeople(e.target.value)}>
                            <option value="1">People 1</option>
                            <option value="2">People 2</option>
                            <option value="3">People 3</option>
                          </select>
                          <label htmlFor="select1">No Of People</label>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-floating">
                          <textarea className="form-control" placeholder="Special Request" id="message" style={{ height: '100px' }} value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                          <label htmlFor="message">Special Message</label>
                        </div>
                      </div>
                      <div className="col-12">
                        <button className="btn btn-primary w-100 py-3" type="submit">Book Now</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="modal fade" id="videoModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content rounded-0">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">Youtube Video</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                  <div className="ratio ratio-16x9">
                    <iframe className="embed-responsive-item" src="" id="video" allowFullScreen allowScriptAccess="always" allow="autoplay"></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      );
}

export default Reservation
