import React, { useState, useEffect } from "react";
import uniqid from "uniqid";

function Education() {
  const [degree, setDegree] = useState("");
  const [major, setMajor] = useState("");
  const [gpa, setGpa] = useState("");
  const [school, setSchool] = useState("");
  const [term, setTerm] = useState("");
  const [cityState, setCityState] = useState("");
  const [education, setEducation] = useState([
    {
      id: uniqid(),
      degree: "BS",
      major: "Computer Science",
      gpa: "4.0 GPA",
      school: "Virginia Polytechnic Institute",
      term: "May 2015",
      cityState: "Blacksburg, VA",
    },
  ]);
  const [add, setAdd] = useState(false);

  const handleDegreeChange = (e) => {
    setDegree(e.target.value);
  };

  const handleMajorChange = (e) => {
    setMajor(e.target.value);
  };

  const handleGpaChange = (e) => {
    setGpa(e.target.value);
  };

  const handleSchoolChange = (e) => {
    setSchool(e.target.value);
  };

  const handleTermChange = (e) => {
    setTerm(e.target.value);
  };

  const handleCityStateChange = (e) => {
    setCityState(e.target.value);
  };

  const toggleAddEducation = (e) => {
    setAdd(!add);
  };

  const submitAddEducation = (e) => {
    e.preventDefault();
    setEducation({
      education: this.state.education.concat({
        id: uniqid(),
        degree: this.state.degree,
        major: this.state.major,
        gpa: this.state.gpa,
        school: this.state.school,
        term: this.state.term,
        cityState: this.state.cityState,
      }),
      degree: "",
      major: "",
      gpa: "",
      school: "",
      term: "",
      cityState: "",
    });

    toggleAddEducation();
  };

  const handleRemove = (key) => {
    const newEducation = education.filter((education) => education.id !== key);

    setEducation({
      education: newEducation,
    });
  };

  return (
    <div className="education">
      <h2>Education</h2>
      {education.map((edu) => {
        return (
          <div
            key={edu.id}
            onClick={() => handleRemove(edu.id)}
            className="edu"
          >
            <p className="degree">{edu.degree}</p>
            <p className="major">{edu.major}</p>
            <p className="gpa">{edu.gpa}</p>
            <p className="school">{edu.school}</p>
            <p className="term">{edu.term}</p>
            <p className="cityState">{edu.cityState}</p>
          </div>
        );
      })}
      <button
        type="button"
        className="educationEditBtn"
        onClick={() => toggleAddEducation()}
      >
        Add
      </button>
      {add && (
        <form>
          <label htmlFor="degree">Degree</label>
          <input
            type="text"
            id="degree"
            onChange={() => handleDegreeChange()}
            value={degree}
            required
          />
          <label htmlFor="major">Major</label>
          <input
            type="text"
            id="major"
            onChange={() => handleMajorChange()}
            value={major}
            required
          />
          <label htmlFor="gpa">GPA</label>
          <input
            type="text"
            id="gpa"
            onChange={() => handleGpaChange()}
            value={gpa}
            required
          />
          <label htmlFor="school">School</label>
          <input
            type="text"
            id="school"
            onChange={() => handleSchoolChange()}
            value={school}
            required
          />
          <label htmlFor="term">Term</label>
          <input
            type="text"
            id="term"
            onChange={() => handleTermChange()}
            value={term}
            required
          />
          <label htmlFor="cityState">City/State</label>
          <input
            type="text"
            id="cityState"
            onChange={() => handleCityStateChange()}
            value={cityState}
            required
          />
          <button type="submit" onClick={() => submitAddEducation()}>
            Done
          </button>
          <button type="button" onClick={() => toggleAddEducation()}>
            Close
          </button>
        </form>
      )}
    </div>
  );
}

export default Education;
