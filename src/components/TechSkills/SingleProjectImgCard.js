import React from 'react'

export default function SingleProjectImgCard(props) {
    return (
        <div >
            <div className="projectCard">
                <img className="project-img" src={props.project.src} id={props.project.idImg} alt={props.project.altImg} ></img>
                <p className="descriptionProj">{props.project.description} <br /><br /> {props.project.technologyUsed}</p>
                <div className="buttonsProj">
                  <a className="linkProj" href={props.project.github_link}>{props.project.gitHub}</a>
                  <a className="linkProj" href={props.project.hosted_version_link}>{props.project.hosted}</a>
                </div>
            </div>
        </div>
    )
}
