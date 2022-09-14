import React, { Component } from "react";

class Header extends Component {

    constructor(){
        super();

        this.state = {
            name: '',
            title: '',
            edit: false,
        }
    }

    handleNameChange = e => {
        this.setState({
            name: e.target.value
        })
    }

    handleTitleChange = e => {
        this.setState({
            title: e.target.value
        })
    }

    toggleEdit = () => {
        this.setState(prevState => ({
            edit: !prevState.edit
        }))
    }

    render() {

        const {
            name,
            title,
            edit,
        } = this.state

        return (
            <div class="header">
                <h1 className="name">{name ? name : 'Your Name'}</h1>
                <h2>{title ? title : 'Job Title'}</h2>
                <button type="button" onClick={this.toggleEdit}>Edit</button>

                {edit && <form>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" value={this.state.name} onChange={this.handleNameChange} required/>
                <label htmlFor="title">Title</label>
                <input type="text" id="title" value={this.state.title} onChange={this.handleTitleChange} required/>
                <button type="button" onClick={this.toggleEdit}>Submit</button>
                </form>
            }
            </div>
        )
    }
}

export default Header