import React, { useState, useEffect } from "react";

function Contact() {

    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [cityState, setCityState] = useState('');
    const [linkedIn, setLinkedIn] = useState('');
    const [edit, setEdit] = useState(false);

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleCityStateChange = (e) => {
    setCityState(e.target.value);
  };

  const handleLinkedInChange = (e) => {
    setLinkedIn(e.target.value);
  };

  const toggleEdit = () => {
    setEdit(!edit)
  }

    return (
      <div className="contact">
        <h2>Contact</h2>
        <p>{email ? email : "your-email@email.com"}</p>
        <p>{phone ? phone : "555-555-5555"}</p>
        <p>{cityState ? cityState : "Your City, Your State"}</p>
        <a href={linkedIn ? linkedIn : "#"}>LinkedIn</a>
        <button
          className="contactEditBtn"
          type="button"
          onClick={() => toggleEdit()}
        >
          Edit
        </button>

        {edit && (
          <form className="contactForm">
            <label htmlFor="phone">Phone #</label>
            <input
              type="text"
              id="phone"
              value={phone}
              onChange={() => handlePhoneChange()}
              required
            />
            <label htmlFor="email">E-Mail</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={() => handleEmailChange()}
              required
            />
            <label htmlFor="cityState">City, State</label>
            <input
              type="text"
              id="cityState"
              value={cityState}
              onChange={() => handleCityStateChange()}
              required
            />
            <label htmlFor="linkedIn">linkedIn URL</label>
            <input
              type="text"
              id="linkedIn"
              value={linkedIn}
              onChange={() => handleLinkedInChange()}
              required
            />
            <button type="button" onClick={() => toggleEdit()}>
              Done
            </button>
          </form>
        )}
      </div>
    );
}

export default Contact;
