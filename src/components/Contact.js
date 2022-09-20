import React, { Component } from "react";

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      phone: "",
      cityState: "",
      linkedIn: "",
      edit: false,
    };
  }

  handlePhoneChange = (e) => {
    this.setState({
      phone: e.target.value,
    });
  };

  handleEmailChange = (e) => {
    this.setState({
      email: e.target.value,
    });
  };

  handleCityStateChange = (e) => {
    this.setState({
      cityState: e.target.value,
    });
  };

  handleLinkedInChange = (e) => {
    this.setState({
      linkedInState: e.target.value,
    });
  };

  toggleEdit = () => {
    this.setState((prevState) => ({
      edit: !prevState.edit,
    }));
  };

  render() {
    const { phone, email, cityState, linkedIn, edit } = this.state;

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
          onClick={this.toggleEdit}
        >
          Edit
        </button>

        {edit && (
          <form className="contactForm">
            <label htmlFor="phone">Phone #</label>
            <input
              type="text"
              id="phone"
              value={this.state.phone}
              onChange={this.handlePhoneChange}
              required
            />
            <label htmlFor="email">E-Mail</label>
            <input
              type="email"
              id="email"
              value={this.state.email}
              onChange={this.handleEmailChange}
              required
            />
            <label htmlFor="cityState">City, State</label>
            <input
              type="text"
              id="cityState"
              value={this.state.cityState}
              onChange={this.handleCityStateChange}
              required
            />
            <label htmlFor="linkedIn">linkedIn URL</label>
            <input
              type="text"
              id="linkedIn"
              value={this.state.linkedIn}
              onChange={this.handleLinkedInChange}
              required
            />
            <button type="button" onClick={this.toggleEdit}>
              Done
            </button>
          </form>
        )}
      </div>
    );
  }
}

export default Contact;
