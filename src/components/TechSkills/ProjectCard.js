import React from 'react'


export default function ProjectCard(props) {
    console.log(props.project.src)
    return (
        <div >
            <ul className="projectCard">
                <li><img className="project-img" src={props.project.src} id={props.project.idImg} alt={props.project.altImg} ></img></li>
                <li className="linkProj"><a href={props.project.github_link}>{props.project.gitHub}</a></li>
                <li className="linkProj"><a href={props.project.hosted_version_link}>{props.project.hosted}</a></li>
                <li className="linkProj"><p>{props.project.description}</p></li>
            </ul>
        </div>
    )
}
