import React from 'react'
import iconGitHub from './iconmonstr-github-3.svg'
import iconLinkedin from './iconmonstr-linkedin-3.svg'

export default function Contact() {
    return (
        <div id="contact">
            <p>Contact</p>
            <ul>
                <li>07 802 786 947</li>
                <li>claire.castanet-dev@outlook.com</li>
            </ul>
            <div class="imgLink">
            <a href="https://github.com/ClaireAdele"><img src={iconGitHub} alt="github"></img>
            </a>
            <a href="https://www.linkedin.com/in/claire-castanet-a2a70615a/"><img src={iconLinkedin}
                    alt="LinkedIn"></img>
            </a>
            </div>
        </div>
    )
}
