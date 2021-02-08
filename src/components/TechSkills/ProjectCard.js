import React from 'react'


export default function ProjectCard(props) {
    console.log(props.project.src)
    return (
        <div className="projectCard">
            <ul>
                <li><img class="project-img" src={props.project.src} id={props.project.idImg} alt={props.project.altImg} ></img></li>
                <li><a href={props.project.github_link}>{props.project.gitHub}</a></li>
                <li><a href={props.project.hosted_version_link}>{props.project.hosted}</a></li>
                <li><p>{props.project.description}</p></li>
            </ul>
        </div>
    )
}
