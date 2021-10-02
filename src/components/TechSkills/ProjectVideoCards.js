import React, { Component } from 'react';
import VideoWebsite from "./img-projects/HodgesHounds.mp4";
import VideoGigBuddy from "./img-projects/GigBuddy.mp4";
import SingleProjectVideoCard from './SingleProjectCardVideo';


export default class ProjectImgCard extends Component {
    state = {
        projects: [
        {
            title: "Fresh News",
            src: VideoWebsite,
            type: "video/mp4",
            github_link: "https://github.com/ClaireAdele/fresh-news-app",
            gitHub: "GitHub Repositery",
            description: "Fresh News App is the frontend I have built for my Be-Nc-News API. I have built it using React, building my API calls with axios. It supports the functionalities in my API, such as, for instance, writing and posting comments, or upvoting/downvoting articles and comments.",
            technologyUsed: "React, axios, CSS, HTML"
        },
        {
            title: "Hodge's Hounds Dog Groomers",
            src: VideoWebsite,
            type:"video/mp4",
            github_link: "https://github.com/ClaireAdele/HodgesHounds",
            gitHub: "GitHub Repositery",
            description: "Hodge's Hounds was a project created to help a family member who was considering opening a dog grooming business. I designed it with their needs in mind, creating an interactive login for them to be able to modify some of the information displayed dynamically from their end, without my help. I created a small Firebase Firestore database to hold this information, plus a login though Firebase too. The website was built using React.", 
            technologyUsed: "Firebase (Firestore, Auth), React"
        },
        {
            title: "Gig Buddy",
            src: VideoGigBuddy,
            type:"video/mp4",
            github_link: "https://github.com/ClaireAdele/nc-project",
            gitHub: "GitHub Repositery",
            description: "Gig Buddy is a cross-platform mobile app designed to help music fans connect with each other and avoid ever having to go solo to a gig. After signing-up and updating their profile, users can browse through thousands of events and let other users know that they are looking to buddy up with someone for a specific gig. Users can look for events based on their location or create a custom search, with the results displayed flexibly, on a map and in a list format. Then they can access further event information, including which other users looking for a buddy or attending. The in-built secure chat functionality allows users to message each other without having to share personal details with people they don’t know well yet, keeping Gig Buddy users safe while they connect with new friends.", 
            technologyUsed: "JavaScript, React Native, React Native Maps, Gifted Chat, Firebase Authentication, Firestore Database, Axios, Ticket Master API, Expo, Android Studio, XCode"
        }
        ]
    }

    render() {
        return (
            <div>
                {this.state.projects.map((project) => {
                    return <SingleProjectVideoCard project={project} />
                })}
            </div>
        )
    }
}
