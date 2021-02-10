import React, {Component} from 'react';

export default class Skills extends Component{

    state={
        skills:[
            "/pic/html51.svg",
            "/pic/css3.svg",
            "/pic/sass.svg",
            "/pic/js.svg",
            "/pic/react.png",
            "/pic/npm.svg",
            "/pic/nodejs3.svg",
            "/pic/github.svg",
            "/pic/jira.svg"
        ]
    }

    render()
    {
        return(
            <div className="skill">
            <section id="Skills"><h2 className="section__title">Skills</h2></section>
            <div className="skill__img">{this.state.skills.map((skill,index)=>{
                return  <img src={skill} className="skill__img--pic" key={index} alt={skill}/>
                    }
                )
            }
       </div> 
       </div>)
    }
}