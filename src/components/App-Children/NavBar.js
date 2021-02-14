import React from 'react';
import { Link } from "@reach/router";

export default function NavBar() {
    return (
        <div id="navigation">
            <Link class="navLink" to="/">Home</Link>
            <Link class="navLink" to="/about">About</Link>
            <div class="dropdown">
            <span class="navLink">Technical skills</span>
            <div class="dropdown-content">
            <Link  to="/technical_skills/backend_projects">Back-End Projects</Link>
            <Link  to="/technical_skills/frontend_projects">Front-End Projects</Link>
            </div>
            </div>
            <Link class="navLink" to="/experience">Experience</Link>
        </div>
    )
}
