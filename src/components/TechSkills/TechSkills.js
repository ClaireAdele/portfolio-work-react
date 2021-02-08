import { Router } from '@reach/router';
import React from 'react';
import Backend from './Backend'
import Frontend from './Frontend'
import Blurb from './Blurb'


export default function TechSkills() {
    return (
        <div >
            <Blurb />
            <Router>
                <Backend path="/backend_projects" />
                <Frontend path ="/frontend_projects" />
            </Router>
        </div>
    )
}
