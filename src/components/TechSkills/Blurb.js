import React from 'react'

export default function Blurb() {
    return (
        <div id="flex-container-skills"> 
            <div id="column 1">     
            <p class="skillbox" id="skillbox-JS">JavaScript</p>
            <p class="skillbox" id="skillbox-Node">Node.js</p>
            <p class="skillbox" id="skillbox-Express">Express</p>
            <p class="skillbox" id="skillbox-SQL">SQL</p>
            <p class="skillbox" id="skillbox-Knex">Knex (SQL query-builder)</p>
            </div>
            <div id="column 2">   
            <p class="skillbox" id="skillbox-React">React</p>
            <p class="skillbox" id="skillbox-HTML">HTML</p>
            <p class="skillbox" id="skillbox-CSS">CSS</p>
            <p class="skillbox" id="skillbox-Axios">Axios (interact with APIs)</p>
            </div>
        </div>
    )
}
