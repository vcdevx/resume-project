import { Component } from "react";
import uniqid from 'uniqid'

class Skills extends Component {
    constructor() {
        super();

        this.state = {
            skills: [{
                id: uniqid(),
                name: 'Python (Django)',
            },
            {
                id: uniqid(),
                name: 'Javascript (NodeJS, ReactJS, jQuery)',
            },
            {
                id: uniqid(),
                name: 'SQL (MySQL, PostgreSQL, NoSQL)',
            },
            {
                id: uniqid(),
                name: 'HTML/CSS',
            },
            {
                id: uniqid(),
                name: 'Git',
            }],
            edit: false,
        }
    }

    handleSkillsChange = e => {
        this.setState({
            name: e.target.value
        })
    }

    submitAddSkill = e => {
        this.setState({
            skills: this.state.skills.concat({
                iq: uniqid(),
                name: this.state.name,
            }),
            name: '',
        })
        this.toggleEditButton();
    }

    toggleEditButton = e => {
        this.setState(prevState => ({
            edit: !prevState.edit
        }))
    }

    render() {

        const {
            skills,
            name,
            edit,
            id,
        } = this.state;

        return (
            

            <div className="skills">
                <h2>Skills</h2>
                {skills.map(skill => {
                    return(
                        <div key={id}>
                        <p>{skill.name}</p>
                        </div>
                    )
                })}
                <button onClick={this.toggleEditButton} type="button">Edit</button>
                {edit && <form>
                    <label htmlFor="skillName">Skill</label>
                    <input type="text" id="skillName" onChange={this.handleSkillsChange} value={name}></input>
                    <button type="submit" onClick={this.submitAddSkill}>Add</button>
                    <button type="button" onClick={this.toggleEditButton}>Close</button>
                    </form>}
            </div>
        )
    }
}

export default Skills