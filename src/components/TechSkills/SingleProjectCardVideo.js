export default function SingleProjectImgCard(props) {
    return (
        <div >
            <div className="projectCard">
                <video controls className="project-img"> <source src={props.project.src} /></video>
                <p className="descriptionProj"> {props.project.description} <br /><br /> {props.project.technologyUsed}</p>
                <div className="buttonsProj">
                  <a className="linkProj" href={props.project.github_link}>{props.project.gitHub}</a>
                </div>
            </div>
        </div>
    )
}