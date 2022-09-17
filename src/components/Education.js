import { Component } from "react";
import uniqid from 'uniqid';

class Education extends Component {
    constructor() {
        super();

        this.state = {
            degree: '',
            major: '',
            gpa: '',
            school: '',
            term: '',
            cityState: '',
            education: [{
                id: uniqid(),
                degree: 'BS',
                major: 'Computer Science',
                gpa: '4.0 GPA',
                school: 'Virginia Polytechnic Institute',
                term: 'May 2015',
                cityState: 'Blacksburg, VA',
            }],
            add: false,
        }
    }

    handleDegreeChange = e => {
        this.setState({
            degree: e.target.value
        })
    }

    handleMajorChange = e => {
        this.setState({
            major: e.target.value
        })
    }

    handleGpaChange = e => {
        this.setState({
            gpa: e.target.value
        })
    }

    handleSchoolChange = e => {
        this.setState({
            school: e.target.value
        })
    }
    
    handleTermChange = e => {
        this.setState({
            term: e.target.value
        })
    }

    handleCityStateChange = e => {
        this.setState({
            cityState: e.target.value
        })
    }

    toggleAddEducation = () => {
        this.setState(prevState => ({
            add: !prevState.add
        }))
    }

    submitAddEducation = e => {
        e.preventDefault();
        this.setState({
            education: this.state.education.concat({
                id: uniqid(),
                degree: this.state.degree,
                major: this.state.major,
                gpa: this.state.gpa,
                school: this.state.school,
                term: this.state.term,
                cityState: this.state.cityState,
            }),
            degree: '',
            major: '',
            gpa: '',
            school: '',
            term: '',
            cityState: '',
        })

        this.toggleAddEducation()
    }

    render() {

        const {
            degree,
            major,
            gpa,
            school,
            term,
            cityState,
            education,
            add,
        } = this.state;

        return (
            <div>
                <h2>Education</h2>
                {education.map(edu => {
                    return(
                        <div key={edu.id}>
                                <p className="degree">{edu.degree}</p>
                                <p className="major">{edu.major}</p>
                                <p className="gpa">{edu.gpa}</p>
                                <p className="school">{edu.school}</p>
                                <p className="term">{edu.term}</p>
                                <p className="cityState">{edu.cityState}</p>
                        </div>
                    )
                })}
                <button type='button' onClick={this.toggleAddEducation}>Add</button>
                {add && <form>
                    <label htmlFor="degree">Degree</label>
                    <input type="text" id="degree" onChange={this.handleDegreeChange} value={degree} required/>
                    <label htmlFor="major">Major</label>
                    <input type="text" id="major" onChange={this.handleMajorChange} value={major} required/>
                    <label htmlFor="gpa">GPA</label>
                    <input type="text" id="gpa" onChange={this.handleGpaChange} value={gpa} required/>
                    <label htmlFor="school">School</label>
                    <input type="text" id="school" onChange={this.handleSchoolChange} value={school} required/>
                    <label htmlFor="term">Term</label>
                    <input type="text" id="term" onChange={this.handleTermChange} value={term} required/>
                    <label htmlFor="cityState">City/State</label>
                    <input type="text" id="cityState" onChange={this.handleCityStateChange} value={cityState} required/>
                    <button type="submit" onClick={this.submitAddEducation}>Complete</button>
                    <button type="button" onClick={this.toggleAddEducation}>Close</button>
                    </form>}
                
            </div>
        )
    }
}

export default Education