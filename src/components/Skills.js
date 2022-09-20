import { Component } from "react";
import uniqid from "uniqid";

class Skills extends Component {
  constructor() {
    super();

    this.state = {
      skills: [
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
      ],
      edit: false,
    };
  }

  handleSkillsChange = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  submitAddSkill = (e) => {
    this.setState({
      skills: this.state.skills.concat({
        id: uniqid(),
        name: this.state.name,
      }),
      name: "",
    });
    this.toggleEditButton();
  };

  toggleEditButton = (e) => {
    this.setState((prevState) => ({
      edit: !prevState.edit,
    }));
  };

  handleRemove = (key) => {
    const newSkill = this.state.skills.filter((skills) => skills.id !== key);

    this.setState({
      skills: newSkill,
    });
  };

  render() {
    const { skills, name, edit } = this.state;

    return (
      <div className="skills">
        <h2>Skills</h2>
        {skills.map((skill) => {
          return (
            <div key={skill.id} onClick={() => this.handleRemove(skill.id)}>
              <p>{skill.name}</p>
            </div>
          );
        })}
        <button
          onClick={this.toggleEditButton}
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
              onChange={this.handleSkillsChange}
              value={name}
            ></input>
            <button type="submit" onClick={this.submitAddSkill}>
              Done
            </button>
            <button type="button" onClick={this.toggleEditButton}>
              Close
            </button>
          </form>
        )}
      </div>
    );
  }
}

export default Skills;
