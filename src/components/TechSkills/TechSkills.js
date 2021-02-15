import React from 'react';
import Backend from './Backend'
import Frontend from './Frontend'
import Blurb from './Blurb'


export default function TechSkills() {
    return (
        <div id="techContainer">
                <Blurb />
                <div id="projectsContainer">
                <Backend />
                <Frontend />
                </div>
        </div>
    )
}
