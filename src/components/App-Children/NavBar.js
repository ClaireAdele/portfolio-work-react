import React from 'react';
import { Link } from "@reach/router";

export default function NavBar() {
    return (
        <div id="navigation">
            <Link class="navLink" to="/">Home</Link>
            <Link class="navLink" to="/about">About</Link>
            <Link class="navLink" to="/experience">Experience</Link>
            <Link class="navLink" to="/technical_skills">Technical Skills</Link>
        </div>
    )
}
