import React, {Component} from 'react';
import Projectviewer from './Projectviewer';

class Projects extends Component{
    state = {
        projects:[
           
            {
                name:"BrainFlix",
                desc:"Responsive cloned YouTube using React, Node.js, API functions",
                link:"https://github.com/pouyanzar/brainflix",
                pic:"/pic/brainflixSC.png"
            },
            {
                name:"RecipeFinder",
                desc:"Responsive receipe search engine using React, Node.js, food2fork website's APIs",
                link:"https://github.com/pouyanzar/recipefinder",
                pic:"/pic/receipeSC.png"
            },
            {
                name: "Inventory",
                desc:"As a member of a collaborative project, a warehouse designed with the possibility of adding, sorting, deleting branches, users, and items. The developers communicated via GitHub and Jira",
                link:"https://inventap.herokuapp.com",
                pic:"/pic/inventorySC.png"
            },
            {
                name:"Finder",
                desc:"MySQL, Node.js, React have been used to build a search engine for truck parts with ability of filtering fields. ",
                link:"https://github.com/pouyanzar/finderapp",
                pic:"/pic/finderSC.png"
            },
            {
                    name:"QFP",
                    desc:"MySQL, Node.js, React have been used to build a online store for truck parts.",
                    link:"https://bitbucket.org/Pou6858/capstone/src/master/",
                    pic:"/pic/qfpSC.png" 
            }

        ]
    }

    
    render(){

        const {projects} = this.state;
        return(
            <div>
                <section id="Projects"><h2 className="section__title">Projects</h2></section>
                <p></p>
                <Projectviewer projects={projects} />

            </div>
        )
    }
}

export default Projects;
