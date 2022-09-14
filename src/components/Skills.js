import { Component } from "react";

class Skills extends Component {
    constructor() {
        super();

        this.state = {
            skills: [{
                id: uniqid(),
                name: '',
            }],
            edit: false,
        }
    }

    handleSkillsChange = e => {
        this.setState({
            name: e.target.value
        })
    }

    toggleEditButton = e => {
        this.setState(prevState => ({
            edit: !prevState.edit
        }))
    }

    render() {

        const {
            name,
            edit,
            id,
        } = this.state;

        return (
            

            <div className="skills">
                <h2>Skills</h2>

                <button onClick={this.toggleEditButton} type="button">Edit</button>
                {edit && <form>
                    <label htmlFor="skillName">Skill</label>
                    <input type="text" id="skillName" onChange={this.handleSkillChange} value={name}></input>
                    
                    </form>}
            </div>
        )
    }
}