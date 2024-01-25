import React, { Component } from "react";

class Aboutme extends Component {
  state = {
    skills: [
      "HTML",
      "CSS3",
      "SASS",
      "JS",
      "Node.js",
      "React",
      "API",
      "MySql",
      "Sequelize",
    ],
  };
  render() {
    return (
      <div className="about">
        <section id="AboutMe">
          <div className="about__text">
            <h2 className="section__title">About Me</h2>
            <div className="profile1">
              <img
                className="profile1__pic"
                src="/pic/pouyan.jpg"
                alt="Pouyan Zarbafian"
              />
            </div>
            <p className="about__p">
              I am Pouyan Zarbafian, an alumni of Concordia University in
              Computer Science, and LightHouse Labs alumni in Web development.{" "}
              <br />I also graduated from BrainStation College as a Full Stack
              Web Developer in 2018.
              <br /> Coding is my passion and I am always open to exploring new
              tools and platforms.
              <br />I love playing chess, BBQing, camping, canoeing, doing
              martial arts, and cooking.
            </p>
            <a
              className="button"
              href="https://drive.google.com/file/d/1sAsWtYh5mWT6Xh-SQI8zKtMsgkl7G3l4/view?usp=drive_link"
              download="Pouyan-Zarbafian-resume"
            >
              Resume
            </a>
          </div>
        </section>
      </div>
    );
  }
}

export default Aboutme;
