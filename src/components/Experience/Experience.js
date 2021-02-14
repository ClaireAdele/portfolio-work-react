import React, { Component } from 'react'
import Academic from './Academic'
import Work from './Work'

export default class Experience extends Component {
    state = {
        academic : true,
        work : true

    }

    handleAllClick = () => {
        this.setState({academic : true, work: true});
    }

    handleWorkClick  = () => {
        this.setState({academic : false, work : true});
    }

    handleAcademicClick = () => {
        this.setState({academic : true, work : false});
    }

    render() {
        return (
            this.state.academic && this.state.work ?
            <div>
                <div className="XPButtons">
                <button className="XPButton" onClick={this.handleWorkClick}>Work Experience</button>
                <button className="XPButton" onClick={this.handleAcademicClick}>Academic Experience</button>
                <button className="XPButton" onClick={this.handleAllClick}>All Experience</button>
                </div>
                <Work />
                <Academic />                
           </div>
           :
           this.state.academic && !this.state.work ?
           <div>
               <div className="XPButtons">
                <button className="XPButton" onClick={this.handleWorkClick}>Work Experience</button>
                <button className="XPButton" onClick={this.handleAcademicClick}>Academic Experience</button>
                <button className="XPButton" onClick={this.handleAllClick}>All Experience</button>
                </div>     
                <Academic />          
           </div>
           : 
           this.state.work ?
           <div>
               <div className="XPButtons">
               <button className="XPButton" onClick={this.handleWorkClick}>Work Experience</button>
                <button className="XPButton" onClick={this.handleAcademicClick}>Academic Experience</button>
                <button className="XPButton" onClick={this.handleAllClick}>All Experience</button>
                </div>
                <Work />               
           </div>
           :
           <div className="XPButtons">
           <button className="XPButton" onClick={this.handleWorkClick}>Work Experience</button>
            <button className="XPButton" onClick={this.handleAcademicClick}>Academic Experience</button>
            <button className="XPButton" onClick={this.handleAllClick}>All Experience</button>
           </div>
        )
    }
}
