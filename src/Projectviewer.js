import React, {Component} from 'react';

class Projectviewer extends Component{

    render(){
        const {projects} = this.props;
        return(
            projects.map((project,index)=>{
                return(
                    <div className="projects" key={index}>
                        <h1 className="projects__h1">{project.name}</h1>
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
}

export default Projectviewer;
