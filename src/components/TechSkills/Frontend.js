import React, { Component } from 'react';
import ScreenShot from "./img-projects/happy-fruit.jpg";
import ProjectCard from "./ProjectCard";

export default class Frontend extends Component {
    state = {
        projects: [
            {
            idImg : "screenshot-be-nc-news",
            altImg : "Fresh News App",
            src: ScreenShot,
            github_link: "https://github.com/ClaireAdele/fresh-news-app",
            gitHub: "GitHub Repositery",
            hosted: "Hosted Version - Work in Progress", 
            hosted_version_link:"#",
            description: "I am currently building the front-end of the be-nc-news project in the back-end projects section. I am using React to build the structure of the app, and am making requests to my API using axios. This is a work in progress, I expect to be able to host the final version soon."
        }]
    }

    render() {
        return (
            <div className="projects-container">
            {this.state.projects.map((project) => {
                return <ProjectCard project={project} />
            })}
            </div>
        )
    }
}

