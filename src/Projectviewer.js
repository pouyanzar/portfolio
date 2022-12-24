function Projectviewer({ projects }) {
  return projects.map((project, index) => {
    return (
      <article className="project" key={index} id={project.name}>
        <h2 className="project__h2">{project.name}</h2>
        <p className="project__p">{project.desc}</p>
        <div className="project__ImgWrapper">
          <img className="project__img" src={project.pic} alt={project.name} />
        </div>
        <a href={project.link} target="_blank" rel="noopener noreferrer">
          <button className="project__button" type="button" value="View">
            View
          </button>
        </a>
        <a href={project.github} target="_blank" rel="noopener noreferrer">
          <button className="project__button" type="button" value="GitHub">
            GitHub
          </button>
        </a>
      </article>
    );
  });
}

export default Projectviewer;
