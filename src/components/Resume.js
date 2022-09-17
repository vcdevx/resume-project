import React, { Component } from "react";
import Contact  from './Contact'
import Education from './Education'
import Experience from './Experience'
import Header from './Header'
import Skills from './Skills'
import '../styles/Resume.css';


class Resume extends Component {
    constructor() {
        super()
    }

    render() {
        return(
            <div className="resume">
                <header>
                <Header />
                </header>
                <div class="container">
                <aside>
                    <Contact />
                    <Education />
                    <Skills />
                </aside>
                <main>
                    <Experience />
                </main>
                </div>
            </div>
        )
    }
}

export default Resume