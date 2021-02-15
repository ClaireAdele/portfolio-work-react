import React, { Component } from 'react';
import ProjectCard from "./ProjectCard";
import ScreenShot from "./img-projects/be-nc-news-screenshot.png"

export default class Backend extends Component {
    state = {
        projects: [
            {
            idImg : "screenshot-be-nc-news",
            altImg : "be-nc-news",
            src: ScreenShot,
            github_link: "https://github.com/ClaireAdele/Dummy-News-App",
            gitHub: "GitHub Repositery",
            hosted: "Hosted Version", 
            hosted_version_link:"https://claire-castanet-nc-news.herokuapp.com/",
            description: "Be-NC-News is a dummy API build during the back-end module of the Northcoders bootcamp, using Node.js. It is an Express server that uses Knex to build SQL database queries. It is built using the Model-View-Control decision pattern, which allowed me to efficiently manipulate data and handle errors on dedicated files."
        }]
    }

    render() {
        return (
            <div>
                {this.state.projects.map((project) => {
                    return <ProjectCard project={project} />
                })}
            </div>
        )
    }
}
