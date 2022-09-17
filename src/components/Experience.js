import React, { Component } from "react";
import uniqid from 'uniqid';

class Experience extends Component {
    constructor() {
        super();

        this.state = {
            experience: [{
                id: uniqid(),
                title: 'Senior Frontend Developer',
                company: 'Capsule Corp',
                tenure: 'July 2021 - Current',
                location: 'Atlanta, GA',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae luctus magna. Pellentesque dapibus porttitor sapien, id bibendum massa finibus et. Maecenas non cursus mi. Aenean ut velit vitae orci cursus tristique nec vel ex. Aliquam et dolor ut neque feugiat lobortis sed sed lectus. Duis varius aliquam enim, et aliquet nunc volutpat sit amet. Suspendisse potenti. Maecenas pellentesque est nec mauris ultricies placerat. Aenean auctor lectus vitae mattis rutrum. Cras congue blandit lacus vitae lobortis. Etiam pharetra risus sit amet hendrerit tristique.',
            },
            {
                id: uniqid(),
                title: 'Frontend Developer',
                company: 'Acme Corp',
                tenure: 'May 2017 - July 2021',
                location: 'Atlanta, GA',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae luctus magna. Pellentesque dapibus porttitor sapien, id bibendum massa finibus et. Maecenas non cursus mi. Aenean ut velit vitae orci cursus tristique nec vel ex. Aliquam et dolor ut neque feugiat lobortis sed sed lectus. Duis varius aliquam enim, et aliquet nunc volutpat sit amet. Suspendisse potenti. Maecenas pellentesque est nec mauris ultricies placerat. Aenean auctor lectus vitae mattis rutrum. Cras congue blandit lacus vitae lobortis. Etiam pharetra risus sit amet hendrerit tristique.',
            },
            {
                id: uniqid(),
                title: 'Jr Frontend Developer',
                company: 'Burger World Corp',
                tenure: 'March 2015 - May 2017',
                location: 'Atlanta, GA',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae luctus magna. Pellentesque dapibus porttitor sapien, id bibendum massa finibus et. Maecenas non cursus mi. Aenean ut velit vitae orci cursus tristique nec vel ex. Aliquam et dolor ut neque feugiat lobortis sed sed lectus. Duis varius aliquam enim, et aliquet nunc volutpat sit amet. Suspendisse potenti. Maecenas pellentesque est nec mauris ultricies placerat. Aenean auctor lectus vitae mattis rutrum. Cras congue blandit lacus vitae lobortis. Etiam pharetra risus sit amet hendrerit tristique.',
            }],
            add: false,
        }
    }

    toggleAddExperience = () => {
        this.setState(prevState => ({
            add: !prevState.add
        }))
    }

    handleTitleChange = e => {
        this.setState({
            title: e.target.value
        })
    }

    handleCompanyChange = e => {
        this.setState({
            company: e.target.value
        })
    }

    handleTenureChange = e => {
        this.setState({
            tenure: e.target.value
        })
    }

    handleLocationChange = e => {
        this.setState({
            location: e.target.value
        })
    }

    handleDescriptionChange = e => {
        this.setState({
            description: e.target.value
        })
    }

    submitAddExperience = e => {
        e.preventDefault();
        this.setState({
            experience: this.state.experience.concat({
                id: uniqid(),
                title: this.state.title,
                company: this.state.company,
                tenure: this.state.tenure,
                location: this.state.location,
                description: this.state.description,
            }),
            title: '',
            company: '',
            tenure: '',
            location: '',
            description: '',
        })

        this.toggleAddExperience();
    }

    render() {
        
        const {
            experience,
            id,
            company,
            title,
            tenure,
            location,
            description,
            add,
        } = this.state;

        return (
            <div>
            <h2 className="Experience">Experience</h2>
            {experience.map(job => {
                return(
                    <div className="job" key={id}>
                        <h4>{job.title}</h4>
                        <p>{job.company}</p>
                        <p>{job.tenure} / {job.location}</p>
                        <p>{job.description}</p>
                    </div>
                )
            })}
            <button onClick={this.toggleAddExperience} type="button">Add</button>
            {add && <form>
                <label htmlFor="title">Title</label>
                <input type="text" id="title" onChange={this.handleTitleChange} value={title}/>
                <label htmlFor="company">Company</label>
                <input type="text" onChange={this.handleCompanyChange} value={company}/>
                <label htmlFor="tenure">Tenure</label>
                <input type="text" onChange={this.handleTenureChange} value={tenure}/>
                <label htmlFor="location">Location</label>
                <input type="text" onChange={this.handleLocationChange} value={location}/>
                <label htmlFor="description">Description</label>
                <input type="textArea" onChange={this.handleDescriptionChange} value={description}/>
                <button type="button" onClick={this.submitAddExperience}>Complete</button>
                <button type="button" onClick={this.toggleAddExperience}>Close</button>
                </form>}
            </div>
        )
    }
}

export default Experience