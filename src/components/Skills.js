import { useState } from "react";
import uniqid from "uniqid";

function Skills() {
  const [name, setName] = useState("");
  const [skills, setSkills] = useState([
    {
      id: uniqid(),
      name: "Python (Django)",
    },
    {
      id: uniqid(),
      name: "Javascript (NodeJS, ReactJS, jQuery)",
    },
    {
      id: uniqid(),
      name: "SQL (MySQL, PostgreSQL, NoSQL)",
    },
    {
      id: uniqid(),
      name: "HTML/CSS",
    },
    {
      id: uniqid(),
      name: "Git",
    },
  ]);

  const [edit, setEdit] = useState(false);

  const handleSkillsChange = (e) => {
    setName(e.target.value);
  };

  const submitAddSkill = (e) => {
    setSkills(
      skills.concat({
        id: uniqid(),
        name: name,
      })
    );
    setName("");
    toggleEditButton();
  };

  const toggleEditButton = (e) => {
    setEdit(!edit);
  };

  const handleRemove = (key) => {
    const newSkill = skills.filter((skills) => skills.id !== key);

    this.setSkills(newSkill);
  };

  return (
    <div className="skills">
      <h2>Skills</h2>
      {skills.map((skill) => {
        return (
          <div key={skill.id} onClick={() => handleRemove(skill.id)}>
            <p>{skill.name}</p>
          </div>
        );
      })}
      <button
        onClick={() => toggleEditButton()}
        className="skillsEditBtn"
        type="button"
      >
        Add
      </button>
      {edit && (
        <form>
          <label htmlFor="skillName">Skill</label>
          <input
            type="text"
            id="skillName"
            onChange={() => handleSkillsChange()}
            value={name}
          ></input>
          <div className="buttonContainer">
            <button type="submit" onClick={() => submitAddSkill()}>
              Done
            </button>
            <button type="button" onClick={() => toggleEditButton()}>
              Close
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

export default Skills;
