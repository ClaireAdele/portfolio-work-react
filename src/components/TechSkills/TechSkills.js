import React from 'react';
import ProjectImgCard from './ProjectImgCards';
import ProjectVideoCards from './ProjectVideoCards';

export default function TechSkills() {
    return (
        <div id="techContainer">
                <div id="projectsContainer">
                <ProjectImgCard />
                <ProjectVideoCards />
                </div>
        </div>
    )
}
