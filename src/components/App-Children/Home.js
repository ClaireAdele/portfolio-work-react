import React from 'react'
import devImg from './imgs/female developer 1-01.jpg'


export default function Home() {
    return (
        <div id="homepage" >
            <div id="introduction">
            <h1>Claire Castanet</h1>
            <h3>Junior full-stack software developer</h3>
            </div>
            <img src={devImg} id="devImg"></img>
        </div>
    )
}
