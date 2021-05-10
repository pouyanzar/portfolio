import React from 'react';

function Projectviewer({projects}){

    return(
        projects.map((project,index)=>{
            return(
                <div className="projects" key={index}>
                    <h2 className="projects__h2">{project.name}</h2>
                    <p className="projects__p">{project.desc}</p>
                    <div className="Projects__ImgWrapper">
                        <img className="projects__img" src={project.pic} alt={project.name}/>
                    </div>
                    <a href={project.link} target="_blank" rel="noopener noreferrer"><button className="projects__button" type="button" value="View">View</button></a>
                    <p className="divider"></p>
                </div>
            )
        })
    )
}

export default Projectviewer;
